"use client";

import { motion } from "framer-motion";
import { FileText, AlertCircle, CreditCard, Clock, Ban, Scale } from "lucide-react";
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

const sections = [
  {
    icon: FileText,
    title: "1. Postanowienia ogólne",
    content: `Niniejszy regulamin określa zasady korzystania z usług GymCore Sp. z o.o. z siedzibą w Lublinie.

• Regulamin obowiązuje wszystkich członków klubu fitness GymCore
• Przystąpienie do klubu oznacza akceptację niniejszego regulaminu
• GymCore zastrzega sobie prawo do zmiany regulaminu z 14-dniowym wyprzedzeniem
• Aktualna wersja regulaminu dostępna jest na stronie internetowej i w recepcji`,
  },
  {
    icon: CreditCard,
    title: "2. Członkostwo i płatności",
    content: `Zasady dotyczące członkostwa i opłat:

• Członkostwo aktywowane jest po uiszczeniu pierwszej opłaty
• Płatności miesięczne pobierane są automatycznie z karty płatniczej
• Brak płatności skutkuje zawieszeniem dostępu do klubu
• Rezygnacja z członkostwa wymaga 30-dniowego wypowiedzenia
• Zwroty proporcjonalne możliwe tylko w uzasadnionych przypadkach
• Promocje i zniżki nie łączą się, o ile nie wskazano inaczej`,
  },
  {
    icon: Clock,
    title: "3. Godziny otwarcia i dostęp",
    content: `Zasady dostępu do klubu:

• Klub czynny jest 24/7 dla wszystkich posiadaczy aktywnego karnetu
• Dostęp realizowany jest poprzez kartę członkowską lub aplikację mobilną
• Karty członkowskie są imienne i nieprzenoszalne
• W przypadku zagubienia karty należy niezwłocznie zgłosić to w recepcji
• Koszt wydania duplikatu karty wynosi 20 zł
• Goście mogą korzystać z klubu wyłącznie w towarzystwie członka`,
  },
  {
    icon: AlertCircle,
    title: "4. Zasady korzystania z klubu",
    content: `Podczas korzystania z klubu należy:

• Nosić odpowiedni strój sportowy i czyste obuwie zmienne
• Odkładać sprzęt na miejsce po zakończeniu ćwiczeń
• Używać ręcznika podczas ćwiczeń na maszynach
• Dezynfekować sprzęt po użyciu
• Zachować kulturę osobistą i szanować innych członków
• Przestrzegać wskazówek personelu klubu
• Nie przeszkadzać innym w treningu`,
  },
  {
    icon: Ban,
    title: "5. Zakazy",
    content: `Na terenie klubu zabronione jest:

• Wnoszenie i spożywanie alkoholu oraz środków odurzających
• Palenie tytoniu i e-papierosów
• Prowadzenie treningów personalnych bez autoryzacji
• Nagrywanie innych osób bez ich zgody
• Pozostawianie rzeczy wartościowych w szatni (szafki niestrzeżone)
• Używanie telefonów komórkowych w strefie ćwiczeń (wyjątek: słuchanie muzyki)
• Agresywne zachowanie wobec innych członków lub personelu`,
  },
  {
    icon: Scale,
    title: "6. Odpowiedzialność",
    content: `Zasady odpowiedzialności:

• Członek korzysta z klubu na własną odpowiedzialność
• GymCore nie ponosi odpowiedzialności za rzeczy pozostawione w szatni
• Członek odpowiada za szkody wyrządzone z jego winy
• Zalecane jest wykonanie badań lekarskich przed rozpoczęciem treningów
• W przypadku kontuzji należy niezwłocznie powiadomić personel
• GymCore zapewnia ubezpieczenie OC obiektu
• Reklamacje należy zgłaszać w formie pisemnej w ciągu 14 dni`,
  },
];

export default function TermsPage() {
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
                  <FileText className={`w-8 h-8 ${tailwindColors.textAccent}`} />
                </div>
                <h1 className={`${typography.h1} ${tailwindColors.textPrimary}`}>
                  Regulamin <span className={tailwindColors.textAccent}>GymCore</span>
                </h1>
                <p className={`mt-6 text-lg ${tailwindColors.textSecondary}`}>
                  Zapoznaj się z zasadami korzystania z naszego klubu fitness.
                  Przestrzeganie regulaminu zapewnia komfort wszystkim członkom.
                </p>
                <p className={`mt-4 text-sm ${tailwindColors.textMuted}`}>
                  Wersja z dnia: 12 grudnia 2025
                </p>
              </motion.div>
            </div>
          </div>

          {/* Content Sections */}
          <div className={`${spacing.section} pt-8`}>
            <div className={`${spacing.container} max-w-4xl`}>
              <div className="space-y-6">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${tailwindColors.card} ${shadows.card} p-6 md:p-8`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center shrink-0">
                        <section.icon className={`w-5 h-5 ${tailwindColors.textAccent}`} />
                      </div>
                      <div>
                        <h2 className={`text-xl font-semibold ${tailwindColors.textPrimary} mb-4`}>
                          {section.title}
                        </h2>
                        <div className={`${tailwindColors.textSecondary} whitespace-pre-line leading-relaxed`}>
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${tailwindColors.card} ${shadows.card} p-6 md:p-8 mt-8 text-center`}
              >
                <p className={tailwindColors.textSecondary}>
                  Pytania dotyczące regulaminu? Skontaktuj się z nami: {" "}
                  <a href="mailto:kontakt@gymcore.pl" className={`${tailwindColors.textAccent} hover:underline`}>
                    kontakt@gymcore.pl
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
