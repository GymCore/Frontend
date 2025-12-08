"use client";
import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { tailwindColors } from "@/app/styles/colors";

const Footer: React.FC = () => {
  return (
    <footer id="kontakt" className={`${tailwindColors.bgDark} text-slate-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              GymCore
            </Link>
            <p className={`mt-4 text-sm ${tailwindColors.textSecondary}`}>
              Nowoczesna siłownia dla tych, którzy chcą osiągnąć więcej. Dołącz
              do naszej społeczności już dziś.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 ${tailwindColors.bgCard} rounded-lg hover:bg-indigo-600 transition-colors`}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 ${tailwindColors.bgCard} rounded-lg hover:bg-indigo-600 transition-colors`}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 ${tailwindColors.bgCard} rounded-lg hover:bg-indigo-600 transition-colors`}
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className={`font-semibold ${tailwindColors.textPrimary} mb-4`}>Szybkie linki</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/offer" className="hover:text-indigo-400 transition-colors">
                  Oferta
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-indigo-400 transition-colors">
                  Cennik
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="hover:text-indigo-400 transition-colors">
                  Trenerzy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold ${tailwindColors.textPrimary} mb-4`}>Wsparcie</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/faq" className="hover:text-indigo-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-indigo-400 transition-colors">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-indigo-400 transition-colors">
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold ${tailwindColors.textPrimary} mb-4`}>Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={16} className={tailwindColors.textAccent} />
                <span>Lublin, Narutowicza 55b</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className={tailwindColors.textAccent} />
                <span>+48 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className={tailwindColors.textAccent} />
                <span>kontakt@gymcore.pl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`mt-12 pt-8 ${tailwindColors.borderDefault} border-t text-center text-sm ${tailwindColors.textMuted}`}>
          <p>&copy; {new Date().getFullYear()} GymCore. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
