import { ChevronDown, ChevronUp, X, Maximize2 } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const consultancyServices = [
  {
    id: 1,
    title: "Investment Planning, Value Engineering & Project Financing",
    description: "We provide comprehensive financial planning and feasibility analysis to ensure your projects are economically viable and optimally structured. Our expert team guides you through financing options, cost-benefit analysis, and project conceptualization.",
    subServices: [
      "Property valuation",
      "Prefeasibility Studies",
      "Mortgage and off-plan sales support",
      "Feasibility Studies",
      "Financing submittals",
      "Cost-Benefit Analysis",
      "Project Finance Planning, Advisory & support",
      "Project Concept Notes",
    ],
    gradient: "from-blue-500/10 to-blue-600/5",
    accentColor: "text-blue-600",
    borderColor: "border-blue-200 hover:border-blue-400",
  },
  {
    id: 2,
    title: "Regional & Local Land Use Planning",
    description: "Strategic land planning that aligns with regional development and local regulations is crucial for project success. We conduct thorough assessments and facilitate land acquisition and master planning for optimal site utilization.",
    subServices: [
      "Land use mapping & site selection",
      "Property Amalgamation",
      "Land search & verification",
      "Seeking of approvals for land use",
      "Regional, Urban, Estate & Campus Master Plans",
      "Land negotiations & acquisition",
      "Site evaluation and suitability analysis",
      "Market surveys & Analysis",
    ],
    gradient: "from-emerald-500/10 to-emerald-600/5",
    accentColor: "text-emerald-600",
    borderColor: "border-emerald-200 hover:border-emerald-400",
  },
  {
    id: 3,
    title: "Design & Construction Supervision",
    description: "From initial design through final construction, we provide full-spectrum management ensuring quality, compliance, and timely delivery. Our professionals coordinate all stakeholders and oversee technical excellence at every phase.",
    subServices: [
      "Project Programming",
      "3D Modelling and visualization",
      "Technical Design Drawings",
      "Contract Management",
      "Construction Project Management",
      "Coordination of all professionals involved",
      "Preparation of Engineering documents",
      "Preparation of Bills of Quantities",
    ],
    gradient: "from-orange-500/10 to-orange-600/5",
    accentColor: "text-orange-600",
    borderColor: "border-orange-200 hover:border-orange-400",
  },
  {
    id: 4,
    title: "Supplementary Services",
    description: "Enhanced services that add value through stakeholder engagement, post-project analysis, and investor relations support. We ensure your projects communicate their value and maintain community trust.",
    subServices: [
      "Preparation of promotional and advertisement material",
      "Post-occupancy review",
      "Public Participation and community outreach",
      "Preparation of investor profiling",
    ],
    gradient: "from-purple-500/10 to-purple-600/5",
    accentColor: "text-purple-600",
    borderColor: "border-purple-200 hover:border-purple-400",
  },
  {
    id: 5,
    title: "Materials & Appropriate Technology",
    description: "Leveraging locally available materials and modern construction techniques ensures cost-effectiveness and sustainability. We combine traditional methods with contemporary innovations for optimal project outcomes.",
    subServices: [
      "Use of locally available materials",
      "Transfer of Technology",
      "Construction Techniques (modern and vernacular)",
      "Materials Technologies (modern and traditional)",
    ],
    gradient: "from-amber-500/10 to-amber-600/5",
    accentColor: "text-amber-600",
    borderColor: "border-amber-200 hover:border-amber-400",
  },
  {
    id: 6,
    title: "Environmental, Green, Sustainable Architecture & Engineering",
    description: "Building a sustainable future requires environmental stewardship and green design principles integrated from concept stage. We design projects that minimize ecological impact while achieving excellence.",
    subServices: [
      "Solar design & implementation",
      "Sustainability analysis",
      "Global warming and construction conflict mitigation",
      "Green architecture design and accreditation",
    ],
    gradient: "from-green-500/10 to-green-600/5",
    accentColor: "text-green-600",
    borderColor: "border-green-200 hover:border-green-400",
  },
];

