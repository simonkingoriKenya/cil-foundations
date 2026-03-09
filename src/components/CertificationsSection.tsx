import { Award, ShieldCheck, FileCheck, Building2, BadgeCheck } from "lucide-react";

const certifications = [
  {
    icon: Building2,
    title: "NCA Registered",
    category: "National Construction Authority",
    detail: "Registered contractor under the National Construction Authority of Kenya — licensed for building and civil engineering works.",
    badge: "NCA",
  },
  {
    icon: ShieldCheck,
    title: "OSHA Compliant",
    category: "Occupational Safety",
    detail: "Full compliance with Kenya's Occupational Safety and Health Act, ensuring safe working environments on all project sites.",
    badge: "OSHA",
  },
  {
    icon: FileCheck,
    title: "ISO 9001:2015",
    category: "Quality Management",
    detail: "Quality management systems aligned with ISO 9001:2015 standards, ensuring consistent delivery of excellence across every project.",
    badge: "ISO",
  },
  {
    icon: Award,
    title: "ISO 45001:2018",
    category: "OH&S Management",
    detail: "Occupational health and safety management aligned with ISO 45001:2018 for proactive risk prevention and worker well-being.",
    badge: "OH&S",
  },
  {
    icon: BadgeCheck,
    title: "ISO 14001:2015",
    category: "Environmental Management",
    detail: "Environmental management practices aligned with ISO 14001:2015, minimizing ecological impact on all construction projects.",
    badge: "ENV",
  },
];

const CertificationsSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
          Accreditations & Standards
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
          Certified for Excellence
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our certifications and registrations reflect our commitment to quality, safety, and environmental responsibility across every project we undertake.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-primary/10 text-primary font-heading font-bold text-xs px-3 py-1 rounded-full">
              {cert.badge}
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
              <cert.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground text-lg mb-1">{cert.title}</h3>
            <p className="text-primary text-sm font-medium mb-3">{cert.category}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{cert.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;