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
    let tableName = "Table 1"; // Both screenshots use "Table 1"
    let fields: Record<string, string> = {};

    if (type === "Internship") {
      // User provided token for Internship base
      AIRTABLE_PAT = process.env.INTERN_AIRTABLE_PAT || "";
      AIRTABLE_BASE = "appMa8V8UBAiBNGXf"; // Extracted from screenshot URL
      
      // Fields based on user's screenshot
      fields = {
        "Name": name,
        "Email": email,
        "University": rest.university || "N/A",
        "Notes": rest.message || "" // User should add this column in Airtable!
      };
    } else if (type === "Ambassador") {
      // User provided token for Ambassador base
      AIRTABLE_PAT = process.env.AMBASSADOR_AIRTABLE_PAT || "";
      AIRTABLE_BASE = "appgmJouhp1mxCDiK"; // Extracted from screenshot URL
      
      // Fields based on user's screenshot
      fields = {
        "Name": name,
        "Notes": `Email: ${email}\nUniversity: ${rest.university || 'N/A'}\nMessage: ${rest.message || 'None'}`
      };
    }

    // Only hit Airtable if it's one of the supported forms
    if (AIRTABLE_PAT && AIRTABLE_BASE && Object.keys(fields).length > 0) {
      try {
        const atResponse = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/${tableName}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_PAT}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            records: [ { fields } ],
            typecast: true // Allows Airtable to best-effort cast strings
          })
        });
        
        if (!atResponse.ok) {
          const atError = await atResponse.json();
          console.error("Airtable Sync Failed:", atError);
        }
      } catch (err) {
        console.error("Airtable connection error:", err);
      }
    }

    if (web3Result.success) {
      return NextResponse.json({ success: true, message: "Submission successful" });
    } else {
      return NextResponse.json({ success: false, error: "Web3Forms failed" }, { status: 400 });
    }

  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
