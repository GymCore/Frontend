"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import {
  gradients,
  tailwindColors,
  shadows,
  animations,
} from "@/app/styles/colors";
import Navbar from "../globals/components/Navbar";
import Footer from "../globals/components/Footer";
import { signUp } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Hasła nie są identyczne");
      return;
    }

    if (!acceptTerms) {
      setError("Musisz zaakceptować regulamin");
      return;
    }

    setLoading(true);

    try {
      const result = await signUp.email({
        email,
        password,
        name: `${firstName} ${lastName}`,
        callbackURL: "/",
      });

      if (result.error) {
        setError(result.error.message || "Błąd rejestracji");
      } else {
        router.push("/");
      }
    } catch (err) {
      setError("Wystąpił błąd podczas rejestracji");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${tailwindColors.bgDark}`}>
      <Navbar />

      <main className={`flex-1 relative ${gradients.hero}`}>
        <div className={`absolute inset-0 ${gradients.overlay}`} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-28">

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
            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && (
                <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm">
                  {error}
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="space-y-2">
                  <span className="text-sm text-slate-200">Imię</span>
                  <input
                    type="text"
                    placeholder="Jan"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-slate-200">Nazwisko</span>
                  <input
                    type="text"
                    placeholder="Kowalski"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm text-slate-200">E-mail</span>
                <input
                  type="email"
                  placeholder="jan@przyklad.pl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </label>

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="space-y-2">
                  <span className="text-sm text-slate-200">Hasło</span>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-slate-200">Powtórz hasło</span>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>
              </div>

              <label className="flex items-start gap-3 text-sm text-slate-300">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900/60 text-indigo-500 focus:ring-indigo-500"
                />
                <span>
                  Akceptuję regulamin oraz politykę prywatności i chcę otrzymywać
                  wiadomości o nowościach GymCore.
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed ${tailwindColors.buttonPrimary} ${shadows.button}`}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Rejestracja...
                  </>
                ) : (
                  <>
                    Załóż konto
                    <ArrowRight size={18} />
                  </>
                )}
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
      </main>

      <Footer />
    </div>
  );
}
