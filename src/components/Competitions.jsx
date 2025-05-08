// src/components/Competitions.jsx
import React from "react";

export default function Competitions() {
  return (
    <section className="relative bg-black py-16 px-4 text-center overflow-hidden">
      {/* Background grid of angled surf images */}
      <div className="absolute inset-0 z-0 grid grid-cols-4 gap-2 opacity-30 rotate-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <img
            key={i}
            src={`https://source.unsplash.com/800x600/?surfing,wave,${i}`}
            alt="Surf"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
        ))}
      </div>

      {/* Title and Button */}
      <div className="relative z-10">
        <h2 className="text-5xl italic font-extrabold text-white drop-shadow-lg tracking-wide">
          SURF COMPETITION #001
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          Join our #hashtagged Instagram - YouTube - Facebook contests STARTING MAY 2025 – surf clips, stoke, and epic prizes (TBA).
        </p>
        <a
          href="https://woobox.com/iiu7j9"
          className="inline-block mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Enter Current Competitions (Coming Soon)
        </a>
      </div>
    </section>
  );
}
