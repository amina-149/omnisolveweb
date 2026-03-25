"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMapMarkerAlt, FaLinkedin, FaWhatsapp, FaEnvelope, 
  FaClock, FaUsers, FaHandshake, FaRocket, FaFacebook, FaCheckCircle, FaExclamationCircle
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success'|'error'|null, text: string }>({ type: null, text: '' });
  
  const [newsSubmitting, setNewsSubmitting] = useState(false);
  const [newsMessage, setNewsMessage] = useState<{ type: 'success'|'error'|null, text: string }>({ type: null, text: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: null, text: "Transmitting secure request..." });

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Contact",
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          project_type: formData.get("project_type"),
          message: formData.get("message")
        })
      });

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: "Signal received! Our intelligence team will contact you within 24 hours." });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitMessage({ type: 'error', text: "Transmission failed. Diagnostics report an anomaly." });
      }
    } catch {
      setSubmitMessage({ type: 'error', text: "Network disconnected. Please verify your connection." });
    }
    setIsSubmitting(false);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsSubmitting(true);
    setNewsMessage({ type: null, text: "Adding to secure channel..." });

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Newsletter",
          name: "Subscriber",
          email: formData.get("email")
        })
      });

      if (response.ok) {
        setNewsMessage({ type: 'success', text: "Subscribed securely." });
        (e.target as HTMLFormElement).reset();
      } else {
        setNewsMessage({ type: 'error', text: "Failed to link channel." });
      }
    } catch {
      setNewsMessage({ type: 'error', text: "Connection error." });
    }
    setNewsSubmitting(false);
  };

  const StyledInput = ({ label, name, type = "text", required = true, isTextArea = false }: any) => (
    <div className="relative group mb-6">
      <label className="block text-xs font-bold tracking-widest text-primary/70 uppercase mb-2 ml-1">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-focus-within:opacity-30 transition duration-500"></div>
        {isTextArea ? (
          <textarea 
            name={name} required={required} disabled={isSubmitting} rows={4}
            className="relative w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-gray-200/80 rounded-xl focus:bg-white focus:outline-none focus:ring-0 text-primary placeholder-gray-400 font-medium disabled:opacity-50 transition-all resize-none shadow-inner"
            placeholder="Detailed parameters of your request..."
          />
        ) : (
          <input 
            type={type} name={name} required={required} disabled={isSubmitting}
            className="relative w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-gray-200/80 rounded-xl focus:bg-white focus:outline-none focus:ring-0 text-primary placeholder-gray-400 font-medium disabled:opacity-50 transition-all shadow-inner"
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-accent/30 overflow-hidden">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 blur-[150px] rounded-full mix-blend-multiply pointer-events-none"></div>
        
        <motion.div 
          className="relative z-10 w-full max-w-4xl mx-auto text-center px-6"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-bold tracking-widest uppercase mb-8 text-primary">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            System Diagnostics & Inquiry
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tighter mb-6">
            Initiate <span className="text-accent">Contact</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Connect with our elite engineering team to architect your next intelligent automation system.
          </p>
        </motion.div>
      </section>

      {/* 2. MAIN CONTACT INTERFACE */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* SECURE TERMINAL (Form) */}
          <motion.div 
            className="lg:col-span-3 group relative"
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-accent/10 rounded-[2.5rem] blur opacity-70 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative bg-white/90 backdrop-blur-2xl p-10 md:p-14 rounded-[2rem] border border-white shadow-2xl">
              
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-primary">Secure Comm Protocol</h2>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">Direct System Access</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} id="consultation-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                  <StyledInput label="Authorized Identity" name="name" />
                  <StyledInput label="Comm Protocol (Email)" name="email" type="email" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                  <StyledInput label="Enterprise / Faction" name="company" required={false} />
                  <div className="relative group mb-6">
                    <label className="block text-xs font-bold tracking-widest text-primary/70 uppercase mb-2 ml-1">System Type Required</label>
                    <select 
                      name="project_type" required disabled={isSubmitting}
                      className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-gray-200/80 rounded-xl focus:outline-none focus:ring-0 text-primary font-medium transition-all shadow-inner appearance-none"
                    >
                      <option value="">Select Architecture...</option>
                      <option value="AI Voice Agents">AI Voice Agents</option>
                      <option value="WhatsApp AI Agents">WhatsApp AI Agents</option>
                      <option value="AI Lead Generation">Lead Gen Algorithms</option>
                      <option value="Complete Website + AI System">Complete System (Web + AI)</option>
                      <option value="Business Process Automation">Process Automation</option>
                      <option value="Other">Custom Intelligence Request</option>
                    </select>
                  </div>
                </div>

                <StyledInput label="Mission Coordinates" name="message" isTextArea />

                <AnimatePresence>
                  {submitMessage.text && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                      className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-sm font-bold border ${
                        submitMessage.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'
                      }`}
                    >
                      {submitMessage.type === 'success' ? <FaCheckCircle className="text-lg"/> : <FaExclamationCircle className="text-lg"/>}
                      {submitMessage.text}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  type="submit" disabled={isSubmitting}
                  className="group/btn relative w-full flex justify-center items-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primary/90 disabled:opacity-70"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? 'Transmitting Data...' : 'Deploy Request'}
                    <HiArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* COMM CENTERS (Sidebar) */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Headquarters Card */}
            <div className="bg-primary text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <FaMapMarkerAlt className="text-8xl" />
              </div>
              <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-white/60">Global Headquarters</h3>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <p className="text-lg font-bold mb-1">ALPHA Square Chaklala</p>
                  <p className="text-white/80">Old Airport, Chaklala Road<br/>Rawalpindi, Punjab, Pakistan</p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-1">Secure Hotlines</p>
                  <a href="tel:+525547000330" className="block text-xl font-bold hover:text-accent transition-colors">+52 554 700 0330</a>
                  <a href="mailto:amina@omnisolveai.org" className="block mt-2 font-medium hover:text-accent transition-colors">amina@omnisolveai.org</a>
                </div>
              </div>
            </div>

            {/* Support Network Card */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden group">
              <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-primary/50">Intelligence Network</h3>
              <div className="space-y-6 relative z-10 text-primary">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-accent"><FaClock className="text-xl"/></div>
                  <div>
                    <h4 className="font-bold">System Status</h4>
                    <p className="text-sm text-gray-500 font-medium">Mon-Fri: 0900 - 1800 PKT</p>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <a href="https://wa.me/525547000330" target="_blank" className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 shadow-lg shadow-green-500/30 transition-all">
                    <FaWhatsapp className="text-2xl" />
                  </a>
                  <a href="https://www.linkedin.com/company/omnisolve-ai/" target="_blank" className="w-12 h-12 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:scale-110 shadow-lg shadow-[#0077b5]/30 transition-all">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="https://www.facebook.com/Amina.Riaz149" target="_blank" className="w-12 h-12 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:scale-110 shadow-lg shadow-[#1877f2]/30 transition-all">
                    <FaFacebook className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. PARTNERSHIP SPECS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: FaRocket, title: "48hr Protocol", desc: "Rapid deployment procedures enabled." },
            { icon: FaUsers, title: "NICAT Verified", desc: "Backed by premium tech incubators." },
            { icon: FaHandshake, title: "Zero-Risk Pilot", desc: "Test the AI architecture without commitment." },
            { icon: FaClock, title: "24/7 Autonomy", desc: "Our agents process data without sleep." }
          ].map((item, idx) => (
            <motion.div key={idx} 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: idx*0.1 }}
              className="text-center p-8 bg-gray-50 rounded-[2rem] border border-gray-100 hover:border-accent/20 transition-all"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-accent text-2xl">
                <item.icon />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm font-medium text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. NEWSLETTER INTEGRATION */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-8">
        <motion.div 
          className="relative bg-gradient-to-br from-primary to-primary/95 rounded-[3rem] p-12 text-center overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-4">Sync to Our Data Stream</h2>
            <p className="text-white/70 font-medium mb-10">
              Receive classified updates regarding AI breakthroughs, new features, and OmniSolve network expansion directly to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="relative flex flex-col sm:flex-row gap-4">
              <input 
                type="email" name="email" required disabled={newsSubmitting}
                placeholder="Secure Comm Link (Email)"
                className="flex-1 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent shadow-inner transition-all"
              />
              <button 
                type="submit" disabled={newsSubmitting}
                className="px-10 py-4 bg-accent text-white font-bold rounded-2xl hover:bg-accent/90 transition-all shrink-0 shadow-lg shadow-accent/20 disabled:opacity-50"
              >
                {newsSubmitting ? 'Syncing...' : 'Establish Link'}
              </button>
            </form>
            <AnimatePresence>
              {newsMessage.text && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 text-sm font-bold text-accent">
                  {newsMessage.text}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

    </div>
  );
}