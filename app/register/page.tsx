"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import {
  gradients,
  tailwindColors,
  shadows,
  animations,
} from "@/app/styles/colors";

export default function RegisterPage() {
  return (
    <div className={`relative min-h-screen ${gradients.hero}`}>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className={`absolute inset-0 ${gradients.overlay}`} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10 text-sm text-slate-300">
          <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors">
            <span className={`font-semibold text-lg ${gradients.logo}`}>GymCore</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-slate-400 hidden sm:inline">Masz konto?</span>
            <Link
              href="#"
              className="px-4 py-2 rounded-lg border border-slate-700 text-slate-200 hover:border-indigo-400 hover:text-white transition-all"
            >
              Zaloguj się
            </Link>
          </div>
        </div>

        <motion.div
          initial={animations.fadeInUp.initial}
          animate={animations.fadeInUp.animate}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4 text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Załóż konto w GymCore
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Wpisz swoje dane, by aktywować dostęp i zacząć korzystać z aplikacji i wejścia na siłownię.
            </p>
          </div>

          <div className={`${tailwindColors.card} ${shadows.card} p-8 backdrop-blur`}>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="space-y-2">
                  <span className="text-sm text-slate-200">Imię</span>
                  <input
                    type="text"
                    placeholder="Jan"
                    className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-slate-200">Nazwisko</span>
                  <input
                    type="text"
                    placeholder="Kowalski"
                    className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm text-slate-200">E-mail</span>
                <input
                  type="email"
                  placeholder="jan@przyklad.pl"
                  className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </label>

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="space-y-2">
                  <span className="text-sm text-slate-200">Hasło</span>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-slate-200">Powtórz hasło</span>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>
              </div>

              <label className="flex items-start gap-3 text-sm text-slate-300">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900/60 text-indigo-500 focus:ring-indigo-500"
                />
                <span>
                  Akceptuję regulamin oraz politykę prywatności i chcę otrzymywać
                  wiadomości o nowościach GymCore.
                </span>
              </label>

              <button
                type="submit"
                className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.01] ${tailwindColors.buttonPrimary} ${shadows.button}`}
              >
                Załóż konto
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="mt-6 border-t border-slate-800 pt-4 space-y-3">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Check size={16} className="text-green-400" />
                <span>14 dni testów bez opłat</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Check size={16} className="text-green-400" />
                <span>Rezerwacje i dostęp w aplikacji mobilnej</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
