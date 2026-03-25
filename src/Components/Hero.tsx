"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const badgesRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });

      if (headlineRef.current) {
        tl.from(headlineRef.current, { y: 50, opacity: 0, duration: 0.8, ease: "power2.out" });
      }
      if (subtitleRef.current) {
        tl.from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");
      }
      if (badgesRef.current) {
        tl.from(badgesRef.current, { y: 20, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");
      }
      if (buttonsRef.current) {
        tl.from(buttonsRef.current, { y: 20, opacity: 0, scale: 0.95, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2");
      }
      if (statsRef.current) {
        tl.from(statsRef.current, { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.1");
      }
    }, heroRef);

    return () => {
      ctx.revert();
      if (typeof ScrollTrigger !== "undefined" && typeof ScrollTrigger.getAll === "function") {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      }
    };
  }, []);

  const badges = [
    { emoji: "🌍", text: "Global Enterprise AI Partner" },
    { emoji: "🟢", text: "NICAT Cohort 7 — Islamabad" },
    { emoji: "🟢", text: "MOU with Pakistan Executive Forum" },
    { emoji: "🟢", text: "FAO AMR Competition Winner 2025" },
  ];

  const stats = [
    { number: "1", label: "Live AI Product", sub: "Kisan Pukar AI" },
    { number: "3+", label: "Govt & Enterprise Partners", sub: "" },
    { number: "2", label: "International Competitions", sub: "AMR + AeroHack" },
    { number: "48hrs", label: "Agent Deployment Time", sub: "" },
  ];

  return (
    <>
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-no-repeat hero-bg"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 flex flex-col items-start justify-center text-left px-6 py-20 w-full max-w-7xl mx-auto">
          <h1
            ref={headlineRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 max-w-5xl leading-tight"
          >
            Pakistan&apos;s AI Agency —{" "}
            <span className="text-accent">Built for the World</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-normal sm:font-medium mb-8 max-w-4xl leading-relaxed"
          >
            We deploy AI Agents, Voice Agents &amp; Automation that run your business 24/7 — Islamabad to the globe.
          </p>

          {/* Trust Badges */}
          <div ref={badgesRef} className="flex flex-wrap gap-3 mb-10">
            {badges.map((badge, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-xs sm:text-sm text-white font-medium"
              >
                <span>{badge.emoji}</span>
                <span>{badge.text}</span>
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/contact">
              <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-bold text-base md:text-lg rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto sm:min-w-[220px]">
                <span>Book Free Demo</span>
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/pricing">
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-base md:text-lg rounded-full hover:bg-white/20 transition-all duration-300 w-full sm:w-auto sm:min-w-[220px]">
                View Pricing
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={statsRef} className="bg-primary py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.number}</div>
                <div className="text-white font-medium text-sm md:text-base">{stat.label}</div>
                {stat.sub && <div className="text-white/60 text-xs mt-0.5">{stat.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
