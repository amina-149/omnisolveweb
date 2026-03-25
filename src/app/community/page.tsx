"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaBullhorn, FaCheckCircle, FaExclamationCircle, FaChartLine, FaImages } from "react-icons/fa";
import { HiArrowRight, HiOutlineGlobeAlt } from "react-icons/hi2";

export default function CommunityPage() {
  const [internIsSubmitting, setInternIsSubmitting] = useState(false);
  const [internMessage, setInternMessage] = useState<{ type: 'success' | 'error' | null, text: string }>({ type: null, text: '' });
  const [ambassadorIsSubmitting, setAmbassadorIsSubmitting] = useState(false);
  const [ambassadorMessage, setAmbassadorMessage] = useState<{ type: 'success' | 'error' | null, text: string }>({ type: null, text: '' });

  const handleInternSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInternIsSubmitting(true);
    setInternMessage({ type: null, text: "Processing your application securely..." });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Internship",
          name: formData.get("name"),
          university: formData.get("university"),
          email: formData.get("email"),
          message: formData.get("message")
        })
      });

      const data = await response.json();

      if (data.success) {
        setInternMessage({ type: 'success', text: "Application received! Welcome to the queue." });
        form.reset();
      } else {
        setInternMessage({ type: 'error', text: "Verification failed. Please try again." });
      }
    } catch {
      setInternMessage({ type: 'error', text: "Network anomaly detected. Please check your connection." });
    } finally {
      setInternIsSubmitting(false);
    }
  };

  const handleAmbassadorSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAmbassadorIsSubmitting(true);
    setAmbassadorMessage({ type: null, text: "Encrypting & transmitting details..." });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Ambassador",
          name: formData.get("name"),
          university: formData.get("university"),
          email: formData.get("email"),
          message: formData.get("message")
        })
      });

      const data = await response.json();

      if (data.success) {
        setAmbassadorMessage({ type: 'success', text: "Identity registered successfully. We will be in touch." });
        form.reset();
      } else {
        setAmbassadorMessage({ type: 'error', text: "Processing failed. Please attempt again." });
      }
    } catch {
      setAmbassadorMessage({ type: 'error', text: "System connection dropped. Please reconnect." });
    } finally {
      setAmbassadorIsSubmitting(false);
    }
  };

  // Modern Input Component
  const TechInput = ({ label, name, type = "text", placeholder, disabled, isTextArea = false }: any) => (
    <div className="relative group">
      <label className="block text-xs font-bold tracking-widest text-primary/70 uppercase mb-2 ml-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-focus-within:opacity-30 transition duration-500"></div>
        {isTextArea ? (
          <textarea 
            name={name} required disabled={disabled} rows={4}
            className="relative w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-gray-200/80 rounded-xl focus:bg-white focus:outline-none focus:ring-0 text-primary placeholder-gray-400 font-medium disabled:opacity-50 transition-all resize-none shadow-inner"
            placeholder={placeholder}
          />
        ) : (
          <input 
            type={type} name={name} required disabled={disabled}
            className="relative w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-gray-200/80 rounded-xl focus:bg-white focus:outline-none focus:ring-0 text-primary placeholder-gray-400 font-medium disabled:opacity-50 transition-all shadow-inner"
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      
      {/* High-Tech Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Hero Header */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center mb-24 relative z-10"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Global Launch • April 15, 2026</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-accent mb-8 tracking-tight">
          Next-Gen Ecosystem
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
          We are engineering the future of cognitive systems. Join our elite network and build intelligence for the world.
        </p>
      </motion.div>

      {/* NEW: COMMUNITY GALLERY (BEYOND BORING) */}
      <section className="max-w-7xl mx-auto mb-32 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tighter mb-4">
              COMMUNITY IN ACTION
            </h2>
            <p className="text-gray-500 font-medium">Inside the elite environments where we build, break, and reinvent AI.</p>
          </div>
          <div className="flex gap-4">
             <div className="px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl text-primary font-bold text-sm flex items-center gap-2">
                <FaChartLine className="text-accent" /> 240% Growth YOY
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 relative rounded-[3rem] overflow-hidden group cursor-crosshair border border-gray-200 shadow-2xl"
          >
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" alt="Team Hackathon" className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 to-transparent z-20">
               <span className="text-accent font-black text-xs uppercase tracking-widest mb-2 block">Engineering HQ</span>
               <h3 className="text-white text-3xl font-black">NICAT COHORT 7 INTENSIVE</h3>
            </div>
          </motion.div>
          <div className="grid grid-rows-2 gap-6">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="relative rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-xl"
            >
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" alt="Workshop" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/40" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="relative rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-xl bg-accent flex flex-col items-center justify-center p-8 text-center"
            >
              <HiOutlineGlobeAlt className="text-white text-6xl mb-4 animate-spin-slow" />
              <h4 className="text-white font-black text-xl leading-tight">GLOBAL REACH OVERRIDE</h4>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dual Forms Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14 relative z-10">
        
        {/* INTERNSHIP FORM */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-transparent rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
          <div className="relative h-full bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500">
            
            <div className="flex items-center gap-6 mb-10 border-b border-gray-100 pb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center shadow-lg shadow-blue-500/20">
                <FaGraduationCap className="text-white text-3xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary tracking-tight">AI Residency</h2>
                <p className="text-gray-400 font-medium mt-1 uppercase tracking-wider text-xs">Engineering & Strategy</p>
              </div>
            </div>

            <form onSubmit={handleInternSubmit} className="space-y-6">
              <TechInput label="Full Identity" name="name" placeholder="E.g. Amina Ahmed" disabled={internIsSubmitting} />
              <TechInput label="Academic Institution" name="university" placeholder="Current or Alma Mater" disabled={internIsSubmitting} />
              <TechInput label="Secure Comm Link" name="email" type="email" placeholder="Email Address" disabled={internIsSubmitting} />
              <TechInput label="Mission Statement" name="message" isTextArea placeholder="Why are you driven to build AI with us?" disabled={internIsSubmitting} />

              <AnimatePresence>
                {internMessage.text && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                    className={`p-4 rounded-xl flex items-center gap-3 text-sm font-bold border ${
                      internMessage.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 
                      internMessage.type === 'error' ? 'bg-red-50 border-red-200 text-red-700' : 
                      'bg-blue-50 border-blue-200 text-blue-700'
                    }`}
                  >
                    {internMessage.type === 'success' && <FaCheckCircle className="text-lg" />}
                    {internMessage.type === 'error' && <FaExclamationCircle className="text-lg" />}
                    {internMessage.text}
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                type="submit" disabled={internIsSubmitting} 
                className="group/btn relative w-full flex justify-center items-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primary/90 disabled:opacity-70"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center gap-2">
                  {internIsSubmitting ? 'Authenticating...' : 'Initialize Application'}
                  <HiArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>
        </motion.div>

        {/* AMBASSADOR FORM */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-transparent rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
          <div className="relative h-full bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500">
            
            <div className="flex items-center gap-6 mb-10 border-b border-gray-100 pb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center shadow-lg shadow-accent/20">
                <FaBullhorn className="text-white text-3xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary tracking-tight">Global Ambassador</h2>
                <p className="text-gray-400 font-medium mt-1 uppercase tracking-wider text-xs">Network & Growth</p>
              </div>
            </div>

            <form onSubmit={handleAmbassadorSubmit} className="space-y-6">
              <TechInput label="Full Identity" name="name" placeholder="Your Name" disabled={ambassadorIsSubmitting} />
              <TechInput label="Territory / Campus" name="university" placeholder="Where do you establish presence?" disabled={ambassadorIsSubmitting} />
              <TechInput label="Secure Comm Link" name="email" type="email" placeholder="Email Address" disabled={ambassadorIsSubmitting} />
              <TechInput label="Expansion Strategy" name="message" isTextArea placeholder="Detail your strategy to expand the OmniSolve network..." disabled={ambassadorIsSubmitting} />

              <AnimatePresence>
                {ambassadorMessage.text && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                    className={`p-4 rounded-xl flex items-center gap-3 text-sm font-bold border ${
                      ambassadorMessage.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 
                      ambassadorMessage.type === 'error' ? 'bg-red-50 border-red-200 text-red-700' : 
                      'bg-orange-50 border-orange-200 text-orange-700'
                    }`}
                  >
                    {ambassadorMessage.type === 'success' && <FaCheckCircle className="text-lg" />}
                    {ambassadorMessage.type === 'error' && <FaExclamationCircle className="text-lg" />}
                    {ambassadorMessage.text}
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                type="submit" disabled={ambassadorIsSubmitting} 
                className="group/btn relative w-full flex justify-center items-center gap-2 overflow-hidden rounded-xl bg-accent px-8 py-4 font-bold text-white transition-all hover:bg-accent/90 disabled:opacity-70"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center gap-2">
                  {ambassadorIsSubmitting ? 'Authenticating...' : 'Submit Profile Override'}
                  <HiArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
