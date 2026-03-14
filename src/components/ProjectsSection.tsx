import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import officeImg from "@/assets/project-office.jpg";
import warehouseImg from "@/assets/project-warehouse.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import roadsImg from "@/assets/project-roads.jpg";

const projectCategories = {
  residential: [
    { image: "/residential-2.jpeg", title: "Modern Apartment Complex", category: "Residential" },
    { image: "/residential-3.jpeg", title: "Contemporary Townhouses", category: "Residential" },
    { image: "/residential-6.jpeg", title: "Eco-Friendly Residential", category: "Residential" },
    { image: "/residential-7.jpg", title: "Premium Residential Estate", category: "Residential" },
    { image: "/residential-12.jpg", title: "Mid-Rise Apartments", category: "Residential" },
    { image: "/residential-13.jpg", title: "Residential Infrastructure", category: "Residential" },
    { image: "/residential-14.jpg", title: "Modern Living Spaces", category: "Residential" },
    { image: "/residential-15.jpg", title: "Residential Excellence", category: "Residential" },
  ],
  hospitality: [
    { image: "/Hospitality-1.jpg", title: "Hospitality Project 1", category: "Hospitality Projects" },
    { image: "/Hospitality-2.jpg", title: "Hospitality Project 2", category: "Hospitality Projects" },
    { image: "/Hospitality-3.jpg", title: "Hospitality Project 3", category: "Hospitality Projects" },
    { image: "/Hospitality-4.jpg", title: "Hospitality Project 4", category: "Hospitality Projects" },
    { image: "/Hospitality-5.jpg", title: "Hospitality Project 5", category: "Hospitality Projects" },
    { image: "/Hospitality-6.jpeg", title: "Hospitality Project 6", category: "Hospitality Projects" },
    { image: "/hospitality-7.jpg", title: "Hospitality Project 7", category: "Hospitality Projects" },
    { image: "/hospitality-8.jpg", title: "Hospitality Project 8", category: "Hospitality Projects" },
  ],
  institutional: [
    { image: "/Institutional-1.jpg", title: "Institutional Project 1", category: "Institutional Projects" },
    { image: "/Institutional-2.jpg", title: "Institutional Project 2", category: "Institutional Projects" },
    { image: "/Institutional-3.jpg", title: "Institutional Project 3", category: "Institutional Projects" },
    { image: "/Institutional-4.jpg", title: "Institutional Project 4", category: "Institutional Projects" },
    { image: "/Institutional-7.webp", title: "Institutional Project 7", category: "Institutional Projects" },
    { image: "/Institutional-8.jpeg", title: "Institutional Project 8", category: "Institutional Projects" },
    { image: "/Institutional-9.jpeg", title: "Institutional Project 9", category: "Institutional Projects" },
    { image: "/Institutional-10.jpeg", title: "Institutional Project 10", category: "Institutional Projects" },
    { image: "/Institutional-11.jpeg", title: "Institutional Project 11", category: "Institutional Projects" },
    { image: "/Institutional-12.jpeg", title: "Institutional Project 12", category: "Institutional Projects" },
    { image: "/Institutional-13.jpeg", title: "Institutional Project 13", category: "Institutional Projects" },
    { image: "/institutional-14.jpeg", title: "Institutional Project 14", category: "Institutional Projects" },
  ],
  healthcare: [
    { image: "/health1-before.jpeg", title: "Healthcare Project 1 - Before", category: "Healthcare", badge: "Before" },
    { image: "/health1-after.jpeg", title: "Healthcare Project 1 - After", category: "Healthcare", badge: "After" },
    { image: "/health2.jpeg", title: "Healthcare Project 2", category: "Healthcare" },
  ],
  "civil-works": [
    { image: "/road-1.jpg", title: "Civil Works 1", category: "Civil Works" },
    { image: "/road-2.jpg", title: "Civil Works 2", category: "Civil Works" },
    { image: "/road-3.jpg", title: "Civil Works 3", category: "Civil Works" },
    { image: "/road-4.jpg", title: "Civil Works 4", category: "Civil Works" },
    { image: "/road-5.jpeg", title: "Civil Works 5", category: "Civil Works" },
    { image: "/road-6.jpeg", title: "Civil Works 6", category: "Civil Works" },
    { image: "/road-7.jpeg", title: "Civil Works 7", category: "Civil Works" },
    { image: "/road-8.jpeg", title: "Civil Works 8", category: "Civil Works" },
    { image: "/road-9-before.jpeg", title: "Civil Works 9 - Before", category: "Civil Works", badge: "Before" },
    { image: "/road-9-after.jpeg", title: "Civil Works 9 - After", category: "Civil Works", badge: "After" },
    { image: "/road-10-before.jpeg", title: "Civil Works 10 - Before", category: "Civil Works", badge: "Before" },
    { image: "/road-10-after.jpeg", title: "Civil Works 10 - After", category: "Civil Works", badge: "After" },
  ],
  "water-works": [
    { image: "/waterworks-1.jpg", title: "Water Works 1", category: "Water Works" },
    { image: "/waterworks-2.jpg", title: "Water Works 2", category: "Water Works" },
    { image: "/waterworks-3.jpg", title: "Water Works 3", category: "Water Works" },
    { image: "/waterworks-4.jpg", title: "Water Works 4", category: "Water Works" },
    { image: "/waterworks-5.jpg", title: "Water Works 5", category: "Water Works" },
  ],
  energy: [
    { image: "/energy-1.jpg", title: "Energy Project 1", category: "Energy" },
    { image: "/Energy-2.jpg", title: "Energy Project 2", category: "Energy" },
  ],
  "ict-infrastructure": [
    { image: "/ICT1.jpeg", title: "ICT Infrastructure Project 1", category: "ICT Infrastructure Works" },
    { image: "/ICT2.jpeg", title: "ICT Infrastructure Project 2", category: "ICT Infrastructure Works" },
    { image: "/ICT3.jpeg", title: "ICT Infrastructure Project 3", category: "ICT Infrastructure Works" },
    { image: "/ICT4.jpeg", title: "ICT Infrastructure Project 4", category: "ICT Infrastructure Works" },
  ],
  "interior-fitouts": [
    { image: "/interior-1.jpg", title: "Custom Wardrobes & Joinery", category: "Interior Fit Outs" },
    { image: "/interior-2.jpg", title: "Modern Kitchen Design", category: "Interior Fit Outs" },
    { image: "/interior-3.jpg", title: "Premium Kitchen Fit Out", category: "Interior Fit Outs" },
    { image: "/interior-4.jpg", title: "Contemporary Kitchen Island", category: "Interior Fit Outs" },
    { image: "/interior-5.jpg", title: "Sleek Kitchen Installation", category: "Interior Fit Outs" },
    { image: "/interior-6.jpg", title: "Luxury Kitchen & Dining", category: "Interior Fit Outs" },
    { image: "/interior-7.jpg", title: "Built-In Wardrobe Systems", category: "Interior Fit Outs" },
    { image: "/interior-8.jpg", title: "Living Room Interior", category: "Interior Fit Outs" },
    { image: "/interior-9.jpg", title: "Modern Kitchen Finishes", category: "Interior Fit Outs" },
    { image: "/interior-10.jpg", title: "Bedroom Interior Design", category: "Interior Fit Outs" },
  ],
};

