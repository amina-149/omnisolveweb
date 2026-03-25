"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaLightbulb, FaHandshake, FaRocket, FaLinkedin, FaArrowRight,
  FaEye, FaBullseye, FaCogs, FaHeart, FaGithub, FaExternalLinkAlt, FaShieldAlt, FaCheckCircle
} from "react-icons/fa";
import CallToAction from "@/Components/CallToAction";
import Milestones from "@/Components/Milestones";

export default function AboutPage() {
  const coreValues = [
    {
      icon: FaLightbulb,
      title: "Radical Innovation",
      description: "Pushing the boundaries of cognitive automation and redefining industry paradigms."
    },
    {
      icon: FaHandshake,
      title: "Strategic Synergy", 
      description: "Partnering seamlessly with enterprises to unlock unprecedented operational scale."
    },
    {
      icon: FaHeart,
      title: "Client Obsession",
      description: "Engineering bespoke AI architectures perfectly aligned with your business blueprint."
    },
    {
      icon: FaRocket,
      title: "Exponential Growth",
      description: "Deploying high-velocity solutions designed for sustainable, global expansion."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden selection:bg-accent/30">
      
      {/* 1. ULTRA-CHIC HERO SECTION */}
      <section className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-primary z-0"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>

        <motion.div 
          className="relative z-10 w-full max-w-5xl mx-auto text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-sm font-bold tracking-widest uppercase mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            SECP-Registered AI Agency
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-accent mb-8 tracking-tighter">
            Architects of <br className="hidden md:block"/> Intelligence.
          </h1>
          <p className="text-xl md:text-3xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Building autonomous AI systems, voice agents, and high-velocity automation for the global market.
          </p>
        </motion.div>
      </section>

      {/* 2. GLASSMORPHIC MISSION & VISION */}
      <section className="relative -mt-32 z-20 px-4 sm:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Mission */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative h-full bg-white/90 backdrop-blur-2xl rounded-[2rem] p-10 md:p-14 shadow-2xl border border-white">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <FaBullseye className="text-white text-3xl" />
              </div>
              <h3 className="text-3xl font-extrabold text-primary mb-4 tracking-tight">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                To engineer practical, high-impact robotic solutions — conversational agents, workflow automation, and predictive models — making enterprise-level capability accessible to forward-thinking organizations worldwide.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative h-full bg-white/90 backdrop-blur-2xl rounded-[2rem] p-10 md:p-14 shadow-2xl border border-white">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <FaEye className="text-white text-3xl" />
              </div>
              <h3 className="text-3xl font-extrabold text-primary mb-4 tracking-tight">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                To cement our position as an undisputed global leader in AI development—spearheading Pakistan's digital renaissance and powering the next generation of global technological infrastructure.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. CEO LEADERSHIP (HIGH-TECH PROFILE) */}
      <section className="py-24 px-4 sm:px-8 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent rounded-[3rem] transform -rotate-3 scale-105 z-0"></div>
            <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <Image 
                src="/ceo.png" 
                alt="Amina Riaz - CEO"
                className="w-full h-[600px] object-cover rounded-[2rem]"
                width={800} height={800}
                priority
              />
              
              {/* Floating Badges */}
              <div className="absolute top-10 -left-6 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-sm font-bold text-primary uppercase tracking-widest">Chief Executive</div>
                  <div className="text-xs text-gray-500 font-medium">OMNISOLVEAI (SMC-PVT) LTD</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase">
              <FaCogs /> Lead Engineer & Founder
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-primary tracking-tight">Amina Riaz</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-primary rounded-full"></div>

            <div className="space-y-6 text-xl text-gray-600 font-medium leading-relaxed">
              <p>
                Amina Riaz is the visionary behind OmniSolve AI. Operating from the National Incubation Center (NICAT) in Islamabad, she leads an elite team building autonomous systems for both national infrastructure and global enterprise.
              </p>
              <p>
                As the pioneer of <strong className="text-primary">Kisan Pukar AI</strong>—Pakistan's first voice-AI agricultural assistant—she secured victory at the prestigious FAO AMR Project Competition 2025 and established key strategic partnerships, including the Pakistan Executive Forum.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://www.linkedin.com/in/amina-riaz-454a0725a/" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/30"
              >
                <FaLinkedin className="text-xl" /> LinkedIn Protocol
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://github.com/amina-149" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-100 text-primary border border-gray-200 rounded-xl font-bold hover:bg-gray-200 transition-all"
              >
                <FaGithub className="text-xl" /> GitHub Repository
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. CORE VALUES (GLASS GRID) */}
      <section className="py-24 px-4 sm:px-8 relative bg-primary text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Our Operating Principles</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">The unyielding standards that govern our engineering and business operations.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
                  <value.icon />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/60 font-medium leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GLOBAL ENTERPRISE NETWORK */}
      <section className="py-24 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative overflow-hidden bg-white border border-gray-200 rounded-[3rem] shadow-[0_20px_50px_rgb(0,0,0,0.05)] p-10 md:p-16"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <FaShieldAlt className="text-[300px] text-primary" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-widest uppercase mb-6">
                <FaCheckCircle /> Globally Verified
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-12 tracking-tight">Enterprise Infrastructure & <br/> Data Security</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Global Scale</div>
                  <div className="text-2xl font-bold text-primary">Cross-Border Operations</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Datacenter Privacy</div>
                  <div className="text-2xl font-bold text-primary">End-to-End Encryption</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Response Time SLA</div>
                  <div className="text-xl font-bold text-gray-700">99.9% Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Deployment Protocol</div>
                  <div className="text-xl font-bold text-gray-700">Under 48 Hours Globally</div>
                </div>
              </div>

              <Link href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg"
              >
                <FaExternalLinkAlt /> Explore Enterprise Architectures
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Milestones & CTA */}
      <Milestones />
      <CallToAction />

    </div>
  );
}
