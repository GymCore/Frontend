import Navbar from "./globals/components/Navbar";
import Hero from "./globals/components/Hero";
import Features from "./globals/components/Features";
import Pricing from "./globals/components/Pricing";
import Stats from "./globals/components/Stats";
import Footer from "./globals/components/Footer";
import { tailwindColors } from "./styles/colors";

export default function Home() {
  return (
    <main className={`min-h-screen ${tailwindColors.bgDark}`}>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Stats />
      <Footer />
    </main>
  );
}
