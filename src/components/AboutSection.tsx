import { Shield, Users, Clock, TrendingUp, Hammer, Zap, Award, Globe, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

const values = [
  { icon: Shield, title: "Structural Integrity", desc: "Every project built to exceed safety and quality standards." },
  { icon: TrendingUp, title: "Value Engineering", desc: "Quality need not be expensive — smart solutions, disciplined management." },
  { icon: Users, title: "Transparency", desc: "Open communication with every stakeholder from blueprint to completion." },
  { icon: Clock, title: "24/7 Availability", desc: "Constant readiness to respond, deliver, and support at any hour." },
];

const AnimatedStat = ({ number, label, suffix = "" }: { number: number; label: string; suffix?: string }) => {
  const { count, ref } = useCountUp(number, 2000);
  return (
    <div
      ref={ref}
      className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-xl p-8 text-center hover:border-gold/40 transition-colors"
    >
      <p className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-2">
        {count}{suffix}
      </p>
      <p className="text-muted-foreground text-sm font-medium">{label}</p>
    </div>
  );
};

const expertise = [
  { icon: Hammer, title: "Building Construction", desc: "High-rise offices, residential estates, commercial complexes" },
  { icon: Zap, title: "Civil Engineering", desc: "Roads, water systems, drainage, infrastructure projects" },
  { icon: Award, title: "Quality Assurance", desc: "Rigorous standards & compliance across all projects" },
  { icon: Globe, title: "Regional Reach", desc: "Operations spanning Kenya and East Africa" },
];

const AboutSection = () => (
  <section id="about" className="py-32 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <p className="text-gold font-heading font-semibold text-sm tracking-widest uppercase mb-4">
          Our Story
        </p>
        <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">
          Building East Africa's Foundation
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          CIL Contractors Ltd stands as a beacon of quality, innovation, and reliability in East African construction and civil engineering.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">Who We Are</h3>
              <p className="text-muted-foreground leading-relaxed">
                CIL Contractors Ltd transforms the East African skyline through a philosophy where the best need not be expensive. From intricate foundations to soaring heights, every project is approached as a landmark — built not just to stand, but to inspire.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">Our Scope</h3>
              <p className="text-muted-foreground leading-relaxed">
                Beyond vertical construction, we master comprehensive civil engineering — managing water reticulation, sewerage treatment, storm water drainage, heavy equipment installations, and road construction across Kenya and the broader East African region.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">Our Commitment</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in delivering excellence through discipline, innovation, and unwavering commitment to our clients. Every brick, every calculation, every hour reflects our dedication to building a better East Africa.
              </p>
            </div>
            <Button size="lg" asChild className="mt-6">
              <a
                href="https://drive.google.com/uc?export=download&id=1BXq07Pdmkn1rVyV2yAfggNNPVrRlwwSz"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Download className="w-4 h-4" /> Download Company Profile
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <AnimatedStat number={500} label="Projects Completed" suffix="+" />
          <AnimatedStat number={15} label="Years of Excellence" suffix="+" />
          <AnimatedStat number={6} label="Countries Served" />
          <AnimatedStat number={100} label="Client Satisfaction" suffix="%" />
        </div>
      </div>

      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="font-heading font-bold text-3xl text-foreground">Our Core Values</h3>
          <p className="text-muted-foreground mt-3">The principles that guide every decision and every project</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-card border border-border rounded-xl p-7 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-base mb-2">{v.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted/50 rounded-2xl p-12">
        <h3 className="font-heading font-bold text-3xl text-foreground mb-12 text-center">Our Expertise</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {expertise.map((exp, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-primary/15 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <exp.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">{exp.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
