import React, { useState, useEffect } from "react";
import ColdWaterCrewLog from "./coldwatercrewlog";
import Surflist from "./Surflist";
import Competitions from "./components/Competitions";
import Leaderboard from "./components/Leaderboard";
import WhatWeStandFor from "./WhatWeStandFor";
import Apparel from "./components/Apparel";
import Taggbox from "./components/Taggbox";
import { Analytics } from "@vercel/analytics/react";
import FriendsSupporters from "./components/FriendsSupporters";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  // Check localStorage to see if we're still in admin mode
  useEffect(() => {
    if (localStorage.getItem("isAdmin") === "true") {
      setIsAdmin(true);
    }
  }, []);

  // Attempt to log in with a password
  const handleAdminLogin = (password) => {
    if (password === "daisyadmin") {
      localStorage.setItem("isAdmin", "true");
      setIsAdmin(true);
    } else {
      alert("Wrong password!");
    }
  };

  // Log out of admin mode
  const handleAdminLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-gray-800 text-white font-sans">
      {/* Hero Section */}
      <header className="relative w-full h-screen overflow-hidden">
        {/* ... same hero code ... */}
      </header>

      <WhatWeStandFor />
      <Competitions />
      <Taggbox />

      {/* DCWST LEADERBOARD Title */}
      <h2
        className="text-center text-4xl md:text-5xl mt-12 mb-8 font-extrabold tracking-widest text-white drop-shadow-lg"
        style={{ fontFamily: "'Press Start 2P', sans-serif" }}
      >
        DCWST LEADERBOARD
      </h2>

      {/* Leaderboard: just pass isAdmin */}
      <Leaderboard isAdmin={isAdmin} />

      {/* PRODUCT CARDS */}
      <section>
        {/* ... your product grid code ... */}
      </section>

      <Apparel />

      {/* Surf List */}
      <Surflist
        isAdmin={isAdmin}
        onAdminLogin={handleAdminLogin}
        onAdminLogout={handleAdminLogout}
      />

      {/* Cold Water Crew Log */}
      <section id="crewlog">
        <ColdWaterCrewLog />
      </section>

      <div className="mt-20">
        <FriendsSupporters />
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-20 mb-10">
        © 2025 Daisy’s Cold Water Surf Team. Decentralized. Underground. Surfing.
      </footer>
      <Analytics />
    </div>
  );
}
