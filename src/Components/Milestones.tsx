"use client";
import React from "react";
import { motion } from "framer-motion";
import { milestonesData } from "@/assets/data";

export default function Milestones() {
  return (
    <section className="py-20 px-4 md:px-16 lg:px-32 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Journey <span className="text-accent">So Far</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From incorporation to global competitions — milestones that define OmniSolve AI
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/60 to-primary/30" />

          {milestonesData.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-accent rounded-full flex items-center justify-center z-10 shadow-lg text-xl">
                {milestone.icon}
              </div>

              {/* Content Card */}
              <div
                className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
                  <span className="inline-block text-xs font-bold text-accent bg-accent/10 rounded-full px-3 py-1 mb-3">
                    {milestone.date}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {milestone.detail}
                  </p>
                </div>
              </div>

              {/* Empty spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-40px)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
