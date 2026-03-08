import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandLogosBar from "@/components/BrandLogosBar";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandLogosBar />
      <MarqueeStrip />
      <AboutSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
