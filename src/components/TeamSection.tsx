import { Linkedin, Mail, Award } from "lucide-react";

const team = [
  {
    name: "George Kingori",
    role: "Project Manager",
    bio: "Leads project delivery end-to-end, ensuring timelines, budgets, and quality benchmarks are met across all active sites.",
    initials: "GK",
  },
  {
    name: "Tirus Kagiri",
    role: "Operations Manager",
    bio: "Oversees day-to-day site operations, coordinating teams and resources to maintain seamless project execution across East Africa.",
    initials: "TK",
  },
  {
    name: "Ndiba",
    role: "Finance & Procurement Manager",
    bio: "Manages financial planning, cost control, and strategic procurement to ensure projects are delivered within budget without compromising quality.",
    initials: "ND",
  },
  {
    name: "Ms. Sandy",
    role: "Engineering Lead",
    bio: "Drives technical excellence across all engineering disciplines, from structural design to on-site quality assurance and compliance.",
    initials: "SA",
  },
  {
    name: "Mokeira",
    role: "Administration & Logistics Manager",
    bio: "Coordinates administrative functions and logistics, ensuring smooth supply chains and office operations that support every project.",
    initials: "MO",
  },
];

const TeamSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-gold font-heading font-semibold text-sm tracking-widest uppercase mb-3">
          Our Leadership
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
          The People Behind the Projects
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Experienced professionals committed to building East Africa's future with integrity and excellence.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {team.map((member) => (
          <div
            key={member.name}
            className="group bg-card border border-border rounded-xl p-7 text-center hover:border-primary/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-18 h-18 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-5 group-hover:border-primary/60 transition-colors">
              <span className="font-heading font-bold text-primary text-lg">
                {member.initials}
              </span>
            </div>

            <h3 className="font-heading font-bold text-foreground text-lg mb-1">
              {member.name}
            </h3>
            <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>

      {/* Award Recognition */}
      <div className="mt-20 flex flex-col md:flex-row items-center gap-8 bg-card border border-border rounded-xl p-8">
        <img
          src="/award.jpeg"
          alt="Bamburi Cement Certificate of Appreciation awarded to CIL Contractors Ltd for Exceptional Retail Performance - Nairobi North 2021"
          className="w-64 rounded-lg shadow-lg"
        />
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-5 h-5 text-primary" />
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase">
              Recognition
            </p>
          </div>
          <h3 className="font-heading font-bold text-foreground text-2xl mb-3">
            Certificate of Appreciation — Bamburi Cement
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            CIL Contractors Ltd was recognized by Bamburi Cement (a member of Holcim) for
            <strong className="text-foreground"> Exceptional Retail Performance — Nairobi North (2021)</strong>,
            a testament to the company's commitment to quality materials and trusted industry partnerships.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
