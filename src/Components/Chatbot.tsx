"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChatBubbleLeftRight, HiXMark, HiPaperAirplane } from "react-icons/hi2";
import { FaRobot } from "react-icons/fa";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

// Company knowledge base for the chatbot
const knowledgeBase: { keywords: string[]; response: string }[] = [
  {
    keywords: ["hello", "hi", "hey", "salam", "assalam", "aoa"],
    response: "Assalam-o-Alaikum! 👋 Welcome to OmniSolve AI. I'm your AI assistant. How can I help you today?\n\nYou can ask about:\n• Our Services\n• Pricing\n• Products (Kisan Pukar AI)\n• Company info\n• How to get started"
  },
  {
    keywords: ["service", "services", "offer", "what do you do", "kya karte"],
    response: "We offer 5 core AI services:\n\n📞 **AI Voice Agents** — 24/7 calls in Urdu + English\n💬 **WhatsApp AI Agent** — Deployed in 48 hours\n🎯 **AI Lead Generation** — 20–50 leads/month\n🤖 **AI SDR Agent** — Automated sales outreach\n⚙️ **Business Process Automation** — HR, CRM, Finance\n\nWant to know more about any specific service?"
  },
  {
    keywords: ["price", "pricing", "cost", "kitna", "rate", "budget", "plan"],
    response: "Our pricing plans:\n\n🟢 **Starter** — PKR 25,000 (~$90 / ¥650)/month\n→ 1 WhatsApp AI Agent, 100 conversations/day\n\n🔵 **Growth** — PKR 75,000 (~$270 / ¥1,900)/month\n→ 3 AI Agents, CRM integration, analytics\n\n🟣 **Enterprise** — PKR 200,000+ (Custom USD/CNY)/month\n→ Unlimited agents, Voice AI, ERP/POS integration\n\n✅ All plans include a **FREE 2-week pilot**!\n\nVisit /pricing for full details or contact us to book a demo."
  },
  {
    keywords: ["voice", "call", "phone", "inbound", "outbound"],
    response: "📞 **AI Voice Agents**\n\nOur AI handles inbound & outbound calls 24/7 in Urdu + English.\n\n✅ Perfect for: Real estate, hospitals, telcos, universities\n✅ Saving: 60–80% vs human call center\n✅ Natural-sounding conversations\n✅ Lead qualification & appointment booking\n\nWant to book a free demo?"
  },
  {
    keywords: ["whatsapp", "wa", "chat agent", "chatbot"],
    response: "💬 **WhatsApp AI Agent**\n\nTrained on YOUR business, deployed in just 48 hours!\n\n✅ Handles customer queries automatically\n✅ Captures leads & books appointments\n✅ Urdu + English support\n✅ Starting from PKR 25,000 (~$90 / ¥650)/month\n\nThis is our fastest ROI service. Want to get started?"
  },
  {
    keywords: ["lead", "leads", "generation", "outbound"],
    response: "🎯 **AI Lead Generation**\n\nFully automated outbound pipeline:\n\n✅ Finds your ideal prospects\n✅ Writes personalized outreach\n✅ Follows up automatically\n✅ Books qualified meetings\n✅ 20–50 leads/month guaranteed\n\nWant to scale your sales pipeline? Book a demo!"
  },
  {
    keywords: ["sdr", "sales", "linkedin", "email outreach"],
    response: "🤖 **AI SDR Agent**\n\nAutomates your entire sales development process:\n\n✅ LinkedIn connection requests\n✅ Personalized email sequences\n✅ Smart follow-ups\n✅ Meeting scheduling\n✅ Works 24/7 across all time zones\n\nReplace your full-time SDR at a fraction of the cost!"
  },
  {
    keywords: ["automation", "automate", "erp", "crm", "hr", "business process"],
    response: "⚙️ **Business Process Automation**\n\n✅ HR automation (onboarding, payroll)\n✅ CRM integration\n✅ Finance workflow automation\n✅ ERP/POS integration\n✅ Custom enterprise solutions\n\nLeveraging our NICAT network for enterprise partnerships."
  },
  {
    keywords: ["kisan", "pukar", "farmer", "agriculture", "product"],
    response: "🌾 **Kisan Pukar AI**\n\nPakistan's first AI-powered voice assistant for farmers!\n\n✅ Crop guidance & pest control advice\n✅ Real-time weather forecasts\n✅ Market price updates\n✅ Urdu + local language support\n✅ WhatsApp & voice call access\n\n🏆 Built after winning the FAO AMR Competition 2025!\n\nVisit /products for more details."
  },
  {
    keywords: ["about", "company", "who", "kon", "kaun"],
    response: "🏢 **OMNISOLVEAI (SMC-PRIVATE) LIMITED**\n\n📋 SECP Registered — Corp ID: 0315980\n📍 NICAT, H-9, Islamabad, Pakistan\n🏆 FAO AMR Competition Winner 2025\n🤝 MOU with Pakistan Executive Forum\n🚀 NICAT Cohort 7 — Selected 2026\n\nFounded by Amina Riaz — building AI solutions from Pakistan for the world."
  },
  {
    keywords: ["founder", "ceo", "amina", "team", "leader"],
    response: "👩‍💼 **Amina Riaz** — CEO & Founder\n\nAmina founded OmniSolve AI and leads the company's vision.\n\n🏆 FAO AMR Competition Winner 2025\n✈️ AeroHack 2026 Participant\n🚀 NICAT Cohort 7 Selected\n🤝 MOU signed with Pakistan Executive Forum"
  },
  {
    keywords: ["contact", "reach", "call", "email", "rabta"],
    response: "📬 **Get In Touch:**\n\n📧 amina@omnisolveai.digital\n📧 omnisolveai@gmail.com\n📱 +92 300 101 6022 (WhatsApp)\n📍 NICAT, H-9, Islamabad, Pakistan\n\nOr visit /contact to fill out our form!\n\nWe respond within 24 hours. 🚀"
  },
  {
    keywords: ["demo", "trial", "free", "pilot", "try", "test"],
    response: "🎯 **Free 2-Week Pilot!**\n\nAll our plans include a FREE 2-week trial:\n\n✅ No commitment required\n✅ Test with real customers\n✅ See actual results first\n✅ WhatsApp agent live in 48 hours\n\n👉 Visit /contact or WhatsApp us at +92 300 101 6022 to start!"
  },
  {
    keywords: ["secp", "registered", "legal", "verify", "registration"],
    response: "✅ **Legally Registered Company**\n\n📋 Name: OMNISOLVEAI (SMC-PRIVATE) LIMITED\n🔢 SECP Corp ID: 0315980\n📅 Registered: November 20, 2025\n📜 Under: Companies Act, 2017\n\n🔗 Verify at: leap.secp.gov.pk\n\nWe believe in complete transparency!"
  },
  {
    keywords: ["nicat", "incubation", "incubator"],
    response: "🚀 **NICAT — National Incubation Center**\n\nWe're proudly selected for NICAT Cohort 7!\n\n📍 Location: H-9, Islamabad\n📅 Launch: April 13, 2026\n🏛️ Pakistan's premier government-backed tech incubator\n\nThis gives us access to mentorship, resources, and enterprise connections."
  },
  {
    keywords: ["language", "urdu", "english", "zaban"],
    response: "🌐 Our AI agents support:\n\n✅ Urdu — Fluent conversational support\n✅ English — Full professional support\n✅ Regional languages — Expanding support\n\nKisan Pukar AI already supports local agricultural terminology!\n\nPerfect for Pakistan's bilingual market."
  }
];

