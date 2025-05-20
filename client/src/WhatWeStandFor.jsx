import { motion } from "framer-motion";

export default function WhatWeStandFor() {
  return (
    <section
      className="relative mt-8 px-6 pt-20 pb-12 mb-12 max-w-4xl mx-auto text-center space-y-10 rounded-2xl shadow-xl border border-white/10 overflow-hidden"
      style={{
        backgroundColor: "#0d111700", // transparent background fallback
      }}
    >
      <motion.div
        className="relative z-10 p-6 text-white uppercase tracking-wide text-xl leading-relaxed font-staatliches font-bold"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2
          className="text-5xl mb-10 text-yellow-400"
          style={{
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

        <p>
          WE ARE A VISION. A VIBE. A VOICE FOR GOOD.<br />
          WE ARE A MOVEMENT.<br />
          A COLD-WATER TRIBE. A SURF FAMILY. A MISSION.
          UNITED BY LOVE FOR THE OCEAN AND A DEEP BELIEF IN EACH OTHER.
        </p>

        <p className="mt-8">
          OUR CODE IS WRITTEN IN SALT, COLD, AND RESPECT.<br />
          FOR THE OCEAN. FOR OURSELVES. FOR EACH OTHER.
        </p>

        <p className="mt-8">
          WE BELIEVE IN DISCIPLINE, POSITIVITY, AND PUSHING PAST WHAT IS CONSIDERED POSSIBLE TODAY.<br />
          WHETHER YOU’RE CHARGING SOLO, SHREDDING CONCRETE,<br />
          OR TRAINING FOR YOUR BLACK BELT — YOU BELONG HERE.
        </p>

        <p className="mt-8">
          WE TRAIN HARD. WE RECOVER HARDER.<br />
          WE LIVE BY RITUALS THAT BUILD GRIT, POWER, AND PURPOSE.
        </p>

        <p className="mt-8">
          OUR MISSION: TO BECOME A FULLY OPERATIONAL SURF TEAM.<br />
          THE TOP 20 SURFERS ON OUR LEADERBOARD WILL BE FUNDED — FULLY.<br />
          THIS ISN’T JUST A DREAM. IT’S THE BLUEPRINT TO A BRIGHTER FUTURE.
        </p>

        <p className="mt-8">
          SURFING IS TRANSFORMATIVE.<br />
          IT CREATES STOKE. DEEP, LASTING STOKE.<br />
          OUR SURFERS WILL BRING THAT STOKE HOME AND INTO THEIR COMMUNITIES—<br />
          INSPIRING JOY, PURPOSE, AND POSSIBILITY.
        </p>

        <p className="mt-8 text-3xl">
          THIS IS THE DAISY’S COLD WATER SURF TEAM.<br />
          A WARRIOR TEAM. A FAMILY. A FUTURE.
        </p>

        <p className="mt-12 text-3xl text-yellow-400 font-extrabold">
          THANK YOU FOR YOUR SUPPORT.<br />
          LET’S BUILD THIS — TOGETHER.
        </p>
      </motion.div>
    </section>
  );
}
