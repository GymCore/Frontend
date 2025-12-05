"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { gradients, tailwindColors } from "@/app/styles/colors";

const navLinks = [
  { label: "Oferta", href: "#oferta" },
  { label: "Dlaczego My", href: "#dlaczego" },
  { label: "Cennik", href: "#cennik" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md ${tailwindColors.borderDefault} border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className={`text-2xl font-bold ${gradients.logo}`}>
              GymCore
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${tailwindColors.textSecondary} hover:text-indigo-400 transition-colors text-sm font-medium`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
              Zaloguj się
            </button>
            <button className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${tailwindColors.buttonPrimary}`}>
              Rejestracja
            </button>
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
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block py-2 ${tailwindColors.textSecondary} hover:text-indigo-400 transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className={`pt-4 space-y-2 ${tailwindColors.borderDefault} border-t`}>
                <button className={`w-full px-4 py-2 text-sm font-medium text-indigo-400 border border-indigo-400 rounded-lg hover:bg-indigo-400/10 transition-colors`}>
                  Zaloguj się
                </button>
                <button className={`w-full px-4 py-2 text-sm font-medium rounded-lg ${tailwindColors.buttonPrimary}`}>
                  Rejestracja
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
