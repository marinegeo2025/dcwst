import React, { useState, useEffect } from "react";
import ColdWaterCrewLog from "./coldwatercrewlog";
import Surflist from "./Surflist";
import Competitions from "./components/Competitions";
import Leaderboard from "./components/Leaderboard";
import WhatWeStandFor from "./WhatWeStandFor";
import Apparel from "./components/Apparel";
import Taggbox from "./components/Taggbox";

export default function App() {
  //
  // 1) Admin login/logout in the parent
  //
  const [isAdmin, setIsAdmin] = useState(false);
  const [surfers, setSurfers] = useState([]);

  // The FORM data for a new surfer
  const [newSurfer, setNewSurfer] = useState({
    name: "",
    country: "",
    points: 0,
    image: "",
  });

  // On mount, see if "isAdmin" is in localStorage
  useEffect(() => {
    if (localStorage.getItem("isAdmin") === "true") {
      setIsAdmin(true);
    }
  }, []);

  // <-- ADDED: Fetch surfers from server on mount, override local if server has data
  useEffect(() => {
    fetch("/api/surfers")
      .then((res) => res.json())
      .then((serverSurfers) => {
        if (serverSurfers && serverSurfers.length > 0) {
          setSurfers(serverSurfers);
        }
      })
      .catch((err) =>
        console.error("Error fetching surfers from server:", err)
      );
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

  // Add surfer
  const addSurfer = () => {
    if (!newSurfer.name.trim()) return;
    const newId = Date.now();
    const surferToAdd = { id: newId, ...newSurfer };

    // 1) Local update
    setSurfers((prev) => [...prev, surferToAdd]);

    // 2) Server update
    fetch("/api/surfers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(surferToAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        setSurfers(data.surfers); // ✅ actually update local surfers from server
      })
      .catch((err) => console.error("Error adding surfer on server:", err));

    // Reset form
    setNewSurfer({ name: "", country: "", points: 0, image: "" });
  };

  // Remove surfer
  const removeSurfer = (idToRemove) => {
    // 1) Local removal
    setSurfers((prev) => prev.filter((s) => s.id !== idToRemove));

    // <-- ADDED: Also DELETE on server
    fetch(`/api/surfers/${idToRemove}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setSurfers(data.surfers); // ✅ refresh surfers from server
      })

      .catch((err) => console.error("Error removing surfer on server:", err));
  };

  // Update surfer points (for editing scores in Leaderboard)
  const updateSurferPoints = (id, newPoints) => {
    // 1) Local update
    setSurfers((prevSurfers) =>
      prevSurfers.map((surfer) =>
        surfer.id === id ? { ...surfer, points: newPoints } : surfer
      )
    );

    // <-- ADDED: Also PUT to server
    fetch(`/api/surfers/${id}/points`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ points: newPoints }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSurfers(data.surfers); // ✅ refresh surfers from server
      })

      .catch((err) =>
        console.error("Error updating surfer points on server:", err)
      );
  };

  //
  // 3) Return your full layout
  //
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-gray-800 text-white font-sans">
      {/* Hero Section */}
      <header className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-slate-900 to-black animate-gradient bg-cover bg-center"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase text-white drop-shadow-lg animate-fade-in-up">
            Daisy’s Cold Water Surf Team
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-xl md:text-2xl text-gray-200 leading-relaxed animate-fade-in-up delay-100">
            DECENTRALIZED | UNDERGROUND | SURFING
          </p>

          {/* Scrolling Marquee */}
          <section
            className="overflow-hidden text-white mt-6 w-full max-w-2xl animate-fade-in-up delay-200"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          >
            <div className="marquee text-xl py-2 whitespace-nowrap">
              ⚡ Courage ⚡ Grit ⚡ Fortitude ⚡ Balance ⚡ Wisdom ⚡ Recovery
              ⚡ Discipline ⚡ Non-elitism ⚡ Egalitarianism ⚡
            </div>
          </section>

          {/* "Inspired by..." paragraph */}
          <p className="mt-6 text-lg md:text-xl text-gray-300 italic max-w-3xl animate-fade-in-up delay-300">
           Inspired by Kannonsan's compassion, Fudō Myōō’s unwavering spirit, 
            Tanukisan’s joyful resilience, Darumasan’s relentless determination, 
            Beira’s storm-forged endurance, Seonaidh’s sacred bond with sea and soul, 
            Zeno’s virtuous reason, and Peely’s fearlessness.
            <br />
            <span className="font-semibold">
              United, equal, and relentless—still we rise:
              <br />
              from the underground to the very top.
            </span>
          </p>

          {/* Logo (Clickable Flying Surfboard Button) */}
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
                className="
        w-36 h-36 md:w-48 md:h-48
        rounded-full object-cover
        shadow-lg border-4 border-sky-400
        transition duration-300
        hover:scale-110
        hover:shadow-[0_0_30px_8px_rgba(56,189,248,0.6)]
        animate-pulse-soft
      "
              />
            </a>
          </div>
        </div>
      </header>

      {/* What We Stand For */}
      <WhatWeStandFor />

      {/* Competitions */}
      <Competitions />

      {/* Taggbox Widget Section */}
      <Taggbox />

      {/* DCWST LEADERBOARD Title */}
      <h2
        className="text-center text-4xl md:text-5xl mt-12 mb-8 font-extrabold tracking-widest text-white drop-shadow-lg"
        style={{ fontFamily: "'Press Start 2P', sans-serif" }}
      >
        DCWST LEADERBOARD
      </h2>

      {/* Leaderboard */}
      <Leaderboard
        isAdmin={isAdmin}
        surfers={surfers}
        newSurfer={newSurfer}
        setNewSurfer={setNewSurfer}
        addSurfer={addSurfer}
        removeSurfer={removeSurfer}
        updateSurferPoints={updateSurferPoints}
      />

      {/* === INSERTED PRODUCT CARDS === */}
      <section className="px-6 py-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* DCWSC / OG Cream */}
        <a
          href="https://daisyscoldwatersurfcream.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-gray-900 p-6 rounded-xl shadow-md transition transform duration-300 hover:scale-105 hover:rotate-1 hover:animate-pro-pulse"
        >
          <div className="flex justify-center mb-4">
            <img
              src="https://i.imgur.com/QPo6eGM.png"
              alt="Daisy's Cold Water Surf Cream Logo"
              className="w-16 h-16 rounded-full object-cover shadow-lg transition duration-300 group-hover:ring-4 group-hover:ring-sky-400 group-hover:ring-opacity-50"
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

        {/* Soul Fire Surf Wax (SFSW) */}
        <a
          href="/sfsw.html"
          target="_blank"
          rel="noopener noreferrer"
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

        {/* BodyBlueprint AI */}
        <a
          href="https://www.bodyblueprintai.life/?v=2"
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-gray-900 p-6 rounded-xl shadow-md transition transform duration-300 hover:scale-105 hover:rotate-1 hover:animate-pro-pulse"
        >
          <div className="flex justify-center mb-4">
            <img
              src="https://i.imgur.com/w4tG6W4.png"
              alt="BodyBlueprint AI Logo"
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

        {/* GENKI CBD Cream */}
        <a
          href="https://alz.bigcartel.com/product/genki-cbd-cream"
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-gray-900 p-6 rounded-xl shadow-md transition transform duration-300 hover:scale-105 hover:rotate-1 hover:animate-pro-pulse"
        >
          <div className="flex justify-center mb-4">
            <img
              src="https://i.imgur.com/AVpVqq4.png"
              alt="GENKI CBD Cream"
              className="w-16 h-16 rounded-full object-cover shadow-lg"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">🌿 GENKI CBD Cream</h3>
          <p className="text-gray-400 text-sm mb-3">
            Sustained Pain Relief. Empowered Recovery. Shea Butter + CBD.
          </p>
          <span className="inline-block mt-2 px-4 py-2 text-xs font-semibold text-sky-400 border border-sky-400 rounded-full hover:bg-sky-400 hover:text-black transition duration-300">
            Shop GENKI CBD Cream
          </span>
        </a>
      </section>
      {/* === END PRODUCT CARDS === */}
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

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-20 mb-10">
        © 2025 Daisy’s Cold Water Surf Team. Decentralized. Underground.
        Surfing.
      </footer>
    </div>
  );
}