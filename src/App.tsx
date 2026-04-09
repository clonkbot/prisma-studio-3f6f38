import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black min-h-screen" style={{ color: "#E1E0CC" }}>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
