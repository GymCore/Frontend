"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
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

const plans = [
  {
    name: "Basic",
    price: "79",
    period: "miesiąc",
    description: "Idealny na start",
    features: [
      "Dostęp do siłowni 24/7",
      "Szatnia i prysznice",
      "Podstawowe maszyny",
      "Aplikacja mobilna",
      "Wstępna konsultacja",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "119",
    period: "miesiąc",
    description: "Najpopularniejszy wybór",
    features: [
      "Wszystko z Basic",
      "Zajęcia grupowe bez limitu",
      "Strefa cardio premium",
      "Analiza postępów",
      "1 sesja z trenerem/mies.",
      "Dostęp do strefy relaksu",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "199",
    period: "miesiąc",
    description: "Pełen pakiet VIP",
    features: [
      "Wszystko ze Standard",
      "Nielimitowane sesje z trenerem",
      "Sauna i strefa relaksu",
      "Plan dietetyczny",
      "Priorytetowa rezerwacja",
      "Parking gratis",
      "Ręcznik i szafka premium",
    ],
    popular: false,
  },
];

const additionalServices = [
  { name: "Jednorazowe wejście", price: "35 zł" },
  { name: "Karnet 10 wejść", price: "299 zł" },
  { name: "Sesja z trenerem (60 min)", price: "150 zł" },
  { name: "Pakiet 10 sesji z trenerem", price: "1200 zł" },
  { name: "Plan dietetyczny", price: "200 zł" },
  { name: "Wynajem szafki (miesiąc)", price: "30 zł" },
];

export default function PricingPage() {
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
                  Wybierz swój <span className={tailwindColors.textAccent}>karnet</span>
                </h1>
                <p className={`mt-6 text-lg ${tailwindColors.textSecondary}`}>
                  Elastyczne plany cenowe dopasowane do Twoich potrzeb.
                  Bez ukrytych opłat, pełna transparentność.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className={`${spacing.section} pt-8`}>
            <div className={spacing.container}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`relative p-8 rounded-2xl transition-all ${
                      plan.popular
                        ? `bg-indigo-600 text-white ${shadows.card} shadow-indigo-500/30`
                        : `${tailwindColors.bgCard} ${tailwindColors.borderDefault} border`
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1 text-xs font-semibold bg-yellow-400 text-slate-900 rounded-full flex items-center gap-1">
                          <Star size={12} />
                          NAJPOPULARNIEJSZY
                        </span>
                      </div>
                    )}

                    <h3 className={`text-xl font-bold ${plan.popular ? "text-white" : tailwindColors.textPrimary}`}>
                      {plan.name}
                    </h3>
                    <p className={`mt-1 text-sm ${plan.popular ? "text-indigo-200" : tailwindColors.textMuted}`}>
                      {plan.description}
                    </p>

                    <div className="mt-6 flex items-baseline">
                      <span className={`text-5xl font-extrabold ${plan.popular ? "text-white" : tailwindColors.textPrimary}`}>
                        {plan.price}
                      </span>
                      <span className={`ml-2 ${plan.popular ? "text-indigo-200" : tailwindColors.textMuted}`}>
                        zł/{plan.period}
                      </span>
                    </div>

                    <ul className="mt-8 space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className={`w-5 h-5 shrink-0 ${plan.popular ? "text-indigo-200" : "text-indigo-500"}`} />
                          <span className={plan.popular ? "text-indigo-100" : tailwindColors.textSecondary}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/register"
                      className={`mt-8 w-full py-3 px-6 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center ${
                        plan.popular
                          ? "bg-white text-indigo-600 hover:bg-slate-100"
                          : tailwindColors.buttonPrimary
                      }`}
                    >
                      Wybierz plan
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className={`${spacing.section} pt-8`}>
            <div className={spacing.container}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className={`${typography.h2} ${tailwindColors.textPrimary}`}>
                  Usługi <span className={tailwindColors.textAccent}>dodatkowe</span>
                </h2>
                <p className={`mt-4 ${tailwindColors.textSecondary}`}>
                  Uzupełnij swój karnet o dodatkowe usługi
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {additionalServices.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`${tailwindColors.card} ${shadows.card} p-6 flex justify-between items-center`}
                  >
                    <span className={tailwindColors.textPrimary}>{service.name}</span>
                    <span className={`font-bold ${tailwindColors.textAccent}`}>{service.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
