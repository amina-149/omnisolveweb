"use client";
import React from "react";
import { motion } from "framer-motion";

const trustItems = [
  "SECP Registered — Corp ID 0315980",
  "NICAT Cohort 7 — Islamabad",
  "MOU with Pakistan Executive Forum",
  "FAO AMR Competition Winner 2025",
  "Enterprise Grade Security",
  "Global AI Deployment Network",
];

export default function TrustMarquee() {
  return (
    <div className="bg-primary/5 py-12 border-y border-primary/10 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/40 text-center">
          Institutional Trust & Recognition
        </h3>
      </div>

      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-12 pr-12"
        >
          {[...trustItems, ...trustItems].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-lg md:text-xl font-bold text-primary/70 tracking-tight">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
