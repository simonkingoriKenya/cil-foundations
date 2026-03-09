import { Building2, HardHat, Droplets, Truck, Landmark, Home } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "High-Rise Construction",
    description: "Modern office blocks, banks, and commercial centres built with structural integrity and architectural excellence.",
  },
  {
    icon: Home,
    title: "Residential Estates",
    description: "Five-star estates and executive bungalows that redefine luxury living across East Africa.",
  },
  {
    icon: Landmark,
    title: "Institutional Buildings",
    description: "Universities, auditoriums, hotels, and public facilities designed for lasting impact.",
  },
  {
    icon: HardHat,
    title: "Industrial Warehousing",
    description: "Massive industrial warehouses engineered for efficiency, safety, and scale.",
  },
  {
    icon: Truck,
    title: "Roads & Infrastructure",
    description: "Road construction, equipment installations, and heavy civil engineering across diverse terrains.",
  },
  {
    icon: Droplets,
    title: "Water & Drainage",
    description: "Water reticulation, sewerage treatment, and storm water drainage systems for communities.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-32 bg-gradient-to-b from-background to-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <p className="text-gold font-heading font-semibold text-sm tracking-widest uppercase mb-4">
          What We Do
        </p>
        <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">
          Comprehensive Construction Solutions
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
          From concept to completion, we deliver excellence across all construction disciplines
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="group relative bg-white border-2 border-slate-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
          >
            {/* Card Content */}
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:bg-primary/90 transition-all duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-700 text-base leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
