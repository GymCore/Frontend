import Navbar from "../globals/components/Navbar";
import Hero from "../homePage/components/Hero";
import Features from "../homePage/components/Features";
import Pricing from "../homePage/components/Pricing";
import Stats from "../homePage/components/Stats";
import Footer from "../globals/components/Footer";
import { tailwindColors } from "@/app/styles/colors";

export default function MainPage() {
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
