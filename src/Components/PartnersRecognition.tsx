"use client";
import React from "react";
import { motion } from "framer-motion";
import { partnersData, recognitionCards } from "@/assets/data";

export default function PartnersRecognition() {
  return (
    <section className="py-20 px-4 bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Partners & <span className="text-accent">Recognition</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Backed by Pakistan&apos;s leading institutions and recognized on the global stage
          </p>
        </motion.div>

        {/* Partner Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {partnersData.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-accent">{partner.name}</span>
              </div>
              <p className="text-sm font-medium text-gray-600">{partner.fullName}</p>
            </motion.div>
          ))}
        </div>

        {/* Recognition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {recognitionCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <p className="font-semibold text-primary text-sm leading-snug">{card.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          className="text-center text-gray-500 text-sm italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Real client testimonials coming soon — we are currently in active pilots.
        </motion.p>
      </div>
    </section>
  );
}
