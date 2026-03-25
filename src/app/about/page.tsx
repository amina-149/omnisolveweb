"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  FaLightbulb, 
  FaHandshake, 
  FaRocket, 
  FaLinkedin, 
  FaArrowRight,
  FaEye,
  FaBullseye,
  FaCogs,
  FaHeart,
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";
import CallToAction from "@/Components/CallToAction";
import Milestones from "@/Components/Milestones";

export default function AboutPage() {
  const coreValues = [
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI, constantly exploring new technologies and methodologies."
    },
    {
      icon: FaHandshake,
      title: "Collaboration", 
      description: "We believe in the power of partnership, working closely with our clients to achieve shared success."
    },
    {
      icon: FaHeart,
      title: "Customer-Centric",
      description: "Every solution we create is tailored to our clients' unique needs and business objectives."
    },
    {
      icon: FaRocket,
      title: "Growth",
      description: "We're committed to continuous learning and helping our clients achieve sustainable, scalable growth."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden about-bg"
        style={{
          backgroundImage: "url('/about.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>

        <motion.div 
          className="relative z-10 w-full max-w-5xl mx-auto text-center px-4 py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            About OmniSolve AI
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Pakistan&apos;s SECP-registered AI agency building AI Agents, Voice Agents, and automation for businesses in Pakistan and globally.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-light">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Purpose</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Driven by a clear mission and guided by an ambitious vision for AI in Pakistan and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                  <FaBullseye className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deploy practical AI solutions — Voice Agents, WhatsApp Agents, and Business Automation — that help Pakistani and international businesses run smarter, faster, and 24/7. We make AI accessible, affordable, and actionable.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <FaEye className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become Pakistan&apos;s leading AI agency — building world-class products like Kisan Pukar AI and serving enterprise clients globally. We envision AI as the engine that powers Pakistan&apos;s digital transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Who We Are</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  OmniSolve AI is a SECP-registered AI agency based at NICAT (National Incubation Center), Islamabad, Pakistan — building AI Agents, Voice Agents, and automation solutions for businesses in Pakistan and globally.
                </p>
                <p>
                  Founded by Amina Riaz, we launched Kisan Pukar AI — Pakistan&apos;s first AI voice assistant for farmers — and have signed partnerships with the Pakistan Executive Forum and FAO.
                </p>
                <p>
                  Currently part of NICAT Cohort 7, we&apos;re building from Islamabad with a vision to compete on the global stage.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-accent/5 rounded-2xl">
                  <div className="text-3xl font-bold text-accent mb-2">1</div>
                  <div className="text-gray-600">Live AI Product</div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-gray-600">Partners</div>
                </div>
              </div>
            </motion.div>

            {/* Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div 
                  className="rounded-3xl p-8 md:p-12 min-h-[400px] flex items-center justify-center relative overflow-hidden"
                  style={{
                    backgroundImage: "url('/about1.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="absolute inset-0 bg-primary/70 rounded-3xl"></div>
                  
                  <div className="text-center relative z-10">
                    <FaCogs className="text-6xl text-accent mb-6 mx-auto animate-spin-slow" />
                    <h3 className="text-2xl font-bold text-white mb-4">AI Innovation Hub</h3>
                    <p className="text-white/90 leading-relaxed">
                      ALPHA Square Chaklala, Rawalpindi — Where Pakistani AI meets global ambition
                    </p>
                  </div>
                </div>
                
                <motion.div 
                  className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaRocket className="text-white text-xl" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <FaLightbulb className="text-white text-lg" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl p-8 text-center transition-all duration-300 border border-gray-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Leadership Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-light">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Leadership</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Meet the founder driving OmniSolve AI&apos;s mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* CEO Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden">
                <Image 
                  src="/ceo.png" 
                  alt="Amina Riaz - CEO of OmniSolve AI"
                  className="w-full h-[500px] object-cover rounded-xl shadow-lg"
                  width={500}
                  height={500}
                />
                
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="text-sm font-semibold text-primary">CEO & Founder</div>
                  <div className="text-xs text-gray-600">OMNISOLVEAI (SMC-PRIVATE) LIMITED</div>
                </div>
                
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center shadow-lg">
                  <FaLightbulb className="text-white text-lg" />
                </div>
              </div>
            </motion.div>

            {/* CEO Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">Amina Riaz</h3>
                <p className="text-xl text-accent font-semibold mb-6">CEO & Founder — OMNISOLVEAI (SMC-PRIVATE) LIMITED</p>
                
                <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-8"></div>
              </div>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Amina Riaz is the founder and CEO of OmniSolve AI — Pakistan&apos;s SECP-registered AI agency building AI Agents, Voice Agents, and automation for businesses in Pakistan and globally.
                </p>
                
                <p>
                  Winner of the FAO AMR Project Competition 2025. Participant of AeroHack 2026. Selected in NICAT Cohort 7, Islamabad. OmniSolve AI has signed an MOU with the Pakistan Executive Forum and launched Kisan Pukar AI — Pakistan&apos;s first AI voice assistant for farmers.
                </p>

                <p>
                  OmniSolve AI is competing on the global stage from Rawalpindi.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-accent mb-1">FAO Winner</div>
                  <div className="text-gray-600">AMR Competition 2025</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-primary mb-1">NICAT C7</div>
                  <div className="text-gray-600">Selected 2026</div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <a
                  href="https://www.linkedin.com/in/amina-riaz-454a0725a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <FaLinkedin className="text-lg" />
                  <span>Connect on LinkedIn</span>
                  <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <a
                  href="https://github.com/amina-149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legal Verification Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Legally Registered in Pakistan</h2>
              <p className="text-white/80 text-lg">Verified and transparent — building trust with every client</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-white/60 text-sm mb-1">Company Name</p>
                <p className="font-bold text-lg">OMNISOLVEAI (SMC-PRIVATE) LIMITED</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-white/60 text-sm mb-1">SECP Corp ID</p>
                <p className="font-bold text-lg">0315980</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-white/60 text-sm mb-1">Registration Date</p>
                <p className="font-bold text-lg">November 20, 2025</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-white/60 text-sm mb-1">Registered Under</p>
                <p className="font-bold text-lg">Companies Act, 2017 (XIX of 2017)</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://leap.secp.gov.pk/#/verify-company-info/0315980"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold text-lg rounded-xl hover:bg-accent/90 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaExternalLinkAlt />
                  Verify on SECP Website
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Milestones */}
      <Milestones />

      <CallToAction />
    </div>
  );
}
