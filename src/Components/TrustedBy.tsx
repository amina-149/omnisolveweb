"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustedBy() {
  // Technology logos data
  const technologies = [
    { name: "TensorFlow", logo: "/logos/tensorflow.png" },
    { name: "PyTorch", logo: "/logos/pytorch.png" },
    { name: "OpenAI", logo: "/logos/openai.png" },
    { name: "Hugging Face", logo: "/logos/huggingface.png" },
    { name: "n8n", logo: "/logos/n8n.png" },
    { name: "Zapier", logo: "/logos/zapier.png" },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Section Heading */}
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-16"
          >
            Powered By Leading{" "}
            <span className="text-accent">Technologies</span>
          </motion.h2>

          {/* Technology Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center p-4"
              >
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out group-hover:scale-125"
                  width={120}
                  height={120}
                />
              </motion.div>
            ))}
          </div>

          {/* Optional description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-text-secondary text-sm md:text-base max-w-3xl mx-auto leading-relaxed"
          >
            Built on cutting-edge AI frameworks and cloud technologies to deliver scalable, reliable, and innovative solutions for your business needs.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
