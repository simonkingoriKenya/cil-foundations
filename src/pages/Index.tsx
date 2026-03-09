import { Navbar, HeroSection } from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MethodologySection from "@/components/MethodologySection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SafetySection from "@/components/SafetySection";
import CertificationsSection from "@/components/CertificationsSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ScrollSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div ref={ref} className={`scroll-fade-in ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ScrollSection><AboutSection /></ScrollSection>
        <ScrollSection><ServicesSection /></ScrollSection>
        <ScrollSection><MethodologySection /></ScrollSection>
        <ScrollSection><ProjectsSection /></ScrollSection>
        <CTABanner />
        <ScrollSection><SafetySection /></ScrollSection>
        <ScrollSection><CertificationsSection /></ScrollSection>
        <ScrollSection><ClientsSection /></ScrollSection>
        <ScrollSection><TestimonialsSection /></ScrollSection>
        <ScrollSection><TeamSection /></ScrollSection>
        <ScrollSection><FAQSection /></ScrollSection>
        <ScrollSection><ContactSection /></ScrollSection>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
};

export default Index;