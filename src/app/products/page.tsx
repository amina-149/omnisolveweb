"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { FaCheckCircle, FaWhatsapp, FaPhone, FaSeedling } from "react-icons/fa";
import CallToAction from "@/Components/CallToAction";

export default function ProductsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 right-10 w-32 h-32 border-2 border-white rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-24 h-24 bg-white/20 rounded-xl"
            animate={{ rotate: [12, -12, 12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="relative z-10 w-full max-w-5xl mx-auto text-center px-4 py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-accent">Products</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            AI products built by OmniSolve AI — solving real problems for real people
          </p>
        </motion.div>
      </section>

      {/* Kisan Pukar AI Product Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                  🟢 Live Product
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Kisan Pukar AI
              </h2>
              <p className="text-xl text-accent font-semibold mb-6">
                AI Voice Assistant for Pakistani Farmers
              </p>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
                <p>
                  Pakistan&apos;s first AI-powered agricultural assistant. Farmers call or WhatsApp to get crop guidance, weather forecasts, pest control advice, and market prices — in Urdu and local languages.
                </p>
                <p>
                  Built for Pakistan&apos;s 40M+ farming community, Kisan Pukar AI bridges the gap between agricultural knowledge and farmers who need it most.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {[
                  "Crop guidance & pest control advice",
                  "Real-time weather forecasts",
                  "Market price updates",
                  "Urdu + local language support",
                  "WhatsApp & voice call access",
                  "Powered by AI & agricultural data",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-accent flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Partners */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <p className="text-sm font-semibold text-gray-500 mb-2">PARTNERS</p>
                <p className="text-gray-700">
                  FAO (AMR Competition Winner) • Pakistan Agricultural Network
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.button
                    className="group flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-bold text-lg rounded-xl hover:bg-accent/90 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get a Demo
                    <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <a
                  href="https://wa.me/923001016022?text=Hi,%20I%20want%20to%20know%20about%20Kisan%20Pukar%20AI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-bold text-lg rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaWhatsapp className="text-xl" />
                    WhatsApp Inquiry
                  </motion.button>
                </a>
              </div>
            </motion.div>

            {/* Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-green-50 to-accent/10 rounded-3xl p-12 min-h-[500px] flex items-center justify-center border border-green-100">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent to-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <FaSeedling className="text-white text-5xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    Kisan Pukar AI
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 max-w-sm mx-auto">
                    Voice-first AI assistant designed for farmers who need answers, not apps.
                  </p>
                  <div className="flex justify-center gap-6">
                    <div className="text-center">
                      <FaPhone className="text-accent text-2xl mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Voice Call</p>
                    </div>
                    <div className="text-center">
                      <FaWhatsapp className="text-green-500 text-2xl mx-auto mb-2" />
                      <p className="text-sm text-gray-500">WhatsApp</p>
                    </div>
                    <div className="text-center">
                      <FaSeedling className="text-green-600 text-2xl mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Agriculture</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-2xl">🌾</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <span className="text-xl">🤖</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon Products */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              More Products <span className="text-accent">Coming Soon</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We&apos;re building the next generation of AI products for Pakistan and beyond. 
              Stay tuned for more launches.
            </p>
            <Link href="/contact">
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Partner With Us
                <HiArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
