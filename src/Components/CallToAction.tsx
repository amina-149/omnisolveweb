"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
      {/* AI-themed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent opacity-90"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16 text-center border border-white/20">
          
          {/* Main Heading */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business with AI?
          </motion.h2>
          
          {/* Subtext */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let&apos;s discuss how OmniSolve AI can deliver measurable results for your company.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/contact#consultation-form"
              className="inline-block"
            >
              <motion.button
                className="bg-white text-primary text-base sm:text-lg md:text-xl font-semibold sm:font-bold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border-2 border-transparent hover:border-accent w-full sm:w-auto"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                Book Consultation
                <motion.span 
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
          
          {/* Additional visual elements */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8 text-white/70">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <span className="text-xs sm:text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <span className="text-xs sm:text-sm">Custom Solutions</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <span className="text-xs sm:text-sm">Proven Results</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating AI elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <motion.div 
          className="w-16 h-16 border-2 border-white rounded-lg"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </div>
      
      <div className="absolute bottom-20 right-10 opacity-20">
        <motion.div 
          className="w-12 h-12 border-2 border-white rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>
      
      <div className="absolute top-1/2 right-20 opacity-10">
        <motion.div 
          className="w-8 h-8 bg-white rounded-sm"
          animate={{ 
            rotate: [0, 45, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>
    </section>
  );
}