function getResponse(userMessage: string): string {
  const lowerMsg = userMessage.toLowerCase();

  for (const entry of knowledgeBase) {
    for (const keyword of entry.keywords) {
      if (lowerMsg.includes(keyword)) {
        return entry.response;
      }
    }
  }

  return "Thanks for your message! I can help with:\n\n• **Services** — Our 5 AI services\n• **Pricing** — Plans starting PKR 25,000 (~$90 / ¥650)/month\n• **Products** — Kisan Pukar AI\n• **About** — Company information\n• **Contact** — How to reach us\n• **Demo** — Free 2-week pilot\n\nJust type any topic or visit /contact to speak with our team directly! 😊";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Assalam-o-Alaikum! 👋 I'm OmniBot, your AI assistant.\n\nHow can I help you today? Ask about our services, pricing, products, or anything else!",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const quickReplies = [
    "Services",
    "Pricing",
    "Products",
    "Book Demo",
    "Contact"
  ];

  const handleSend = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(messageText),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            aria-label="Open chatbot"
          >
            <HiChatBubbleLeftRight className="text-white text-2xl" />
            {/* Notification dot */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">1</span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[550px] max-h-[calc(100vh-100px)] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/90 p-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <FaRobot className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">OmniBot</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/80 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close chatbot"
              >
                <HiXMark className="text-white text-lg" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.sender === "user"
                        ? "bg-accent text-white rounded-br-md"
                        : "bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-md"
                    }`}
                  >
                    <div className="text-sm whitespace-pre-line leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: msg.text
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\n/g, '<br/>')
                      }}
                    />
                    <div
                      className={`text-[10px] mt-1 ${
                        msg.sender === "user" ? "text-white/60" : "text-gray-400"
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 bg-white border-t border-gray-100 flex-shrink-0">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleSend(reply)}
                      className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-medium rounded-full hover:bg-accent/20 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-200 flex-shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:bg-white transition-all"
                  disabled={isTyping}
                />
                <motion.button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent/90 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiPaperAirplane className="text-lg" />
                </motion.button>
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-2">
                Powered by OmniSolve AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
