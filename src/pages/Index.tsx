import { Navbar, HeroSection } from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MethodologySection from "@/components/MethodologySection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MethodologySection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
