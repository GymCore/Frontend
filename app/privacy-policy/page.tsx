"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database, UserCheck, Mail } from "lucide-react";
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
    icon: Database,
    title: "1. Jakie dane zbieramy",
    content: `Zbieramy następujące kategorie danych osobowych:
    
• Dane identyfikacyjne: imię, nazwisko, adres e-mail, numer telefonu
• Dane konta: login, zaszyfrowane hasło, preferencje użytkownika
• Dane dotyczące płatności: historia transakcji (nie przechowujemy pełnych danych karty)
• Dane o aktywności: historia wejść, rezerwacje zajęć, postępy treningowe
• Dane techniczne: adres IP, typ urządzenia, przeglądarka`,
  },
  {
    icon: Eye,
    title: "2. W jakim celu przetwarzamy dane",
    content: `Twoje dane wykorzystujemy do:
    
• Świadczenia usług siłowni i zarządzania Twoim członkostwem
• Przetwarzania płatności i wystawiania faktur
• Komunikacji dotyczącej Twojego konta i usług
• Personalizacji doświadczenia użytkownika
• Zapewnienia bezpieczeństwa w obiekcie
• Wysyłania informacji marketingowych (za Twoją zgodą)`,
  },
  {
    icon: Lock,
    title: "3. Bezpieczeństwo danych",
    content: `Stosujemy najwyższe standardy bezpieczeństwa:
    
• Szyfrowanie danych w spoczynku i podczas transmisji (SSL/TLS)
• Regularne audyty bezpieczeństwa i testy penetracyjne
• Ograniczony dostęp do danych tylko dla upoważnionych pracowników
• Kopie zapasowe i plany ciągłości działania
• Zgodność z RODO i najlepszymi praktykami branżowymi`,
  },
  {
    icon: UserCheck,
    title: "4. Twoje prawa",
    content: `Jako osoba, której dane dotyczą, masz prawo do:
    
• Dostępu do swoich danych osobowych
• Sprostowania nieprawidłowych danych
• Usunięcia danych ("prawo do bycia zapomnianym")
• Ograniczenia przetwarzania
• Przenoszenia danych
• Wniesienia sprzeciwu wobec przetwarzania
• Cofnięcia zgody w dowolnym momencie`,
  },
  {
    icon: Shield,
    title: "5. Udostępnianie danych",
    content: `Twoje dane mogą być udostępniane:
    
• Operatorom płatności w celu realizacji transakcji
• Dostawcom usług IT (hosting, wsparcie techniczne)
• Organom państwowym, gdy wymagają tego przepisy prawa
• Trenerom personalnym w zakresie niezbędnym do świadczenia usług

Nigdy nie sprzedajemy Twoich danych osobom trzecim.`,
  },
  {
    icon: Mail,
    title: "6. Kontakt w sprawie danych",
    content: `W sprawach dotyczących ochrony danych osobowych możesz się skontaktować:
    
• E-mail: privacy@gymcore.pl
• Adres: GymCore Sp. z o.o., ul. Narutowicza 55b, 20-016 Lublin
• Inspektor Ochrony Danych: iod@gymcore.pl

Odpowiadamy na wszystkie zapytania w ciągu 30 dni.`,
  },
];

export default function PrivacyPolicyPage() {
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
                  <Shield className={`w-8 h-8 ${tailwindColors.textAccent}`} />
                </div>
                <h1 className={`${typography.h1} ${tailwindColors.textPrimary}`}>
                  Polityka <span className={tailwindColors.textAccent}>prywatności</span>
                </h1>
                <p className={`mt-6 text-lg ${tailwindColors.textSecondary}`}>
                  Dbamy o Twoją prywatność. Dowiedz się, jak zbieramy, przechowujemy
                  i chronimy Twoje dane osobowe.
                </p>
                <p className={`mt-4 text-sm ${tailwindColors.textMuted}`}>
                  Ostatnia aktualizacja: 12 grudnia 2025
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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
