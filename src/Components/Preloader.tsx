"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); // Premium length for logo assembly
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-primary flex items-center justify-center p-6"
        >
          {/* Background Particles (Subtle) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: Math.random() * 100 + "%", 
                  opacity: 0 
                }}
                animate={{ 
                  y: [null, "-20%", "120%"],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: Math.random() * 5 + 3, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-1 h-1 bg-accent rounded-full"
              />
            ))}
          </div>

          <div className="relative text-center">
            {/* Logo Assembly Simulation */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <motion.div
                  className="absolute inset-0 border-4 border-accent rounded-full border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 border-2 border-white/20 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 1, ease: "backOut" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-4xl md:text-5xl font-black text-white tracking-widest">O</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">
                OMNISOLVE<span className="text-accent">AI</span>
              </h1>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                  className="w-full h-full bg-accent shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                />
              </div>
              <p className="mt-4 text-white/40 text-xs font-bold tracking-[0.3em] uppercase">
                Initializing Intelligence Protocol
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
