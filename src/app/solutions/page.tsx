import Tryon from "@/Components/tryon";
import TrainingConsulting from "@/Components/TrainingConsulting";
import HealthcareAISolutions from "@/Components/HealthcareAISolutions";
import AIAgentsBusinessAutomation from "@/Components/AIAgentsBusinessAutomation";
import React from "react";
import ModernizedFAQ from "@/Components/ModernizedFAQ";


export default function SolutionsPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      
      <section className="relative w-full h-[600px] flex items-start justify-start bg-cover bg-center" style={{ backgroundImage: "url('/servicescover.png')" }}>
        <div className="absolute inset-0 bg-bg/80" />
        <div className="relative z-10 flex flex-col items-start justify-start pt-[100px] pl-20">
          <h1 className="text-5xl md:text-7xl font-bold text-text font-poppins mb-4">Our Solutions</h1>
          <p className="text-2xl text-text font-poppins mb-6">AI-powered excellence for every industry.</p>
          <button className="px-8 py-4 rounded bg-vlightbg text-text font-bold font-poppins text-lg shadow hover:bg-lightbg transition">Learn More</button>
        </div>
        
        <div className="absolute bottom-[-80px] left-0 right-0 flex flex-row justify-between items-end z-20 w-full px-10">
          <div className="bg-darkbg shadow-lg px-10 py-14 w-[340px] flex flex-col items-center border border-bg">
            <div className="w-14 h-14 flex items-center justify-center border-2 border-white mb-3">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-white"><path d="M3 17V7a2 2 0 012-2h14a2 2 0 012 2v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <span className="text-2xl font-bold text-white mb-2 font-poppins">Quality Work</span>
            <p className="text-lg text-white/80 text-center font-poppins">Delivering reliable, enterprise-grade solutions for every client.</p>
          </div>
          {/* Box 2 - center */}
          <div className="bg-darkbg shadow-lg px-10 py-14 w-[340px] flex flex-col items-center border border-bg">
            <div className="w-14 h-14 flex items-center justify-center border-2 border-white mb-3">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-white"><path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <span className="text-2xl font-bold text-white mb-2 font-poppins">Scalable Innovation</span>
            <p className="text-lg text-white/80 text-center font-poppins">AI solutions built to grow with your business and industry needs.</p>
          </div>
          {/* Box 3 - right */}
          <div className="bg-darkbg shadow-lg px-10 py-14 w-[340px] flex flex-col items-center border border-bg">
            <div className="w-14 h-14 flex items-center justify-center border-2 border-white mb-3">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-white"><path d="M17 8a5 5 0 00-10 0v4a5 5 0 0010 0V8z" stroke="currentColor" strokeWidth="2"/><path d="M12 16v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M9 20h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <span className="text-2xl font-bold text-white mb-2 font-poppins">Trusted Partnership</span>
            <p className="text-lg text-white/80 text-center font-poppins">Long-term relationships focused on results and client success.</p>
          </div>
        </div>
      </section>
      <div className="bg-vlightbg pt-40">
        <Tryon />
        <TrainingConsulting />
        <HealthcareAISolutions />
        <AIAgentsBusinessAutomation />
        <ModernizedFAQ/>
      </div>
    </main>
  );
}
