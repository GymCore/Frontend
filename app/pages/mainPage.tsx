import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
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
