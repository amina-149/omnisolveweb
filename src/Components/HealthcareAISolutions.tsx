"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

function HealthcareImageSlider() {
  const images = [
    "/health1.png",
    "/health2.png",
    "/health3.png"
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-[440px] h-[520px] md:w-[600px] md:h-[740px] rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-br from-vlightbg via-bg to-vlightbg">
      <Image
        src={images[current]}
        alt="Healthcare AI Visual"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 rounded-2xl"
        style={{ opacity: 1 }}
        width={600}
        height={740}
      />
      <div className="absolute inset-0 bg-bg/40 rounded-2xl pointer-events-none" />
    </div>
  );
}

export default function HealthcareAISolutions() {
  return (
    <section className="w-full py-16 px-6 md:px-16 lg:px-32 bg-vlightbg flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col gap-10">
        <h2 className="text-5xl md:text-6xl font-bold text-bg font-poppins mb-4 drop-shadow">Healthcare AI Solutions</h2>
        <ul className="flex flex-col gap-6 text-lg md:text-xl text-bg font-poppins">
          <li className="flex items-center gap-3">
            <span className="w-8 h-8 bg-lightbg rounded-full flex items-center justify-center">
              <span className="text-bg text-2xl">🩺</span>
            </span>
            Diagnostic support
          </li>
          <li className="flex items-center gap-3">
            <span className="w-8 h-8 bg-lightbg rounded-full flex items-center justify-center">
              <span className="text-bg text-2xl">💊</span>
            </span>
            Medicine reminders
          </li>
          <li className="flex items-center gap-3">
            <span className="w-8 h-8 bg-lightbg rounded-full flex items-center justify-center">
              <span className="text-bg text-2xl">📈</span>
            </span>
            Predictive analytics
          </li>
        </ul>
        {/* Badges */}
        <div className="flex gap-8 mt-6">
          <span className="w-20 h-20 rounded-full bg-darkbg border-2 border-bg flex items-center justify-center text-vlightbg font-extrabold text-xl shadow">HIPAA</span>
          <span className="w-20 h-20 rounded-full bg-darkbg border-2 border-bg flex items-center justify-center text-vlightbg font-extrabold text-xl shadow">ISO</span>
        </div>
        {/* Case Study Block */}
        <div className="mt-8 p-6 bg-darkbg rounded-xl flex items-center gap-6 shadow-lg">
          <div className="w-20 h-20 bg-vlightbg rounded-full flex items-center justify-center text-bg text-3xl font-extrabold">25%</div>
          <div className="text-vlightbg font-poppins text-lg md:text-xl">increase in adherence at a mid-size clinic</div>
        </div>
        {/* CTA Button */}
  <button className="mt-10 px-12 py-6 rounded bg-darkbg text-vlightbg font-extrabold font-poppins text-2xl shadow-lg hover:bg-bg hover:text-lightbg transition">Initiate Healthcare Partnership</button>
        {/* Security Page Link Box */}
        <div className="mt-8 p-4 bg-lightbg/40 rounded-lg border border-darkbg text-darkbg font-poppins font-semibold w-fit cursor-pointer hover:bg-lightbg transition shadow">
          <a href="#security" className="no-underline">Security Page</a>
        </div>
      </div>
      {/* Right: Image Slider */}
      <div className="flex-1 flex items-center justify-center z-10">
        <div className="rounded-2xl shadow-2xl overflow-hidden">
          <HealthcareImageSlider />
        </div>
      </div>
    </section>
  );
}