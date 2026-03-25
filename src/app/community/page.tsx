"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBullhorn } from "react-icons/fa";

export default function CommunityPage() {
  const [internIsSubmitting, setInternIsSubmitting] = useState(false);
  const [internMessage, setInternMessage] = useState<string | null>(null);
  const [ambassadorIsSubmitting, setAmbassadorIsSubmitting] = useState(false);
  const [ambassadorMessage, setAmbassadorMessage] = useState<string | null>(null);

  const handleInternSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInternIsSubmitting(true);
    setInternMessage("⏳ Submitting application...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setInternMessage("✅ Application submitted successfully! We will contact you soon.");
        form.reset();
      } else {
        setInternMessage("❌ Something went wrong. Please try again.");
      }
    } catch {
      setInternMessage("❌ Failed to send application. Please check your connection.");
    } finally {
      setInternIsSubmitting(false);
    }
  };

  const handleAmbassadorSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAmbassadorIsSubmitting(true);
    setAmbassadorMessage("⏳ Submitting application...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setAmbassadorMessage("✅ Application submitted successfully! Welcome to the movement.");
        form.reset();
      } else {
        setAmbassadorMessage("❌ Something went wrong. Please try again.");
      }
    } catch {
      setAmbassadorMessage("❌ Failed to send application. Please check your connection.");
    } finally {
      setAmbassadorIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-16 overflow-hidden bg-gray-50">
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <div className="inline-block bg-accent/10 px-6 py-2 rounded-full mb-6 border border-accent/20">
          <span className="text-accent font-bold tracking-wider text-sm">LAUNCHING APRIL 15, 2026</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">OmniSolve AI Community</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We are equipping the next generation of leaders with real-world AI skills. Join our mission to build Pakistani AI ambition for the world.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Internship Program Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <FaGraduationCap className="text-blue-600 text-2xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">Internship Program</h2>
              <p className="text-gray-500 text-sm">Real-world AI Engineering & Marketing</p>
            </div>
          </div>

          <form onSubmit={handleInternSubmit} className="space-y-5">
            <input type="hidden" name="access_key" value="066ad15a-2f3a-4c38-84ef-66544dc04620" />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
            <input type="hidden" name="subject" value="New Internship Application - OmniSolve AI" />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" name="name" required disabled={internIsSubmitting} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent" placeholder="Amina Ahmed" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">University / Institute</label>
              <input type="text" name="university" required disabled={internIsSubmitting} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent" placeholder="NUST, FAST, COMSATS, etc." />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" name="email" required disabled={internIsSubmitting} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent" placeholder="you@university.edu.pk" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to join us?</label>
              <textarea name="message" required disabled={internIsSubmitting} rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent resize-none" placeholder="Share your motivation..." />
            </div>

            {internMessage && (
              <div className={`p-4 rounded-xl text-center text-sm font-medium ${internMessage.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {internMessage}
              </div>
            )}

            <button type="submit" disabled={internIsSubmitting} className="w-full font-bold py-4 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all shadow-md">
              Apply for Internship
            </button>
          </form>
        </motion.div>

        {/* Ambassador Program Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center">
              <FaBullhorn className="text-accent text-2xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">Campus Ambassador</h2>
              <p className="text-gray-500 text-sm">Lead the AI Revolution on Campus</p>
            </div>
          </div>

          <form onSubmit={handleAmbassadorSubmit} className="space-y-5">
            <input type="hidden" name="access_key" value="066ad15a-2f3a-4c38-84ef-66544dc04620" />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
            <input type="hidden" name="subject" value="New Campus Ambassador Application" />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" name="name" required disabled={ambassadorIsSubmitting} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent" placeholder="Your Name" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">University / Institute</label>
              <input type="text" name="university" required disabled={ambassadorIsSubmitting} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent" placeholder="Where do you study?" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" name="email" required disabled={ambassadorIsSubmitting} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent" placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">How will you promote OmniSolve AI?</label>
              <textarea name="message" required disabled={ambassadorIsSubmitting} rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-accent resize-none" placeholder="We evaluate creativity and reach..." />
            </div>

            {ambassadorMessage && (
              <div className={`p-4 rounded-xl text-center text-sm font-medium ${ambassadorMessage.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {ambassadorMessage}
              </div>
            )}

            <button type="submit" disabled={ambassadorIsSubmitting} className="w-full font-bold py-4 rounded-xl bg-accent text-white hover:bg-accent/90 transition-all shadow-md">
              Apply as Ambassador
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
