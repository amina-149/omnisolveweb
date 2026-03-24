"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiHome } from "react-icons/hi2";
import { FaRocket, FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-accent flex items-center justify-center overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 border-2 border-white rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-24 h-24 bg-white/20 rounded-lg rotate-45"
          animate={{ 
            rotate: [45, 405],
            y: [-20, 20, -20]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-32 w-32 h-32 border border-white rounded-xl"
          animate={{ 
            rotate: [0, -360],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-16 h-16 bg-white/30 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
        {/* 404 Number */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white/20 leading-none select-none">
            404
          </h1>
          
          {/* Floating Robot Icon */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/30">
              <FaRocket className="text-4xl text-white" />
            </div>
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-2 max-w-2xl mx-auto leading-relaxed">
            Looks like our AI got a bit confused and couldn&apos;t find this page
          </p>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Don&apos;t worry though - let&apos;s get you back on track with our AI solutions!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/">
            <motion.button
              className="group bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <HiHome className="text-xl group-hover:scale-110 transition-transform duration-300" />
              <span>Go Home</span>
            </motion.button>
          </Link>

          <Link href="/services">
            <motion.button
              className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaSearch className="text-lg group-hover:scale-110 transition-transform duration-300" />
              <span>Browse Services</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/about">
            <motion.div
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                <div className="text-lg font-semibold mb-2">About Us</div>
                <div className="text-sm">Learn about OmniSolve AI</div>
              </div>
            </motion.div>
          </Link>

          <Link href="/contact">
            <motion.div
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                <div className="text-lg font-semibold mb-2">Contact</div>
                <div className="text-sm">Get in touch with us</div>
              </div>
            </motion.div>
          </Link>

          <Link href="/solutions">
            <motion.div
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                <div className="text-lg font-semibold mb-2">Solutions</div>
                <div className="text-sm">Explore AI solutions</div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Fun Message */}
        <motion.div
          className="mt-16 text-white/60 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p>Error Code: 404 | Page disappeared faster than our AI could process it! 🚀</p>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: 15, top: 20, duration: 4, delay: 0 },
          { left: 75, top: 30, duration: 5, delay: 0.5 },
          { left: 25, top: 70, duration: 3.5, delay: 1 },
          { left: 85, top: 60, duration: 4.5, delay: 1.5 },
          { left: 45, top: 15, duration: 3.8, delay: 0.8 },
          { left: 65, top: 85, duration: 4.2, delay: 1.2 }
        ].map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            initial={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