import { useState } from "react";

const ProjectsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (images: string[], index: number) => {
    setModalImages(images);
    setModalIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const prev = () => setModalIndex((i) => (i - 1 + modalImages.length) % modalImages.length);
  const next = () => setModalIndex((i) => (i + 1) % modalImages.length);

  return (
    <section id="projects" className="py-12 md:py-20 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <p className="text-gold font-heading font-semibold text-xs md:text-sm tracking-widest uppercase mb-3">
            Our Portfolio
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground">
            Projects That Define Skylines
          </h2>
        </div>
        <Tabs defaultValue="residential" className="w-full">
          <TabsList className="flex overflow-x-auto w-full mb-6 md:mb-8 gap-1 md:gap-2 p-0.5 md:p-1 bg-transparent border-b border-border">
            <TabsTrigger value="residential" className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4">Residential</TabsTrigger>
            <TabsTrigger value="hospitality" className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4">Hospitality</TabsTrigger>
            <TabsTrigger value="institutional" className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4">Institutional</TabsTrigger>
            <TabsTrigger value="healthcare" className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4">Healthcare</TabsTrigger>
            <TabsTrigger value="civil-works" className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4">Civil Works</TabsTrigger>
            <TabsTrigger value="water-works" className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4">Water Works</TabsTrigger>
            <TabsTrigger value="energy" className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4">Energy</TabsTrigger>
            <TabsTrigger value="ict-infrastructure" className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4">ICT Infrastructure</TabsTrigger>
          </TabsList>
          {Object.entries(projectCategories).map(([key, projects]) => {
            const images = projects.map((p) => p.image);
            return (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5">
                  {projects.map((project, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-lg overflow-hidden aspect-[3/4] cursor-pointer"
                      onClick={() => openModal(images, idx)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/90 via-slate-dark/20 to-transparent" />
                      {project.badge && (
                        <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1.5 rounded-full">
                          {project.badge}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <button
            className="absolute left-4 bg-yellow-400 hover:bg-yellow-500 text-black text-4xl font-bold w-16 h-16 flex items-center justify-center rounded-full transition-colors"
            onClick={prev}
          >
            &#8249;
          </button>
          <img
            src={modalImages[modalIndex]}
            alt="gallery"
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute right-4 bg-yellow-400 hover:bg-yellow-500 text-black text-4xl font-bold w-16 h-16 flex items-center justify-center rounded-full transition-colors"
            onClick={next}
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
