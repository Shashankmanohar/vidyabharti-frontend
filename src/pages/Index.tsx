import { Header } from "@/components/layout/Header";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { AcademicsSection } from "@/components/sections/AcademicsSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { AdmissionsSection } from "@/components/sections/AdmissionsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroCarousel />
      <TrustStrip />
      <AboutSection />
      <AcademicsSection />
      <FacilitiesSection />
      <AdmissionsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
