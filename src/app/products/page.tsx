"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { FaCheckCircle, FaWhatsapp, FaPhone, FaSeedling, FaMicrochip } from "react-icons/fa";
import CallToAction from "@/Components/CallToAction";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden selection:bg-accent/30">
      
      {/* 1. HERO SECTION (GLASSMORPHIC) */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>

        <motion.div className="relative z-10 w-full max-w-5xl mx-auto text-center px-6" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-sm font-bold tracking-widest uppercase mb-8 shadow-2xl"
          >
            <FaMicrochip className="text-accent text-lg" />
            <span>Proprietary Ecosystem</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-accent mb-8 tracking-tighter">
            Our Core <br className="hidden md:block"/> Technologies.
          </h1>
          <p className="text-xl md:text-3xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed mb-16">
            Intelligent products built by OmniSolve AI — engineering global solutions from Pakistan.
          </p>
        </motion.div>
      </section>

      {/* 2. FLAGSHIP PRODUCT: KISAN PUKAR AI */}
      <section className="relative -mt-32 z-20 px-4 sm:px-8 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-stretch">
          
          {/* Visual Showcase (Glass Card) */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="group relative h-full">
            <div className="absolute -inset-1 bg-gradient-to-br from-green-500/20 to-accent/20 rounded-[3.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative h-full bg-white/90 backdrop-blur-2xl rounded-[3rem] p-10 md:p-14 shadow-2xl border border-white flex flex-col justify-center items-center text-center overflow-hidden">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="w-40 h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-[2.5rem] shadow-2xl flex items-center justify-center mb-10 relative z-20 group-hover:scale-105 transition-transform duration-500">
                <FaSeedling className="text-white text-7xl" />
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tight">Kisan Pukar AI</h3>
              <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-md mx-auto mb-10">
                Voice-first agricultural intelligence. No apps to install. Just call and speak.
              </p>

              <div className="flex justify-center gap-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shadow-inner"><FaPhone className="text-accent text-2xl" /></div>
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Voice Line</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shadow-inner"><FaWhatsapp className="text-green-500 text-3xl" /></div>
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-400">WhatsApp API</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Data & Capabilities */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col justify-center py-8 lg:pl-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold tracking-widest uppercase mb-6 w-max">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Live Product Deployment
            </div>
            
            <h2 className="text-5xl font-black text-primary mb-6 tracking-tight">Pakistan's First Voice AI for Farmers</h2>
            
            <div className="space-y-6 text-xl text-gray-600 font-medium leading-relaxed mb-10">
              <p>
                Deployed to a network of 40M+ farmers, Kisan Pukar AI obliterates the language barrier in agricultural tech. Users receive real-time crop guidance, weather telemetry, and market prices in native Urdu via seamless voice interaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {[
                "Voice & WhatsApp Access",
                "Native Urdu Processing",
                "Live Weather Telemetry",
                "Pest Control Algorithms",
                "Market Price Database",
                "Zero-App Installation"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-green-100 transition-all">
                    <FaCheckCircle className="text-sm" />
                  </div>
                  <span className="text-base font-bold text-gray-800">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-10 flex items-center gap-6">
              <div className="hidden sm:block w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Strategic Architecture Partners</p>
                <p className="text-lg font-bold text-primary">FAO (AMR Winner) & Pakistan Agricultural Network</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-xl group">
                Request Engineering Demo
                <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://wa.me/923001016022?text=Hi,%20I%20want%20to%20know%20about%20Kisan%20Pukar%20AI" target="_blank" rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all shadow-xl shadow-green-500/30 group"
              >
                <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" /> Connect on WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. INCUBATOR SECTION */}
      <section className="py-32 px-4 sm:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="w-20 h-20 bg-gray-50 rounded-3xl mx-auto flex items-center justify-center shadow-inner mb-8"><FaMicrochip className="text-4xl text-gray-400" /></div>
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tight">R&D Lab: <span className="text-gray-300">Classified</span></h2>
            <p className="text-xl text-gray-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Our engineering team is currently architecting the next generation of enterprise AI software. Synchronize with our comms channel to receive classified release intel.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center gap-3 px-10 py-5 bg-gray-100 text-primary border border-gray-200 rounded-2xl font-bold hover:bg-gray-200 transition-all text-lg">
                Establish Partnership Link <HiArrowRight />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
