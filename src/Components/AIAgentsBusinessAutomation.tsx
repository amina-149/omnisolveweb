import React from "react";


export default function AIAgentsBusinessAutomation() {
  return (
    <section
      className="w-full py-20 px-6 md:px-16 lg:px-32 bg-vlightbg flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: "url('/aiagent.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
  <div className="absolute inset-0 bg-bg/80 pointer-events-none" />
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Headline & Subtext */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-vlightbg font-poppins mb-4">AI Agents & Business Automation</h2>
          <p className="text-2xl md:text-3xl text-text font-poppins">A scalable entry point for enterprises to drive measurable impact.</p>
        </div>
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-darkbg rounded-2xl p-6 flex flex-col items-center shadow">
            <span className="text-4xl text-vlightbg mb-3">🤖</span>
            <span className="text-xl md:text-2xl font-semibold text-text font-poppins text-center">24/7 AI-powered support & sales agents</span>
          </div>
          <div className="bg-darkbg rounded-2xl p-6 flex flex-col items-center shadow">
            <span className="text-4xl text-vlightbg mb-3">🔄</span>
            <span className="text-xl md:text-2xl font-semibold text-text font-poppins text-center">Automated workflows across HR, CRM, invoicing, and procurement</span>
          </div>
          <div className="bg-darkbg rounded-2xl p-6 flex flex-col items-center shadow">
            <span className="text-4xl text-vlightbg mb-3">🔗</span>
            <span className="text-xl md:text-2xl font-semibold text-text font-poppins text-center">Easy integration with enterprise systems</span>
          </div>
        </div>
        {/* ROI Highlight */}
        <div className="flex justify-center mb-8">
          <div className="bg-vlightbg text-bg rounded-xl px-8 py-6 flex items-center gap-4 shadow-lg">
            <span className="text-3xl">📊</span>
            <span className="text-2xl md:text-3xl font-bold font-poppins">Achieved 35% cost reduction</span>
          </div>
        </div>
        {/* Media Element */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-2xl h-[420px] md:h-[640px] bg-darkbg rounded-2xl flex items-center justify-center shadow-lg relative">
            <span className="text-6xl text-vlightbg">🎬</span>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-text text-base bg-darkbg/80 px-4 py-2 rounded shadow">Video demo with captions (placeholder)</span>
          </div>
        </div>
        {/* Social Proof Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-darkbg rounded-xl border border-vlightbg p-6 shadow flex flex-col gap-2">
            <span className="text-vlightbg font-bold text-2xl md:text-4xl">Retail Industry</span>
            <span className="text-text text-xl md:text-2xl">Increased customer satisfaction by 40%</span>
            <span className="italic text-vlightbg text-lg md:text-2xl">“Our AI agent never sleeps—customers love it.”</span>
          </div>
          <div className="bg-darkbg rounded-xl border border-vlightbg p-6 shadow flex flex-col gap-2">
            <span className="text-vlightbg font-bold text-2xl md:text-4xl">Manufacturing Sector</span>
            <span className="text-text text-xl md:text-2xl">Reduced procurement time by 50%</span>
            <span className="italic text-vlightbg text-lg md:text-2xl">“Automation streamlined our entire process.”</span>
          </div>
        </div>
        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="px-10 py-5 rounded bg-vlightbg text-bg font-bold font-poppins text-xl shadow hover:bg-lightbg hover:text-bg transition">Request a Custom Enterprise Demo</button>
        </div>
      </div>
    </section>
    
  );
}
