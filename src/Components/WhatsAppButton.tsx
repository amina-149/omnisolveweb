"use client";
import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/525547000330?text=Hi%20OmniSolve%20AI%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20AI%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.052 9.38L1.056 31.18l6.012-1.952A15.88 15.88 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.342 22.616c-.39 1.1-1.932 2.012-3.172 2.278-.848.18-1.956.324-5.686-1.222-4.774-1.978-7.844-6.836-8.082-7.152-.228-.316-1.916-2.55-1.916-4.864 0-2.314 1.212-3.452 1.642-3.924.39-.428 1.028-.634 1.64-.634.198 0 .376.01.536.018.47.02.706.048 1.016.788.39.928 1.338 3.268 1.454 3.506.118.238.236.558.076.876-.148.326-.278.528-.516.808-.238.278-.498.62-.712.832-.238.238-.486.496-.21.968.278.47 1.236 2.036 2.654 3.298 1.822 1.62 3.36 2.124 3.836 2.36.356.176.78.138 1.068-.168.368-.39.822-1.036 1.284-1.672.328-.454.742-.51 1.136-.344.398.158 2.526 1.192 2.958 1.408.432.218.72.326.826.508.104.18.104 1.058-.286 2.158z" />
      </svg>
      {/* Pulse animation */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-75 pointer-events-none" />
    </a>
  );
}
