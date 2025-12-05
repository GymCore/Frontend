"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { gradients, tailwindColors } from "@/app/styles/colors";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md ${tailwindColors.borderDefault} border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="shrink-0">
            <span className={`text-2xl font-bold ${gradients.logo}`}>
              GymCore
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/logowanie" className="px-4 py-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
              Zaloguj się
            </Link>
            <Link href="/rejestracja" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${tailwindColors.buttonPrimary}`}>
              Rejestracja
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden ${tailwindColors.bgDark} ${tailwindColors.borderDefault} border-b`}
          >
            <div className="px-4 py-4 space-y-2">
              <Link href="/logowanie" className={`block w-full px-4 py-2 text-sm font-medium text-center text-indigo-400 border border-indigo-400 rounded-lg hover:bg-indigo-400/10 transition-colors`}>
                Zaloguj się
              </Link>
              <Link href="/rejestracja" className={`block w-full px-4 py-2 text-sm font-medium text-center rounded-lg ${tailwindColors.buttonPrimary}`}>
                Rejestracja
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
