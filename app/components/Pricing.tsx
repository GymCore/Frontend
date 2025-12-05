"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "79",
    period: "miesiąc",
    features: [
      "Dostęp do siłowni 24/7",
      "Szatnia i prysznice",
      "Podstawowe maszyny",
      "Aplikacja mobilna",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "119",
    period: "miesiąc",
    features: [
      "Wszystko z Basic",
      "Zajęcia grupowe",
      "Strefa cardio premium",
      "Analiza postępów",
      "1 sesja z trenerem/mies.",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "199",
    period: "miesiąc",
    features: [
      "Wszystko ze Standard",
      "Nielimitowane sesje z trenerem",
      "Sauna i strefa relaksu",
      "Plan dietetyczny",
      "Priorytetowa rezerwacja",
      "Parking gratis",
    ],
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="cennik" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Wybierz swój <span className="text-indigo-600">karnet</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Elastyczne plany dopasowane do Twoich potrzeb
          </p>
        </motion.div>

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
                  ? "bg-indigo-600 text-white shadow-xl shadow-indigo-500/30"
                  : "bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-xs font-semibold bg-yellow-400 text-slate-900 rounded-full">
                    NAJPOPULARNIEJSZY
                  </span>
                </div>
              )}

              <h3
                className={`text-xl font-bold ${
                  plan.popular ? "text-white" : "text-slate-900 dark:text-white"
                }`}
              >
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline">
                <span
                  className={`text-5xl font-extrabold ${
                    plan.popular ? "text-white" : "text-slate-900 dark:text-white"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`ml-2 ${
                    plan.popular ? "text-indigo-200" : "text-slate-500"
                  }`}
                >
                  zł/{plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.popular ? "text-indigo-200" : "text-indigo-600"
                      }`}
                    />
                    <span
                      className={
                        plan.popular
                          ? "text-indigo-100"
                          : "text-slate-600 dark:text-slate-400"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 px-6 rounded-xl font-semibold transition-all hover:scale-105 ${
                  plan.popular
                    ? "bg-white text-indigo-600 hover:bg-slate-100"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                Kup teraz
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
