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
  <section id="services" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
          What We Do
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground">
          Comprehensive Construction Services
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="group bg-card rounded-lg p-8 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
