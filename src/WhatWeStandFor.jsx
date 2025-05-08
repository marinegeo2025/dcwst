import { motion } from "framer-motion";

export default function WhatWeStandFor() {
  return (
    <section
      className="relative px-6 py-20 mb-12 max-w-4xl mx-auto text-center space-y-10 rounded-2xl shadow-xl border border-white/10 overflow-hidden"
      style={{
        backgroundImage: `url('https://i.imgur.com/NQfvPIq.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // Remove or set to transparent if you want no fallback color:
        backgroundColor: "#0d111700", 
      }}
    >
      {/*
        --- REMOVED: Gradient Mask SVG ---
        If you don't need a dark overlay at all, just remove or comment out the SVG.
      */}
      {/* <svg
        className="absolute inset-0 w-full h-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1117" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0d1117" stopOpacity="0.8" />
        </linearGradient>
        <rect width="100" height="100" fill="url(#fade)" />
      </svg> */}

      {/* Text Content with Framer Motion, but no extra backdrop color */}
      <motion.div
        className="relative z-10 p-8" // removed backdrop-blur & background
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Fortnite-Style Heading */}
        <h2
          className="text-6xl font-extrabold uppercase tracking-wide"
          style={{
            color: "#FFEC00", // bright Fortnite-like yellow
            // Multi-directional black outline
            textShadow: `
              2px 2px 0 #000,
              -2px 2px 0 #000,
              2px -2px 0 #000,
              -2px -2px 0 #000
            `,
          }}
        >
          What We Stand For
        </h2>

        {/* Paragraphs in white with a light black shadow for readability */}
        <p className="text-white text-xl leading-relaxed font-medium mt-8"
           style={{
             textShadow: "1px 1px 2px #000",
           }}
        >
          We’re not a brand. We’re a decentralized tribe of cold-water warriors — 
          bound by saltwater, the cold, and a relentless respect for ourselves, the ocean, 
          the environment and each other.
        </p>

        <p className="text-white text-xl leading-relaxed font-medium"
           style={{
             textShadow: "1px 1px 2px #000",
           }}
        >
          Our mission: positivity, discipline, and riding deeper, heavier barrels than ever before.
        </p>

        <p className="text-white text-xl leading-relaxed font-medium"
           style={{
             textShadow: "1px 1px 2px #000",
           }}
        >
          Whether you’re charging solo, shredding frozen concrete on a surfskate, 
          or training for your black belt — we train hard, recover harder, and live 
          by daily rituals that forge strength, resilience, and success.
        </p>

        <p className="text-white text-xl leading-relaxed font-medium"
           style={{
             textShadow: "1px 1px 2px #000",
           }}
        >
          All action starts and ends with respect. Train for waves that break boards and people. Stay stoked, keep on rippin'!!!
        </p>
      </motion.div>
    </section>
  );
}
