"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiCheck } from "react-icons/hi2";
import CallToAction from "@/Components/CallToAction";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter Protocol",
      price: "PKR 25,000",
      priceAlt: "~ $90 / ¥650",
      period: "/month",
      description: "Baseline AI deployment for rapid early-stage automation.",
      highlighted: false,
      cta: "Initialize Free Pilot",
      features: [
        "1 Autonomous WhatsApp Agent",
        "100 Daily Intercepts/Conversations",
        "Bilingual (Urdu + English) Logic",
        "FAQ & Booking Subroutines",
        "Monthly Telemetry Report",
      ],
    },
    {
      name: "Growth Matrix",
      price: "PKR 75,000",
      priceAlt: "~ $270 / ¥1,900",
      period: "/month",
      description: "Scalable neural architecture for accelerating enterprise operations.",
      highlighted: true,
      cta: "Request Comm Link",
      features: [
        "3 Agent Cluster (Sales + Support + HR)",
        "Lead Qualification Pipeline",
        "CRM & Email Interfacing",
        "Live Weekly Analytics Dashboard",
        "Priority Tier-1 Support",
      ],
    },
    {
      name: "Enterprise Architecture",
      price: "PKR 200,000+",
      priceAlt: "Custom USD / CNY",
      period: "/month",
      description: "Full-scale custom LLM orchestration and hardware integration.",
      highlighted: false,
      cta: "Access Terminal",
      features: [
        "Unlimited Agent Ecosystem",
        "Voice Intelligence (Inbound & Outbound)",
        "Deep ERP & POS Hardware Integration",
        "Dedicated Engineering Liaison",
        "99.9% Minimum SLA Guarantee",
        "On-Premise Staff Training",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden selection:bg-accent/30">
      
      {/* 1. HERO SECTION (GLASSMORPHIC) */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0"></div>
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-accent/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>

        <motion.div className="relative z-10 w-full max-w-5xl mx-auto text-center px-6" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
          
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-accent mb-8 tracking-tighter">
            System Acquisition.
          </h1>
          <p className="text-xl md:text-3xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed mb-6">
            Transparent deployment topologies for every operational scale. No hidden payload fees.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-accent font-bold tracking-widest shadow-2xl">
            <HiCheck className="text-xl" /> Includes 14-Day Zero-Risk Pilot
          </div>
        </motion.div>
      </section>

      {/* 2. PRICING MATRICES (GLASS CARDS) */}
      <section className="relative -mt-32 z-20 px-4 sm:px-8 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-[2.5rem] p-10 flex flex-col group ${
                plan.highlighted
                  ? "bg-primary text-white shadow-2xl scale-100 md:scale-105 border-0 overflow-hidden"
                  : "bg-white/90 backdrop-blur-2xl text-primary shadow-xl border border-white hover:shadow-2xl hover:-translate-y-2 transition-transform duration-500"
              }`}
            >
              {plan.highlighted && (
                <>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 blur-[60px] rounded-full pointer-events-none z-0"></div>
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-accent to-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(255,107,0,0.4)] z-10">
                    Optimal Matrix
                  </div>
                </>
              )}

              <div className="mb-10 relative z-10">
                <h3 className={`text-2xl font-black tracking-tight mb-3 ${plan.highlighted ? "text-white" : "text-primary"}`}>{plan.name}</h3>
                <p className={`text-sm font-medium leading-relaxed mb-8 h-10 ${plan.highlighted ? "text-white/60" : "text-gray-500"}`}>
                  {plan.description}
                </p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl lg:text-5xl font-black tracking-tighter">{plan.price}</span>
                  <span className={`text-lg font-bold mb-1 ${plan.highlighted ? "text-white/50" : "text-gray-400"}`}>{plan.period}</span>
                </div>
                <div className={`inline-flex px-3 py-1 rounded-md text-xs font-bold tracking-widest uppercase ${plan.highlighted ? "bg-white/10 text-white/90" : "bg-gray-100 text-gray-500"}`}>
                  {plan.priceAlt}
                </div>
              </div>

              {/* Features Array */}
              <div className="flex-1 mb-10 relative z-10">
                <ul className="space-y-5">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-4">
                      <div className={`mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${plan.highlighted ? "bg-accent/20 text-accent" : "bg-gray-50 text-accent border border-gray-100"}`}>
                        <HiCheck className="text-sm" />
                      </div>
                      <span className={`text-sm font-bold ${plan.highlighted ? "text-white/80" : "text-gray-700"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Node */}
              <Link href="/contact" className="relative z-10 mt-auto">
                <button
                  className={`w-full py-5 rounded-2xl font-bold text-lg flex justify-center items-center gap-2 transition-all duration-300 group/btn shadow-lg ${
                    plan.highlighted
                      ? "bg-accent text-white hover:bg-accent/90"
                      : "bg-gray-100 text-primary hover:bg-gray-200"
                  }`}
                >
                  {plan.cta} <HiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.5 }}>
          <p className="text-gray-500 font-medium text-lg">
            System requires deeper integration? <Link href="/contact" className="text-accent font-bold hover:underline">Initate custom protocol ping.</Link>
          </p>
        </motion.div>
      </section>

      <CallToAction />
    </div>
  );
}
