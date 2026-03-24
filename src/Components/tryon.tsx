import React from "react";

export default function Tryon() {
    return (
        <section
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch relative"
            style={{ backgroundImage: "url('/tryonbg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-bg/80 z-0" />
            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-0 md:p-0">
                <div className="w-full flex items-center justify-center py-8">
                    {/* Demo video placeholder, import later */}
                    <div className="w-[420px] h-[240px] bg-darkbg border-4 border-vlightbg rounded-2xl flex flex-col items-center justify-center text-white text-lg font-poppins shadow-lg">
                        <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="mb-2 text-vlightbg"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><polygon points="10,8 16,12 10,16" fill="currentColor" /></svg>
                        <span>Demo video coming soon</span>
                        <span className="text-xs text-white/60 mt-1">See how our AI Try-On works in real time</span>
                    </div>
                </div>
            </div>
            {/* Right: text/features/CTA */}
            <div className="relative z-10 flex-1 flex flex-col justify-center p-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-vlightbg font-poppins mb-4">AI Try-On & Personalization</h2>
                        <ul className="list-disc pl-8 text-lg md:text-xl text-text font-poppins mb-4">
                            <li>Virtual try-on for apparel, eyewear, and more</li>
                            <li>Real-time recommendations powered by A/B insights</li>
                            <li>Seamless integration with e-commerce platforms</li>
                        </ul>
                        <p className="text-xl md:text-2xl text-vlightbg font-semibold font-poppins mb-4">30% conversion lift</p>
                        <div className="bg-vlightbg/30 rounded-xl p-6 mb-6 text-lg md:text-xl text-text font-poppins">
                            <strong>Why brands love our Try-On:</strong> <br />
                            Customers engage longer, conversion rates soar, and you get actionable insights for every product.
                        </div>
                        <button className="px-10 py-5 rounded bg-vlightbg text-text font-bold font-poppins text-xl md:text-2xl shadow hover:bg-lightbg transition">Propose a Collaboration</button>
            </div>
        </section>
    );
}