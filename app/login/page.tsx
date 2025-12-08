"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import {
  gradients,
  tailwindColors,
  shadows,
  animations,
} from "@/app/styles/colors";
import Navbar from "@/app/globals/components/Navbar";
import Footer from "@/app/globals/components/Footer";

export default function LoginPage() {
  return (
    <div className={`min-h-screen flex flex-col ${tailwindColors.bgDark}`}>
      <Navbar />

      <main className={`flex-1 relative ${gradients.hero}`}>
        <div className={`absolute inset-0 ${gradients.overlay}`} />

        <div className="relative z-10 max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
          <motion.div
            initial={animations.fadeInUp.initial}
            animate={animations.fadeInUp.animate}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4 text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Zaloguj się do GymCore
              </h1>
              <p className="text-lg text-slate-300">
                Witaj z powrotem! Wpisz swoje dane, aby kontynuować.
              </p>
            </div>

            <div className={`${tailwindColors.card} ${shadows.card} p-8 backdrop-blur`}>
              <form className="space-y-5">
                <label className="block space-y-2">
                  <span className="text-sm text-slate-200">E-mail</span>
                  <input
                    type="email"
                    placeholder="jan@przyklad.pl"
                    className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>

                <label className="block space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-200">Hasło</span>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      Zapomniałeś hasła?
                    </Link>
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>

                <label className="flex items-center gap-3 text-sm text-slate-300">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-600 bg-slate-900/60 text-indigo-500 focus:ring-indigo-500"
                  />
                  <span>Zapamiętaj mnie</span>
                </label>

                <button
                  type="submit"
                  className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.01] ${tailwindColors.buttonPrimary} ${shadows.button}`}
                >
                  Zaloguj się
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-800 text-center">
                <p className="text-slate-400 text-sm">
                  Nie masz konta?{" "}
                  <Link
                    href="/register"
                    className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                  >
                    Zarejestruj się
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
