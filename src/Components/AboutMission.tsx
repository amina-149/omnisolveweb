"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutMission() {
  const valueCards = [
    {
      icon: "🌍",
      title: "Remote-first AI Partner",
      description: "Collaborate globally, anytime with our distributed team of AI experts."
    },
    {
      icon: "📈",
      title: "Measurable ROI",
      description: "Delivering tangible results you can track and scale across your business."
    },
    {
      icon: "⚡",
      title: "Future-ready Tech Stack",
      description: "Scalable AI solutions built on cutting-edge frameworks and infrastructure."
    },
    {
      icon: "🔒",
      title: "Enterprise-grade Security",
      description: "Trusted and reliable solutions with industry-leading security standards."
    }
  ];

  return (
    <section className="w-full bg-light py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Section Title */}
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-8"
          >
            Why{" "}
            <span className="text-accent">Omnisolve AI</span>?
          </motion.h2>

          {/* Mission Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-16"
          >
            We empower businesses with AI-driven automation, predictive insights, and intelligent solutions — making innovation accessible for everyone.
          </motion.p>

          {/* Value Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {valueCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <span className="text-3xl md:text-4xl" role="img" aria-label={card.title}>
                    {card.icon}
                  </span>
                </div>

                {/* Card Content */}
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {card.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Optional Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-16"
          >
            <p className="text-text-secondary text-sm md:text-base">
              Ready to transform your business with AI?{" "}
              <span className="text-accent font-semibold cursor-pointer hover:underline">
                Let&apos;s start the conversation
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