const ServiceCard = ({ 
  service, 
  isExpanded, 
  onToggle,
  onOpenModal,
}: { 
  service: typeof consultancyServices[0]; 
  isExpanded: boolean; 
  onToggle: () => void;
  onOpenModal: () => void;
}) => (
  <div
    className={`bg-card border-2 rounded-xl p-4 md:p-6 transition-all duration-500 transform ${
      isExpanded
        ? `bg-gradient-to-br ${service.gradient} ${service.borderColor.split(" ")[0]} shadow-2xl`
        : `${service.borderColor} shadow-md hover:shadow-lg`
    }`}
  >
    <button
      onClick={onToggle}
      className="w-full text-left flex items-start justify-between gap-3 md:gap-4 group"
    >
      <div className="flex-1 min-w-0">
        <h3
          className={`font-heading font-bold text-base md:text-lg text-foreground mb-2 transition-colors duration-300 ${
            isExpanded ? service.accentColor : "group-hover:" + service.accentColor
          }`}
        >
          {service.title}
        </h3>
        {!isExpanded && (
          <p className="text-muted-foreground text-xs md:text-sm line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
            {service.description}
          </p>
        )}
      </div>
      <div className={`shrink-0 mt-1 transition-all duration-500 ${service.accentColor}`}>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 md:w-5 md:h-5" />
        ) : (
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110" />
        )}
      </div>
    </button>

    {isExpanded && (
      <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-current border-opacity-20 space-y-3 md:space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
        <p className="text-foreground/90 leading-relaxed text-base">
          {service.description}
        </p>
        
        <div>
          <p className={`text-sm font-semibold ${service.accentColor} mb-3 uppercase tracking-wide`}>
            Sub-Services:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {service.subServices.map((sub, idx) => (
              <li 
                key={idx} 
                className="flex items-start gap-2 text-sm text-foreground/80 hover:text-foreground transition-colors duration-200 group/item"
              >
                <span className={`${service.accentColor} font-bold mt-0.5 group-hover/item:scale-125 transition-transform duration-300`}>
                  ✓
                </span>
                <span className="group-hover/item:translate-x-1 transition-transform duration-200">{sub}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onOpenModal}
          className={`w-full mt-4 py-2 px-4 rounded-lg ${service.accentColor} bg-white/10 hover:bg-white/20 border border-current border-opacity-30 hover:border-opacity-60 flex items-center justify-center gap-2 font-medium transition-all duration-300 hover:scale-105 active:scale-95 text-sm`}
        >
          <Maximize2 className="w-4 h-4" />
          Full Page View
        </button>
      </div>
    )}
  </div>
);

const ServiceModal = ({ 
  service, 
  isOpen, 
  onClose 
}: { 
  service: typeof consultancyServices[0] | null; 
  isOpen: boolean; 
  onClose: () => void;
}) => {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br ${service.gradient}`}>
        <DialogHeader>
          <DialogTitle className={`text-2xl ${service.accentColor}`}>
            {service.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 pr-4">
          <div className="space-y-4">
            <div>
              <h3 className={`text-lg font-semibold ${service.accentColor} mb-2`}>Overview</h3>
              <p className="text-foreground/80 leading-relaxed text-base">
                {service.description}
              </p>
            </div>

            <div>
              <h3 className={`text-lg font-semibold ${service.accentColor} mb-3 uppercase tracking-wide`}>
                Comprehensive Services
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {service.subServices.map((sub, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <span className={`${service.accentColor} font-bold text-lg flex-shrink-0 mt-0.5`}>
                      ✓
                    </span>
                    <span className="text-foreground/80">{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ServicesSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<typeof consultancyServices[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (service: typeof consultancyServices[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <p className="text-gold font-heading font-semibold text-xs md:text-sm tracking-widest uppercase px-4 py-2 bg-gold/10 rounded-full">
              Our Expertise
            </p>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 md:mb-6 leading-tight">
            Consultancy Services <span className="text-gold">We Offer</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed">
            Comprehensive consulting solutions across all facets of construction and development, from planning through execution and beyond.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {consultancyServices.map((service) => (
              <div
                key={service.id}
                className="transition-all duration-500"
              >
                <ServiceCard
                  service={service}
                  isExpanded={expandedId === service.id}
                  onToggle={() => setExpandedId(expandedId === service.id ? null : service.id)}
                  onOpenModal={() => handleOpenModal(service)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16 p-4 md:p-6 lg:p-8 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl text-center max-w-3xl mx-auto">
          <p className="text-foreground/80 text-xs md:text-sm lg:text-base">
            <span className="font-semibold text-foreground">💡 Tip:</span> Click any service card to explore detailed sub-services, or choose "Full Page View" for comprehensive information in an expanded modal.
          </p>
        </div>
      </div>

      <ServiceModal 
        service={selectedService} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ServicesSection;
