"use client";
import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, Users, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Nowoczesny sprzęt",
    description:
      "Najnowsze maszyny i wolne ciężary od najlepszych producentów.",
  },
  {
    icon: Users,
    title: "Trenerzy PRO",
    description:
      "Certyfikowani specjaliści, którzy pomogą Ci osiągnąć cele.",
  },
  {
    icon: Clock,
    title: "Siłownia 24/7",
    description:
      "Trenuj kiedy chcesz — jesteśmy otwarci całą dobę, 7 dni w tygodniu.",
  },
  {
    icon: TrendingUp,
    title: "Analiza progresu",
    description:
      "Śledź swoje postępy i analizuj wyniki treningów w aplikacji.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Features: React.FC = () => {
  return (
    <section id="oferta" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Dlaczego <span className="text-indigo-600">GymCore</span>?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Wszystko, czego potrzebujesz, aby osiągnąć swoje cele fitness
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
