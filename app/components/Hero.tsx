"use client";
import React from "react";
import { motion } from "framer-motion";
import { gradients, tailwindColors, animations, shadows } from "@/app/styles/colors";

const Hero: React.FC = () => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${gradients.hero}`}>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      <div className={`absolute inset-0 ${gradients.overlay}`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={animations.fadeInUp.initial}
          animate={animations.fadeInUp.animate}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold ${tailwindColors.textPrimary} leading-tight`}>
            Twoja siłownia.
            <br />
            <span className={gradients.text}>
              Twój progres.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={`mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto`}
        >
          Nowoczesne doświadczenie treningowe. Profesjonalny sprzęt, eksperci
          fitness i pełna kontrola nad Twoimi postępami — wszystko w jednym
          miejscu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className={`w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-xl transition-all hover:scale-105 ${tailwindColors.buttonPrimary} ${shadows.button}`}>
            Kup karnet
          </button>
          <button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 hover:border-white/40 rounded-xl backdrop-blur transition-all hover:scale-105">
            Sprawdź ofertę
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
