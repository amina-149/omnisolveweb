import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { type, name, email, ...rest } = data;

    // 1. Send Email Notification via Web3Forms (Always triggers)
    const web3FormData = {
      access_key: "066ad15a-2f3a-4c38-84ef-66544dc04620",
      subject: `New ${type} Application: ${name || 'Subscriber'}`,
      from_name: "OmniSolve AI Website",
      name: name || "Unknown",
      email,
      ...rest
    };

    const web3Response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(web3FormData)
    });

    const web3Result = await web3Response.json();
    
    // 2. Save to Airtable based on type
    let AIRTABLE_PAT = "";
    let AIRTABLE_BASE = "";
    let tableName = "Table 1";
    let fields: Record<string, any> = {};

    if (type === "Internship") {
      AIRTABLE_PAT = process.env.INTERN_AIRTABLE_PAT || "";
      AIRTABLE_BASE = "appMa8V8UBAiBNGXf";
      fields = {
        "Name": name,
        "Email": email,
        "University": rest.university || "N/A",
        "Notes": rest.message || ""
      };
    } else if (type === "Ambassador") {
      AIRTABLE_PAT = process.env.AMBASSADOR_AIRTABLE_PAT || "";
      AIRTABLE_BASE = "appgmJouhp1mxCDiK";
      fields = {
        "Name": name,
        "Notes": `Email: ${email}\nUniversity: ${rest.university || 'N/A'}\nMessage: ${rest.message || 'None'}`
      };
    }

    // Attempt Airtable Sync
    let airtableSuccess = false;
    if (AIRTABLE_PAT && AIRTABLE_BASE) {
      try {
        const atResponse = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/${tableName}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_PAT}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            records: [ { fields } ],
            typecast: true
          })
        });
        
        if (atResponse.ok) {
          airtableSuccess = true;
        } else {
          const atError = await atResponse.json();
          console.error("Airtable Sync Error:", atError);
        }
      } catch (err) {
        console.error("Airtable Connection Error:", err);
      }
    }

    // 3. WhatsApp Notification Strategy (via Airtable Automations or Webhook)
    // RECOMMENDATION: Use Airtable Automations to send WhatsApp alerts.
    // If you ever want a direct server-side WhatsApp webhook, add it here.

    // Return success if at least one primary submission worked
    if (web3Result.success || airtableSuccess) {
      return NextResponse.json({ 
        success: true, 
        message: "Submission processed successfully.",
        airtable: airtableSuccess ? "Synced" : "Skipped" 
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        error: "All submission channels failed." 
      }, { status: 400 });
    }

  } catch (error) {
    console.error("Critical Form Error:", error);
    return NextResponse.json({ success: false, error: 'Internal system fault' }, { status: 500 });
  }
}
