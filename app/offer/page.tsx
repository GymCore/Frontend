"use client";

import { motion } from "framer-motion";
import { Dumbbell, Users, Clock, Zap, Heart, Target, Flame, Trophy } from "lucide-react";
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

const offers = [
  {
    icon: Dumbbell,
    title: "Strefa wolnych ciężarów",
    description: "Profesjonalne hantle, sztangi i ławeczki dla zaawansowanych treningów siłowych.",
  },
  {
    icon: Zap,
    title: "Strefa cardio",
    description: "Nowoczesne bieżnie, orbitreki i rowery stacjonarne z systemem multimedialnym.",
  },
  {
    icon: Users,
    title: "Zajęcia grupowe",
    description: "Fitness, joga, spinning, crossfit i wiele innych zajęć z doświadczonymi instruktorami.",
  },
  {
    icon: Heart,
    title: "Strefa relaksu",
    description: "Sauna, jacuzzi i strefa masażu dla regeneracji po intensywnym treningu.",
  },
  {
    icon: Target,
    title: "Trening personalny",
    description: "Indywidualne sesje z certyfikowanymi trenerami personalnymi.",
  },
  {
    icon: Clock,
    title: "Dostęp 24/7",
    description: "Trenuj kiedy chcesz - siłownia dostępna całą dobę, 7 dni w tygodniu.",
  },
  {
    icon: Flame,
    title: "Crossfit zone",
    description: "Specjalna strefa do treningu funkcjonalnego i crossfit z pełnym wyposażeniem.",
  },
  {
    icon: Trophy,
    title: "Programy treningowe",
    description: "Gotowe programy treningowe dostosowane do Twoich celów i poziomu zaawansowania.",
  },
];

export default function OfferPage() {
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
                  Nasza <span className={tailwindColors.textAccent}>oferta</span>
                </h1>
                <p className={`mt-6 text-lg ${tailwindColors.textSecondary}`}>
                  Odkryj pełną gamę usług i udogodnień, które oferujemy naszym członkom.
                  Wszystko czego potrzebujesz do osiągnięcia swoich celów fitness.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Offers Grid */}
          <div className={`${spacing.section} pt-8`}>
            <div className={spacing.container}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {offers.map((offer, index) => (
                  <motion.div
                    key={offer.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${tailwindColors.card} ${tailwindColors.cardHover} ${shadows.card} p-6`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-indigo-600/20 flex items-center justify-center mb-4">
                      <offer.icon className={`w-6 h-6 ${tailwindColors.textAccent}`} />
                    </div>
                    <h3 className={`text-lg font-semibold ${tailwindColors.textPrimary} mb-2`}>
                      {offer.title}
                    </h3>
                    <p className={tailwindColors.textSecondary}>
                      {offer.description}
                    </p>
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
                <h2 className={`${typography.h2} ${tailwindColors.textPrimary} mb-4`}>
                  Gotowy na transformację?
                </h2>
                <p className={`${tailwindColors.textSecondary} mb-8 max-w-2xl mx-auto`}>
                  Dołącz do GymCore już dziś i zacznij swoją podróż do lepszej wersji siebie.
                  Pierwszy trening gratis!
                </p>
                <a
                  href="/register"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-[1.02] ${tailwindColors.buttonPrimary} ${shadows.button}`}
                >
                  Zacznij teraz
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
