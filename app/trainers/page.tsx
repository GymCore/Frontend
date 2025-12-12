"use client";

import { motion } from "framer-motion";
import { Award, Star, Calendar, ArrowRight } from "lucide-react";
import {
  gradients,
  tailwindColors,
  shadows,
  animations,
  spacing,
  typography,
} from "@/app/styles/colors";
import Navbar from "@/app/globals/components/Navbar";
import Footer from "@/app/globals/components/Footer";

const trainers = [
  {
    name: "Michał Kowalski",
    role: "Trener Siłowy",
    experience: "8 lat doświadczenia",
    specializations: ["Trening siłowy", "Powerlifting", "Kulturystyka"],
    description: "Certyfikowany trener personalny z wieloletnim doświadczeniem. Specjalizuje się w budowaniu masy mięśniowej i treningu siłowym.",
    rating: 4.9,
    sessions: 1250,
  },
  {
    name: "Anna Nowak",
    role: "Trener Fitness",
    experience: "6 lat doświadczenia",
    specializations: ["Fitness", "Odchudzanie", "Trening funkcjonalny"],
    description: "Ekspertka od transformacji sylwetki. Pomaga klientom osiągać cele związane z redukcją tkanki tłuszczowej.",
    rating: 4.8,
    sessions: 980,
  },
  {
    name: "Piotr Wiśniewski",
    role: "Trener Crossfit",
    experience: "5 lat doświadczenia",
    specializations: ["Crossfit", "HIIT", "Kondycja"],
    description: "Certyfikowany trener Crossfit Level 2. Prowadzi dynamiczne treningi budujące wytrzymałość i siłę.",
    rating: 4.9,
    sessions: 850,
  },
  {
    name: "Karolina Lewandowska",
    role: "Instruktor Jogi",
    experience: "10 lat doświadczenia",
    specializations: ["Joga", "Pilates", "Stretching"],
    description: "Instruktorka jogi z certyfikatem RYT-500. Prowadzi zajęcia dla początkujących i zaawansowanych.",
    rating: 5.0,
    sessions: 1500,
  },
  {
    name: "Tomasz Zieliński",
    role: "Trener Personalny",
    experience: "7 lat doświadczenia",
    specializations: ["Trening personalny", "Rehabilitacja", "Seniorzy"],
    description: "Specjalista od treningu rehabilitacyjnego. Pracuje z osobami po kontuzjach i seniorami.",
    rating: 4.7,
    sessions: 720,
  },
  {
    name: "Marta Kamińska",
    role: "Instruktor Spinning",
    experience: "4 lata doświadczenia",
    specializations: ["Spinning", "Cardio", "Wytrzymałość"],
    description: "Energetyczna instruktorka zajęć grupowych. Prowadzi motywujące sesje spinningowe.",
    rating: 4.8,
    sessions: 650,
  },
];

export default function TrainersPage() {
  return (
    <div className={`min-h-screen flex flex-col ${tailwindColors.bgDark}`}>
      <Navbar />

      <main className={`flex-1 relative ${gradients.hero}`}>
        <div className={`absolute inset-0 ${gradients.overlay}`} />

        <div className="relative z-10">
          {/* Hero Section */}
          <div className={`${spacing.section} pt-32`}>
            <div className={spacing.container}>
              <motion.div
                initial={animations.fadeInUp.initial}
                animate={animations.fadeInUp.animate}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className={`${typography.h1} ${tailwindColors.textPrimary}`}>
                  Nasi <span className={tailwindColors.textAccent}>trenerzy</span>
                </h1>
                <p className={`mt-6 text-lg ${tailwindColors.textSecondary}`}>
                  Poznaj nasz zespół certyfikowanych trenerów personalnych.
                  Każdy z nich pomoże Ci osiągnąć Twoje cele treningowe.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Trainers Grid */}
          <div className={`${spacing.section} pt-8`}>
            <div className={spacing.container}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainers.map((trainer, index) => (
                  <motion.div
                    key={trainer.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${tailwindColors.card} ${tailwindColors.cardHover} ${shadows.card} p-6 group`}
                  >
                    {/* Avatar placeholder */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-white">
                        {trainer.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>

                    <h3 className={`text-xl font-semibold ${tailwindColors.textPrimary}`}>
                      {trainer.name}
                    </h3>
                    <p className={tailwindColors.textAccent}>{trainer.role}</p>
                    <p className={`text-sm ${tailwindColors.textMuted} mt-1`}>
                      {trainer.experience}
                    </p>

                    <p className={`${tailwindColors.textSecondary} mt-4 text-sm`}>
                      {trainer.description}
                    </p>

                    {/* Specializations */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {trainer.specializations.map((spec) => (
                        <span
                          key={spec}
                          className="px-2 py-1 text-xs rounded-full bg-indigo-600/20 text-indigo-400"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-700">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className={tailwindColors.textPrimary}>{trainer.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className={`w-4 h-4 ${tailwindColors.textMuted}`} />
                        <span className={tailwindColors.textSecondary}>{trainer.sessions} sesji</span>
                      </div>
                    </div>

                    {/* Book Button */}
                    <button
                      className={`mt-4 w-full py-2.5 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${tailwindColors.buttonPrimary} opacity-0 group-hover:opacity-100`}
                    >
                      Umów sesję
                      <ArrowRight size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`${spacing.section} pt-8`}>
            <div className={spacing.container}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${tailwindColors.card} ${shadows.card} p-8 md:p-12 text-center`}
              >
                <Award className={`w-12 h-12 ${tailwindColors.textAccent} mx-auto mb-4`} />
                <h2 className={`${typography.h2} ${tailwindColors.textPrimary} mb-4`}>
                  Chcesz dołączyć do naszego zespołu?
                </h2>
                <p className={`${tailwindColors.textSecondary} mb-8 max-w-2xl mx-auto`}>
                  Jesteś certyfikowanym trenerem personalnym i szukasz miejsca, gdzie możesz rozwijać
                  swoją karierę? Skontaktuj się z nami!
                </p>
                <a
                  href="mailto:kariera@gymcore.pl"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-[1.02] ${tailwindColors.buttonPrimary} ${shadows.button}`}
                >
                  Aplikuj teraz
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
