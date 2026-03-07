import { Shield, Users, Clock, TrendingUp } from "lucide-react";

const values = [
  { icon: Shield, title: "Structural Integrity", desc: "Every project built to exceed safety and quality standards." },
  { icon: TrendingUp, title: "Value Engineering", desc: "Quality need not be expensive — smart solutions, disciplined management." },
  { icon: Users, title: "Transparency", desc: "Open communication with every stakeholder from blueprint to completion." },
  { icon: Clock, title: "24/7 Availability", desc: "Constant readiness to respond, deliver, and support at any hour." },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            About CIL Contractors
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-6">
            A Pillar of East African Infrastructure
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            CIL Contractors Ltd transforms the East African skyline through a philosophy where the best need not be expensive. From intricate foundations to soaring heights, every project is approached as a landmark.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Beyond vertical construction, we master civil engineering — managing water reticulation, sewerage treatment, storm water drainage, heavy equipment installations, and road construction across Kenya and the broader region.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {values.map((v) => (
            <div key={v.title} className="bg-card border border-border rounded-lg p-6">
              <v.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-card-foreground text-sm mb-1">{v.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
