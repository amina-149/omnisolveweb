"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* 1. HIGH-ENERGY REFRACTIVE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] opacity-20"
        >
          <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-accent/40 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[20%] right-[10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full" />
        </motion.div>
        
        {/* Animated Mesh Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* 2. ELITE BADGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8"
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-ping" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
            Universal Intelligence Protocol Active
          </span>
        </motion.div>

        {/* 3. BOLD TYPOGRAPHY (OPENAI STYLE) */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-primary tracking-tighter leading-[0.9] mb-8"
        >
          ARCHITECTING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            AUTONOMOUS
          </span> <br />
          FUTURES.
        </motion.h1>

        {/* 4. HIGH-SIGNAL SUBTITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed mb-12"
        >
          We build sovereign AI agents that think, execute, and scale. 
          From proprietary voice ecosystems to enterprise-grade automation — 
          we are the intelligence layer for the modern world.
        </motion.p>

        {/* 5. CTAs WITH MAGNETIC FEEL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/contact" className="group relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
             <button className="relative flex items-center gap-3 px-10 py-5 bg-primary text-white font-black text-lg rounded-full hover:scale-[1.02] active:scale-95 transition-all">
                BOOK ELITE DEMO
                <HiArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
             </button>
          </Link>
          
          <Link href="/pricing">
             <button className="px-10 py-5 bg-transparent border-2 border-primary/10 text-primary font-black text-lg rounded-full hover:bg-primary/5 transition-all">
                VIEW ARCHITECTURES
             </button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-1 h-12 bg-gradient-to-b from-primary/20 to-transparent rounded-full overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}

