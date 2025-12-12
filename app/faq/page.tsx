"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
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

const faqCategories = [
  {
    category: "Członkostwo",
    questions: [
      {
        question: "Jak mogę zapisać się do GymCore?",
        answer: "Możesz zapisać się online przez naszą stronę internetową, klikając przycisk 'Rejestracja', lub odwiedzić nas osobiście w recepcji. Potrzebujesz tylko dokumentu tożsamości i karty płatniczej.",
      },
      {
        question: "Czy mogę zawiesić członkostwo?",
        answer: "Tak, oferujemy możliwość zawieszenia członkostwa na okres od 1 do 3 miesięcy w roku. Zawieszenie jest bezpłatne i można je aktywować przez aplikację lub w recepcji.",
      },
      {
        question: "Jak mogę zrezygnować z członkostwa?",
        answer: "Rezygnację można złożyć z 30-dniowym wyprzedzeniem przez aplikację, e-mailem lub osobiście w recepcji. Zwrócimy proporcjonalną część niewykorzystanej opłaty.",
      },
      {
        question: "Czy mogę zmienić plan członkostwa?",
        answer: "Tak, możesz zmienić plan w dowolnym momencie. Zmiana na wyższy plan jest natychmiastowa, a na niższy - od następnego okresu rozliczeniowego.",
      },
    ],
  },
  {
    category: "Treningi i zajęcia",
    questions: [
      {
        question: "Jak zapisać się na zajęcia grupowe?",
        answer: "Rezerwacji zajęć dokonujesz przez naszą aplikację mobilną lub stronę internetową. Możesz zarezerwować miejsce do 7 dni przed zajęciami. Pamiętaj o anulowaniu rezerwacji jeśli nie możesz przyjść.",
      },
      {
        question: "Czy oferujecie treningi personalne?",
        answer: "Tak! Mamy zespół certyfikowanych trenerów personalnych. Pierwsza konsultacja jest bezpłatna dla nowych członków. Sesje można kupować pojedynczo lub w pakietach.",
      },
      {
        question: "Jakie zajęcia grupowe oferujecie?",
        answer: "Oferujemy szeroki wybór zajęć: joga, pilates, spinning, crossfit, zumba, body pump, stretching, TRX i wiele innych. Harmonogram zajęć dostępny jest w aplikacji.",
      },
      {
        question: "Czy mogę trenować bez doświadczenia?",
        answer: "Oczywiście! Każdy nowy członek otrzymuje bezpłatne wprowadzenie do siłowni z instruktorem, który pokaże jak bezpiecznie korzystać ze sprzętu.",
      },
    ],
  },
  {
    category: "Godziny i dostęp",
    questions: [
      {
        question: "Jakie są godziny otwarcia?",
        answer: "GymCore jest otwarty 24/7! Recepcja czynna jest od 6:00 do 22:00, ale z kartą członkowską masz dostęp o każdej porze dnia i nocy.",
      },
      {
        question: "Jak działa system wejścia?",
        answer: "Wejście odbywa się za pomocą karty członkowskiej lub aplikacji mobilnej z kodem QR. Po prostu przyłóż kartę/telefon do czytnika przy wejściu.",
      },
      {
        question: "Czy mogę przyprowadzić gościa?",
        answer: "Tak, członkowie planów Standard i Premium mogą przyprowadzić gościa. Goście płacą jednorazową opłatę 35 zł lub możesz wykupić karnet gościa.",
      },
    ],
  },
  {
    category: "Płatności",
    questions: [
      {
        question: "Jakie formy płatności akceptujecie?",
        answer: "Akceptujemy karty płatnicze (Visa, Mastercard), przelewy bankowe, BLIK oraz płatności mobilne. Miesięczne opłaty pobierane są automatycznie.",
      },
      {
        question: "Czy oferujecie zniżki?",
        answer: "Tak! Oferujemy zniżki dla studentów (15%), seniorów (10%), oraz przy płatności rocznej z góry (2 miesiące gratis). Sprawdź aktualne promocje na stronie.",
      },
      {
        question: "Co jeśli płatność się nie powiedzie?",
        answer: "W przypadku nieudanej płatności system ponowi próbę po 3 dniach. Jeśli problem będzie się powtarzał, skontaktujemy się z Tobą. Dostęp zostanie zawieszony po 7 dniach braku płatności.",
      },
    ],
  },
  {
    category: "Udogodnienia",
    questions: [
      {
        question: "Czy macie szatnie i prysznice?",
        answer: "Tak, dysponujemy nowoczesnymi szatniami z prywatnymi prysznicami, sauną (plan Premium), suszarkami i zamykanymi szafkami.",
      },
      {
        question: "Czy jest parking?",
        answer: "Tak, mamy bezpłatny parking dla członków na 50 miejsc. Członkowie Premium mają gwarantowane miejsce parkingowe.",
      },
      {
        question: "Czy mogę zostawić rzeczy w szafce na stałe?",
        answer: "Oferujemy wynajem szafek na miesiąc (30 zł) lub w ramach planu Premium. Szafki jednorazowe są bezpłatne - używasz swojej kłódki lub wypożyczasz od nas.",
      },
    ],
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${tailwindColors.borderDefault} border-b`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:text-indigo-400 transition-colors"
      >
        <span className={`font-medium ${tailwindColors.textPrimary}`}>
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 ${tailwindColors.textMuted} transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className={`pb-5 ${tailwindColors.textSecondary}`}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].category);

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
                <div className="w-16 h-16 rounded-full bg-indigo-600/20 flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className={`w-8 h-8 ${tailwindColors.textAccent}`} />
                </div>
                <h1 className={`${typography.h1} ${tailwindColors.textPrimary}`}>
                  Często zadawane <span className={tailwindColors.textAccent}>pytania</span>
                </h1>
                <p className={`mt-6 text-lg ${tailwindColors.textSecondary}`}>
                  Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące
                  członkostwa, treningów i naszych usług.
                </p>
              </motion.div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className={`${spacing.section} pt-8`}>
            <div className={`${spacing.container} max-w-4xl`}>
              {/* Category Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-2 mb-8 justify-center"
              >
                {faqCategories.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => setActiveCategory(cat.category)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      activeCategory === cat.category
                        ? `${tailwindColors.buttonPrimary}`
                        : `${tailwindColors.bgCard} ${tailwindColors.textSecondary} hover:text-white`
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </motion.div>

              {/* FAQ Items */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`${tailwindColors.card} ${shadows.card} p-6 md:p-8`}
              >
                {faqCategories
                  .find((cat) => cat.category === activeCategory)
                  ?.questions.map((item, index) => (
                    <FaqItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${tailwindColors.card} ${shadows.card} p-6 md:p-8 mt-8 text-center`}
              >
                <h3 className={`text-xl font-semibold ${tailwindColors.textPrimary} mb-2`}>
                  Nie znalazłeś odpowiedzi?
                </h3>
                <p className={`${tailwindColors.textSecondary} mb-4`}>
                  Skontaktuj się z nami, chętnie pomożemy!
                </p>
                <a
                  href="mailto:kontakt@gymcore.pl"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-[1.02] ${tailwindColors.buttonPrimary} ${shadows.button}`}
                >
                  Napisz do nas
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
