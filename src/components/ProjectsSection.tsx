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
    { image: "/Institutional-5.webp", title: "Institutional Project 5", category: "Institutional Projects" },
    { image: "/Institutional-6.webp", title: "Institutional Project 6", category: "Institutional Projects" },
    { image: "/Institutional-7.webp", title: "Institutional Project 7", category: "Institutional Projects" },
    { image: "/Institutional-8.jpeg", title: "Institutional Project 8", category: "Institutional Projects" },
    { image: "/Institutional-9.jpeg", title: "Institutional Project 9", category: "Institutional Projects" },
    { image: "/Institutional-10.jpeg", title: "Institutional Project 10", category: "Institutional Projects" },
    { image: "/Institutional-11.jpeg", title: "Institutional Project 11", category: "Institutional Projects" },
    { image: "/Institutional-12.jpeg", title: "Institutional Project 12", category: "Institutional Projects" },
    { image: "/Institutional-13.jpeg", title: "Institutional Project 13", category: "Institutional Projects" },
  ],
  healthcare: [
    { image: "/health1.jpeg", title: "Healthcare Project 1", category: "Healthcare" },
    { image: "/health2.jpeg", title: "Healthcare Project 2", category: "Healthcare" },
  ],
  roadworks: [
    { image: "/road-1.jpg", title: "Road Works 1", category: "Roadworks" },
    { image: "/road-2.jpg", title: "Road Works 2", category: "Roadworks" },
    { image: "/road-3.jpg", title: "Road Works 3", category: "Roadworks" },
    { image: "/road-4.jpg", title: "Road Works 4", category: "Roadworks" },
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
    <section id="projects" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Our Portfolio
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground">
            Projects That Define Skylines
          </h2>
        </div>
        <Tabs defaultValue="residential" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
            <TabsTrigger value="residential">Residential</TabsTrigger>
            <TabsTrigger value="hospitality">Hospitality</TabsTrigger>
            <TabsTrigger value="institutional">Institutional</TabsTrigger>
            <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
            <TabsTrigger value="roadworks">Roadworks</TabsTrigger>
            <TabsTrigger value="water-works">Water Works</TabsTrigger>
            <TabsTrigger value="energy">Energy</TabsTrigger>
          </TabsList>
          {Object.entries(projectCategories).map(([key, projects]) => {
            const images = projects.map((p) => p.image);
            return (
              <TabsContent key={key} value={key}>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
            className="absolute left-4 text-white text-3xl"
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
            className="absolute right-4 text-white text-3xl"
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
