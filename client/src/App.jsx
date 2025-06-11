import React, { useState, useEffect } from "react";
import ColdWaterCrewLog from "./coldwatercrewlog";
import Surflist from "./Surflist";
import Competitions from "./components/Competitions";
import Leaderboard from "./components/Leaderboard";
import WhatWeStandFor from "./WhatWeStandFor";
import Apparel from "./components/Apparel";
import Tagembed from "./components/Tagembed";
import { Analytics } from "@vercel/analytics/react";
import FriendsSupporters from "./components/FriendsSupporters";

const trackProductClick = (label) => {
  window.gtag &&
    window.gtag("event", "product_card_click", {
      event_category: "Product Link",
      event_label: label,
      transport_type: "beacon",
    });
};

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAdmin") === "true") {
      setIsAdmin(true);
    }
  }, []);

  const handleAdminLogin = (password) => {
    if (password === "daisyadmin") {
      localStorage.setItem("isAdmin", "true");
      setIsAdmin(true);
    } else {
      alert("Wrong password!");
    }
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-gray-800 text-white font-sans">
      {/* Hero Section */}
      <header className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-slate-900 to-black animate-gradient bg-cover bg-center"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase text-white drop-shadow-lg animate-fade-in-up">
            Daisy’s Cold Water Surf Team
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 leading-relaxed animate-fade-in-up delay-100">
            DECENTRALIZED | UNDERGROUND | SURFING
          </p>
          <section
            className="overflow-hidden text-white mt-6 w-full max-w-2xl animate-fade-in-up delay-200"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          >
            <div className="marquee text-xl py-2 whitespace-nowrap">
              ⚡ Courage ⚡ Grit ⚡ Fortitude ⚡ Balance ⚡ Wisdom ⚡ Recovery ⚡
              Discipline ⚡ Non-elitism ⚡ Egalitarianism ⚡
            </div>
          </section>
          <p className="mt-6 text-lg md:text-xl text-gray-300 italic max-w-3xl animate-fade-in-up delay-300">
            Inspired by Kannonsan's compassion, Fudō Myōō’s unwavering spirit,
            Tanukisan’s joyful resilience, Darumasan’s relentless determination,
            Beira’s storm-forged endurance, Seonaidh’s sacred bond with sea and
            soul, Zeno’s virtuous reason, and Peely’s fearlessness.
            <br />
            <span className="font-semibold">
              United, equal, and relentless—still we rise:
              <br />
              from the underground to the very top.
            </span>
          </p>
          <div className="mt-20 flex justify-center">
            <a
              href="https://tally.so/r/wdgJPN"
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none"
            >
              <img
                src="https://i.imgur.com/DQFuK1x.png"
                alt="Daisy's Cold Water Surf Team"
                className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-sky-400 transition duration-300 hover:scale-110 hover:shadow-[0_0_30px_8px_rgba(56,189,248,0.6)] animate-pulse-soft"
              />
            </a>
          </div>
        </div>
      </header>

      <WhatWeStandFor />
      <Competitions />
      <Tagembed />

      {/* Leaderboard */}
      <h2
        className="text-center text-4xl md:text-5xl mt-12 mb-8 font-extrabold tracking-widest text-white drop-shadow-lg"
        style={{ fontFamily: "'Press Start 2P', sans-serif" }}
      >
        DCWST LEADERBOARD
      </h2>
      <Leaderboard isAdmin={isAdmin} />

<Surflist
  isAdmin={isAdmin}
  onAdminLogin={(password) => {
    if (password === "daisyadmin") {
      localStorage.setItem("isAdmin", "true");
      setIsAdmin(true);
    } else {
      alert("Wrong password!");
    }
  }}
  onAdminLogout={() => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
  }}
/>


      {/* Product Cards */}
      <section className="px-6 py-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <a
          href="https://daisyscoldwatersurfcream.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackProductClick("OG Cream")}
          className="group block bg-gray-900 p-6 rounded-xl shadow-md transition transform duration-300 hover:scale-105 hover:rotate-1 hover:animate-pro-pulse"
        >
          <div className="flex justify-center mb-4">
            <img
              src="https://i.imgur.com/QPo6eGM.png"
              alt="OG Cream"
              className="w-16 h-16 rounded-full object-cover shadow-lg group-hover:ring-4 group-hover:ring-sky-400 group-hover:ring-opacity-50"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">🧴 OG Cream</h3>
          <p className="text-gray-400 text-sm mb-3">
            Protects skin from cold, wind, and chafing. Wetsuit-safe,
            petroleum-free, and trusted by hardcore cold-water surfers.
          </p>
          <span className="inline-block mt-2 px-4 py-2 text-xs font-semibold text-sky-400 border border-sky-400 rounded-full hover:bg-sky-400 hover:text-black transition duration-300">
            View Product
          </span>
        </a>

        <a
          href="https://store.daisyscoldwatersurfteam.com/products/soul-fire-surf-wax"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackProductClick("Soul Fire Surf Wax")}
          className="group block bg-gray-900 p-6 rounded-xl shadow-md transition transform duration-300 hover:scale-105 hover:rotate-1 hover:animate-pro-pulse"
        >
          <div className="flex justify-center mb-4">
            <img
              src="https://i.imgur.com/MtwQeB8.png"
              alt="Soul Fire Surf Wax"
              className="w-16 h-16 rounded-full object-cover shadow-lg"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">🔥 Soul Fire Surf Wax</h3>
          <p className="text-gray-400 text-sm mb-3">
            Cold-temperature traction straight outta the hardcore Scottish
            surfing underground.
          </p>
          <span className="inline-block mt-2 px-4 py-2 text-xs font-semibold text-sky-400 border border-sky-400 rounded-full hover:bg-sky-400 hover:text-black transition duration-300">
            View Soul Fire Surf Wax
          </span>
        </a>

        <a
          href="https://www.bodyblueprintai.life/?v=2"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackProductClick("BodyBlueprint AI")}
          className="group block bg-gray-900 p-6 rounded-xl shadow-md transition transform duration-300 hover:scale-105 hover:rotate-1 hover:animate-pro-pulse"
        >
          <div className="flex justify-center mb-4">
            <img
              src="https://i.imgur.com/w4tG6W4.png"
              alt="BodyBlueprint AI"
              className="w-16 h-16 rounded-full object-cover shadow-lg"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">🧠 BodyBlueprint AI</h3>
          <p className="text-gray-400 text-sm mb-3">
            Personalized training, nutrition, and mindset powered by AI.
          </p>
          <span className="inline-block mt-2 px-4 py-2 text-xs font-semibold text-sky-400 border border-sky-400 rounded-full hover:bg-sky-400 hover:text-black transition duration-300">
            Visit BodyBlueprint AI
          </span>
        </a>      
</section>

<Apparel />

<div className="mt-20">
  <FriendsSupporters />
</div>

<footer className="text-center text-gray-500 text-sm mt-20 mb-10">
  © 2025 Daisy’s Cold Water Surf Team. Decentralized. Underground. Surfing.
</footer>

<Analytics />
    </div>
  );
}