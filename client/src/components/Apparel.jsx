import React from "react";

export default function Apparel() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      {/* Big heading */}
      <h2 className="text-5xl font-extrabold mb-10 tracking-widest text-white drop-shadow-lg animate-fade-in-up">
        APPAREL
      </h2>

      {/* Two side-by-side images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10 animate-fade-in-up delay-100">
        <img
          src="https://i.imgur.com/rofGcW6.png"
          alt="Champions Tee Front"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-[500px] transform transition-transform duration-300 hover:scale-105"
        />
        <img
          src="https://i.imgur.com/9xpI9y9.png"
          alt="Champions Tee Back"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-[500px] transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Description */}
      <div className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
        <p className="mb-4 font-semibold">
          SPRING 2025: Daisy’s Cold Water Surf Team Champions Tee
        </p>
        <p className="mb-4">
          This premium white performance tee celebrates the spirit of champions.
          Featuring a clean, minimalist design, the shirt proudly displays:
        </p>
        <ul className="list-disc list-inside text-left mb-4">
          <li>
            A gold Surf Team Champions 2025 badge on the upper left chest,
            symbolizing achievement and dedication.
          </li>
          <li>
            A stylized blue logo on the right chest, adding balance and a modern
            athletic feel.
          </li>
          <li>
            The Daisy’s Cold Water Surf Team name boldly printed across the
            front in elegant blue lettering, combining classic surf culture with
            championship prestige.
          </li>
        </ul>
        <p>
          Built for surfers and water athletes, this tee merges comfort, style,
          and inspiration — perfect for wearing on the beach, at competitions, or
          during everyday adventures.
        </p>
      </div>

      {/* Big buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-6 animate-fade-in-up delay-300">
        <a
          href="https://bit.ly/4lPxore"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition"
        >
          SHOP ADULTS
        </a>
        <a
          href="https://bit.ly/4d0KRsn"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold transition"
        >
          SHOP KIDS
        </a>
      </div>
    </section>
  );
}
