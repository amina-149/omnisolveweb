"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiCheck } from "react-icons/hi2";
import CallToAction from "@/Components/CallToAction";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "PKR 25,000",

      priceAlt: "~ $90 / ¥650",
      period: "/month",
      description: "Perfect for small businesses starting with AI",
      highlighted: false,
      cta: "Start Free 2-Week Trial",
      features: [
        "1 WhatsApp AI Agent",
        "100 conversations/day",
        "Urdu + English support",
        "FAQ + booking automation",
        "Monthly performance report",
      ],
    },
    {
      name: "Growth",
      price: "PKR 75,000",
      priceAlt: "~ $270 / ¥1,900",
      period: "/month",
      description: "For growing businesses scaling with AI",
      highlighted: true,
      cta: "Book Demo",
      features: [
        "3 AI Agents (sales + support + HR)",
        "Lead qualification pipeline",
        "CRM + WhatsApp + email automation",
        "Weekly analytics dashboard",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "PKR 200,000+",
      priceAlt: "Custom USD / CNY",
      period: "/month",
      description: "Full-scale AI transformation for large organizations",
      highlighted: false,
      cta: "Contact Us",
      features: [
        "Unlimited AI Agents",
        "AI Voice Agent (inbound + outbound calls)",
        "ERP/POS integration",
        "Dedicated account manager",
        "SLA guarantee",
        "On-site training",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-lg rotate-45"
            animate={{ rotate: [45, 405, 45] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="relative z-10 w-full max-w-5xl mx-auto text-center px-4 py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Simple, Transparent <span className="text-accent">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            AI solutions for every business size. Start with a FREE 2-week pilot — no commitment.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative rounded-3xl p-8 md:p-10 flex flex-col ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-primary to-primary/90 text-white shadow-2xl scale-105 border-2 border-accent"
                    : "bg-white text-gray-800 shadow-xl border border-gray-100"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p
                    className={`text-sm mb-6 ${
                      plan.highlighted ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                    <span
                      className={`text-lg ${
                        plan.highlighted ? "text-white/70" : "text-gray-400"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className={`text-sm mt-2 font-medium ${
                      plan.highlighted ? "text-white/90" : "text-gray-500"
                    }`}
                  >
                    {plan.priceAlt}
                  </p>

                </div>

                {/* Features */}
                <div className="flex-1 mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <HiCheck
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.highlighted ? "text-accent" : "text-accent"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            plan.highlighted ? "text-white/90" : "text-gray-600"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link href="/contact">
                  <motion.button
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-accent text-white hover:bg-accent/90 shadow-lg"
                        : "bg-accent text-white hover:bg-accent/90 shadow-md"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-lg font-medium">
              All plans include a <span className="text-accent font-bold">FREE 2-week pilot</span>. No commitment.
            </p>

          </motion.div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
