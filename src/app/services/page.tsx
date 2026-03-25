"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiSparkles } from "react-icons/hi2";
import {
  HiOutlinePhone,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUserGroup,
  HiOutlineCog,
} from "react-icons/hi2";
import { 
  FaPhone,
  FaComments,
  FaBullseye,
  FaRobot,
  FaCogs,
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaCheckCircle,
  FaRocket,
  FaLaptopCode
} from "react-icons/fa";
import PartnersRecognition from "@/Components/PartnersRecognition";
import CallToAction from "@/Components/CallToAction";
import { detailedServicesData } from '@/assets/data';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null);
  
  const iconMapping: Record<string, React.ComponentType<{ className?: string }>> = {
    FaPhone, FaComments, FaBullseye, FaRobot, FaCogs, FaLaptopCode
  };
  
  const services = detailedServicesData.map(service => ({
    ...service,
    reactIcon: iconMapping[service.iconName as keyof typeof iconMapping] || FaRocket
  }));

  const whyChooseUs = [
    { icon: FaUsers, title: "NICAT Backed", description: "Backed by Pakistan's premier tech incubator", metric: "C7" },
    { icon: FaRocket, title: "48hr Deploy", description: "Get your AI agent live in 48 hours", metric: "Fast" },
    { icon: FaShieldAlt, title: "SECP Registered", description: "Officially registered company", metric: "✓" },
    { icon: FaLightbulb, title: "Free Pilot", description: "2-week free trial — no risk", metric: "Free" }
  ];

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden selection:bg-accent/30">
      
      {/* 1. HERO SECTION (GLASSMORPHIC) */}
      <section className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>

        {/* Abstract Floating Rings */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <motion.div className="absolute top-20 left-10 w-48 h-48 border border-white/30 rounded-full" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bottom-40 right-20 w-32 h-32 border-2 border-white/20 rounded-full" animate={{ y: [-30, 30, -30], rotate: [0, 180, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        <motion.div className="relative z-10 w-full max-w-6xl mx-auto text-center px-4" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-sm font-bold tracking-widest uppercase mb-8 shadow-2xl"
          >
            <HiSparkles className="text-accent text-lg" />
            <span>Deployed in 48 Hours</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-accent mb-8 tracking-tighter">
            Architectures of <br className="hidden md:block"/> Automation.
          </h1>
          <p className="text-xl md:text-3xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed mb-16">
            Enterprise-grade intelligent agents designed to scale operations and obliterate overhead.
          </p>

          <motion.div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-12 text-white/80 border-t border-white/10 pt-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-2">5</div>
              <div className="text-sm tracking-widest uppercase font-bold text-white/50">Core Systems</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-2">48<span className="text-2xl">h</span></div>
              <div className="text-sm tracking-widest uppercase font-bold text-white/50">Rapid Deploy</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 flex items-center justify-center gap-1">
                24<span className="text-2xl text-accent">/</span>7
              </div>
              <div className="text-sm tracking-widest uppercase font-bold text-white/50">Autonomy</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. SERVICES GRID (GLASSMORPHIC CARDS) */}
      <section className="relative -mt-32 z-20 px-4 sm:px-8 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id} onClick={() => scrollToService(service.id)} onMouseEnter={() => setActiveService(service.id)} onMouseLeave={() => setActiveService(null)}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className={`absolute -inset-1 bg-gradient-to-br ${activeService === service.id ? 'from-accent to-primary' : 'from-primary/10 to-transparent'} rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-60 transition duration-700`}></div>
              <div className="relative h-full bg-white/90 backdrop-blur-2xl rounded-[2rem] p-8 md:p-10 shadow-2xl border border-white">
                
                {service.badge && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-accent to-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg z-30 animate-pulse">
                    {service.badge}
                  </div>
                )}

                <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-200 border border-gray-100 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <service.reactIcon className="text-primary text-3xl" />
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-8 line-clamp-3">
                  {service.description}
                </p>

                <div className="flex items-center text-sm font-bold text-accent group-hover:gap-3 transition-all">
                  Initialize Details <HiArrowRight className="text-lg opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. DEEP DIVE SECTIONS */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-32">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-32">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual Block */}
                <motion.div className={`relative ${index % 2 !== 0 ? 'lg:order-last' : ''}`} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent rounded-[3rem] transform -rotate-3 scale-105 z-0"></div>
                  <div className="relative z-10 bg-primary rounded-[2.5rem] p-12 overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[80px] rounded-full"></div>
                    <service.reactIcon className="text-[120px] text-white/10 absolute -bottom-10 -right-10 transform -rotate-12" />
                    
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-orange-500 rounded-2xl shadow-xl flex items-center justify-center mb-10 relative z-20">
                      <service.reactIcon className="text-white text-4xl" />
                    </div>
                    <h3 className="text-4xl font-black text-white relative z-20 leading-tight">
                      {service.title.split(' ').map((word, i, arr) => (
                        i === arr.length - 1 ? <span key={i} className="text-accent">{word}</span> : <span key={i}>{word} </span>
                      ))}
                    </h3>
                  </div>
                </motion.div>

                {/* Data Block */}
                <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6">
                    Module 0{index + 1}
                  </div>
                  <h3 className="text-4xl font-black text-primary mb-6 tracking-tight overflow-hidden break-words">{service.title}</h3>
                  <div className="space-y-4 text-xl text-gray-600 font-medium leading-relaxed mb-10">
                    {service.detailedDescription.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    {service.stats.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <div className="w-8 h-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-green-100 transition-all">
                          <FaCheckCircle className="text-sm" />
                        </div>
                        <span className="text-base font-bold text-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-xl group">
                    Deploy Architecture
                    <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY PARTNER WITH US */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">The OmniSolve Advantage</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">Why elite organizations trust our systems.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 group hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <item.icon className="text-2xl" />
                  </div>
                  <div className="text-2xl font-black text-gray-200 group-hover:text-accent/20 transition-colors">
                    {item.metric}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 tracking-snug">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Modules */}
      <PartnersRecognition />
      <CallToAction />

    </div>
  );
}
