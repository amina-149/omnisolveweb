"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import { simpleCaseStudies } from "@/assets/data";

export default function CaseStudiesSection() {
  return (
    <section className="w-full bg-light py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Our <span className="text-accent">Work</span>
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Showcasing AI-driven solutions and web development projects that deliver measurable results
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {simpleCaseStudies.map((study) => (
            <div
              key={study.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent/90 text-white text-xs font-semibold rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {study.title}
                </h3>

                <p className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base">
                  {study.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* Optional View All Projects Link */}
        <div className="text-center mt-12">
          <Link href="/contact#consultation-form">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold text-lg rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Book a Consultation
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
