"use client";
import React from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import {
  HiOutlinePhone,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUserGroup,
  HiOutlineCog,
} from "react-icons/hi2";
import { FaBullseye } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <HiOutlinePhone size={36} color="#fff" />,
      title: "AI Voice Agents",
      tag: "Most In-Demand",
      description: "Handle inbound/outbound calls 24/7 in Urdu + English. Targets: Real estate, hospitals, telcos, universities. Saving: 60–80% vs human call center."
    },
    {
      icon: <HiOutlineChatBubbleLeftRight size={36} color="#fff" />,
      title: "WhatsApp AI Agent",
      tag: "Fastest ROI",
      description: "Trains on your business, deployed in 48 hours. Handles: queries, lead capture, booking, follow-up. From PKR 25,000/month."
    },
    {
      icon: <FaBullseye size={30} color="#fff" />,
      title: "AI Lead Generation Agency",
      tag: "High Ticket",
      description: "Automated outbound: finds leads, writes outreach, follows up, books meetings. 20–50 qualified leads/month."
    },
    {
      icon: <HiOutlineUserGroup size={36} color="#fff" />,
      title: "AI SDR Agent",
      tag: "Global Demand",
      description: "Automated LinkedIn + email sales outreach. Replaces a full-time human SDR at a fraction of the cost."
    },
    {
      icon: <HiOutlineCog size={36} color="#fff" />,
      title: "Business Process Automation",
      tag: "Enterprise",
      description: "Full workflow automation across HR, CRM, finance. ERP/POS integration. Enterprise via NICAT network."
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Our{" "}
            <span className="text-accent">Services</span>
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            AI-powered solutions designed to automate, scale, and grow your business from Islamabad to the globe
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16 md:space-y-20">
          {services.map((service, index) => (
            <div key={service.title} className="relative">
              {/* Service Content */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                {/* Icon and Title */}
                <div className="flex items-center gap-6 md:w-[380px] md:flex-shrink-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="bg-accent w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                      {service.title}
                    </h3>
                    <span className="inline-block mt-1 text-xs font-bold text-accent bg-accent/10 rounded-full px-3 py-1">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Vertical Line (hidden on mobile) */}
                <div className="hidden md:block w-px bg-gray-200 h-16 mx-8 flex-shrink-0"></div>

                {/* Description */}
                <div className="flex-1">
                  <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Horizontal Line Between Services (except last one) */}
              {index < services.length - 1 && (
                <div className="mt-16 md:mt-20">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-20">
          <Link href="/contact">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold text-lg rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Book Free Demo
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
