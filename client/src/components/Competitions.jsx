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
          STORE
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          Visit our store.  Our goal with the store is to be able to financially support our top 20 surfers doing what they love: surfing. Surfing has amazing transformative power and through surfing our team riders bring stoke to their communities.  Help us to create a more stoked world by visiting the store and picking up your favorite merch today :)
        </p>
        <a
          href="https://store.daisyscoldwatersurfteam.com"
          className="inline-block mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Visit the DCWST Store
        </a>
      </div>
    </section>
  );
}
