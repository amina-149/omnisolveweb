"use client"
import React from "react";



export default function TrainingConsulting() {
  return (
    <section className="w-full mt-20 mb-20 py-16 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-vlightbg via-bg to-vlightbg flex flex-col md:flex-row items-center justify-center relative overflow-hidden">
      <div className="flex-1 flex flex-col justify-center items-start z-10 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-vlightbg font-poppins mb-8">AI Training & Consulting</h2>
        <ul className="list-disc pl-8 text-lg md:text-xl text-text font-poppins mb-8">
          <li>Bespoke adoption frameworks</li>
          <li>C-level workshops</li>
          <li>Strategy roadmaps</li>
        </ul>
        <div className="bg-vlightbg/30 rounded-xl p-8 mb-8 text-lg md:text-xl text-text font-poppins">
          <strong>Success Story:</strong> <br />
          “45% efficiency gain for Startup Y” <span className="text-vlightbg font-semibold">(video testimonial)</span>
        </div>
        <button className="px-10 py-5 rounded bg-vlightbg text-text font-bold font-poppins text-xl md:text-2xl shadow hover:bg-lightbg transition">Schedule an Executive Strategy Session</button>
      </div>
      <div className="flex-1 flex items-center justify-center z-10">
        <div className="relative w-[420px] h-[320px] md:w-[520px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-darkbg">
          <video
            className="w-full h-full object-cover rounded-2xl"
            controls
            poster="/training1.png"
            preload="none"
          >
            <source src="/training-testimonial.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* Optional: Decorative background */}
      <div className="absolute inset-0 bg-bg/70 pointer-events-none" />
    </section>
  );
}
