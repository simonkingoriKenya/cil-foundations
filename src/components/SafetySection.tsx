import { ShieldCheck, HardHat, HeartPulse, AlertTriangle, CheckCircle2 } from "lucide-react";

const safetyStats = [
  { icon: ShieldCheck, value: "Zero", label: "Target Incident Rate", desc: "Our goal on every project" },
  { icon: HardHat, value: "100%", label: "PPE Compliance", desc: "Mandatory across all sites" },
  { icon: HeartPulse, value: "Weekly", label: "Safety Audits", desc: "Regular site inspections" },
  { icon: AlertTriangle, value: "24/7", label: "Emergency Response", desc: "On-site first aid teams" },
];

const commitments = [
  "Comprehensive site safety inductions for all workers and visitors",
  "Full personal protective equipment (PPE) provision and enforcement",
  "Regular toolbox talks and safety training programmes",
  "Compliance with OSHA Kenya and international safety standards",
  "Environmental impact assessments on all projects",
  "Incident reporting and root cause analysis protocols",
];

const SafetySection = () => (
  <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <p className="text-gold font-heading font-semibold text-xs md:text-sm tracking-widest uppercase mb-3">
          Health, Safety & Environment
        </p>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 md:mb-4">
          Safety Is Non-Negotiable
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          We believe every worker deserves to go home safe. Our HSE framework is embedded in every phase of construction — from planning through handover.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {safetyStats.map((s) => (
          <div
            key={s.label}
            className="bg-card border border-border rounded-xl p-7 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <p className="font-heading font-bold text-2xl text-foreground mb-1">{s.value}</p>
            <p className="font-heading font-semibold text-sm text-foreground mb-1">{s.label}</p>
            <p className="text-muted-foreground text-xs">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
            Our Safety Commitments
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            CIL Contractors maintains a rigorous Health, Safety & Environment (HSE) management system aligned with Kenyan occupational safety legislation and international best practices.
          </p>
          <ul className="space-y-3">
            {commitments.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-4" />
          <h4 className="font-heading font-bold text-xl text-foreground mb-2">Safety First Culture</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Every project begins with a comprehensive safety plan. Every worker is trained, equipped, and empowered to stop work if conditions are unsafe. No exceptions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SafetySection;