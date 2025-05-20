import { motion } from "framer-motion";

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function WhatWeStandFor() {
  const paragraphs = [
    `WE ARE A VISION. A VIBE. A VOICE FOR GOOD.
     WE ARE A MOVEMENT.
     A COLD-WATER TRIBE. A SURF FAMILY. A MISSION.
     UNITED BY LOVE FOR THE OCEAN AND A DEEP BELIEF IN EACH OTHER.`,

    `OUR CODE IS WRITTEN IN SALT, COLD, AND RESPECT.
     FOR THE OCEAN. FOR OURSELVES. FOR EACH OTHER.`,

    `WE BELIEVE IN DISCIPLINE, POSITIVITY, AND PUSHING PAST WHAT IS CONSIDERED POSSIBLE TODAY.
     WHETHER YOU’RE CHARGING SOLO, SHREDDING CONCRETE,
     OR TRAINING FOR YOUR BLACK BELT — YOU BELONG HERE.`,

    `WE TRAIN HARD. WE RECOVER HARDER.
     WE LIVE BY RITUALS THAT BUILD GRIT, POWER, AND PURPOSE.`,

    `OUR MISSION: TO BECOME A FULLY OPERATIONAL SURF TEAM.
     THE TOP 20 SURFERS ON OUR LEADERBOARD WILL BE FUNDED — FULLY.
     THIS ISN’T JUST A DREAM. IT’S THE BLUEPRINT TO A BRIGHTER FUTURE.`,

    `SURFING IS TRANSFORMATIVE.
     IT CREATES STOKE. DEEP, LASTING STOKE.
     OUR SURFERS WILL BRING THAT STOKE HOME AND INTO THEIR COMMUNITIES —
     INSPIRING JOY, PURPOSE, AND POSSIBILITY.`,

    `DAISY’S COLD WATER SURF TEAM.
     A WARRIOR TEAM. A FAMILY. A FUTURE.`,

    `THANK YOU FOR YOUR SUPPORT. STOKED TO HAVE YOU WITH US.`,
  ];

  return (
    <section
      className="relative mt-8 px-6 pt-20 pb-12 mb-12 max-w-4xl mx-auto text-center space-y-10 rounded-2xl shadow-xl border border-white/10 overflow-hidden"
      style={{ backgroundColor: "#0d111700" }}
    >
      <motion.div
        className="relative z-10 p-6 text-white uppercase tracking-wide text-xl leading-relaxed font-bold"
        style={{ fontFamily: "'Staatliches', sans-serif" }}
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

        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            className={`mt-8 ${i >= 6 ? "text-3xl" : ""} ${
              i === 7 ? "text-yellow-400 font-extrabold" : ""
            }`}
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            {text.split("\n").map((line, idx) => (
              <span key={idx}>
                {line.trim()}
                <br />
              </span>
            ))}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}
