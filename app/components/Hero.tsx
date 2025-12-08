"use client";
import React from "react";
import { motion } from "framer-motion";
import { gradients, tailwindColors, animations, shadows } from "@/app/styles/colors";

const Hero: React.FC = () => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${gradients.hero}`}>
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
      </div>
    </section>
  );
};

export default Hero;
