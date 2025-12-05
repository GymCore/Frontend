"use client";
import React from "react";
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer id="kontakt" className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              GymCore
            </span>
            <p className="mt-4 text-sm text-slate-400">
              Nowoczesna siłownia dla tych, którzy chcą osiągnąć więcej. Dołącz
              do naszej społeczności już dziś.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Szybkie linki</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#oferta" className="hover:text-indigo-400 transition-colors">
                  Oferta
                </a>
              </li>
              <li>
                <a href="#cennik" className="hover:text-indigo-400 transition-colors">
                  Cennik
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Zajęcia grupowe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Trenerzy
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Wsparcie</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Regulamin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Polityka prywatności
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-indigo-400" />
                <span>Lublin, Narutowicza 55b</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-indigo-400" />
                <span>+48 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-indigo-400" />
                <span>kontakt@gymcore.pl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} GymCore. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
