"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import {
  gradients,
  tailwindColors,
  shadows,
  animations,
} from "@/app/styles/colors";
import Navbar from "@/app/globals/components/Navbar";
import Footer from "@/app/globals/components/Footer";
import { signIn } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn.email({
        email,
        password,
      });

      if (result.error) {
        setError(result.error.message || "Nieprawidłowy email lub hasło");
      } else {
        router.push("/");
      }
    } catch (err) {
      setError("Wystąpił błąd podczas logowania");
    } finally {
      setLoading(false);
    }
  };

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
              <form className="space-y-5" onSubmit={handleSubmit}>
                {error && (
                  <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm">
                    {error}
                  </div>
                )}
                <label className="block space-y-2">
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full rounded-lg bg-slate-900/60 border border-slate-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>

                <label className="flex items-center gap-3 text-sm text-slate-300">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-600 bg-slate-900/60 text-indigo-500 focus:ring-indigo-500"
                  />
                  <span>Zapamiętaj mnie</span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed ${tailwindColors.buttonPrimary} ${shadows.button}`}
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Logowanie...
                    </>
                  ) : (
                    <>
                      Zaloguj się
                      <ArrowRight size={18} />
                    </>
                  )}
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
