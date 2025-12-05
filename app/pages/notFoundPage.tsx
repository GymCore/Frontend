"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Dumbbell } from "lucide-react";
import { gradients, tailwindColors, animations, typography } from "@/app/styles/colors";
import Navbar from "@/app/components/Navbar";

const NotFoundPage: React.FC = () => {
  return (
    <div className={`min-h-screen ${tailwindColors.bgDark}`}>
      <Navbar />

      <main className={`min-h-screen flex items-center justify-center ${gradients.hero}`}>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={animations.fadeInUp.initial}
            animate={animations.fadeInUp.animate}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Dumbbell className="w-24 h-24 text-indigo-500 opacity-20" />
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Dumbbell className="w-16 h-16 text-indigo-400" />
                </motion.div>
              </div>
            </div>

            <h1 className={`text-8xl sm:text-9xl font-extrabold ${gradients.text} mb-4`}>
              404
            </h1>
            
            <h2 className={`${typography.h2} ${tailwindColors.textPrimary} mb-4`}>
              Ups! Ta strona poszła na trening
            </h2>
            
            <p className={`text-lg ${tailwindColors.textSecondary} max-w-md mx-auto mb-10`}>
              Nie możemy znaleźć strony, której szukasz. Może została przeniesiona lub nie istnieje.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/"
              className={`flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-xl transition-all hover:scale-105 ${tailwindColors.buttonPrimary} shadow-lg shadow-indigo-500/25`}
            >
              <Home className="w-5 h-5" />
              Strona główna
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white border-2 border-white/20 hover:border-white/40 rounded-xl backdrop-blur transition-all hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              Wróć
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <p className={`text-sm ${tailwindColors.textMuted}`}>
              Potrzebujesz pomocy? <Link href="/kontakt" className="text-indigo-400 hover:text-indigo-300 underline">Skontaktuj się z nami</Link>
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
