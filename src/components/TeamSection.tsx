import { Linkedin, Mail, Award } from "lucide-react";

const team = [
  {
    name: "George Kingori",
    role: "Engineering Technical Lead",
    bio: "Drives technical excellence in engineering solutions, overseeing structural integrity, design compliance, and on-site technical supervision across all projects.",
    initials: "GK",
    photo: "/Georg.png",
  },
  {
    name: "Tirus Kagiri",
    role: "Operations Manager",
    bio: "Oversees day-to-day site operations, coordinating teams and resources to maintain seamless project execution across East Africa.",
    initials: "TK",
    photo: "/kagiri.jpg",
  },
  {
    name: "Ndiba",
    role: "Finance & Procurement Manager",
    bio: "Manages financial planning, cost control, and strategic procurement to ensure projects are delivered within budget without compromising quality.",
    initials: "ND",
    photo: "/Ndiba.png",
  },
  {
    name: "Ms Sandra",
    role: "Project Management",
    bio: "Leads project delivery end-to-end, ensuring timelines, budgets, and quality benchmarks are met across all active sites with precision and accountability.",
    initials: "SA",
    photo: "/Sandra.png",
  },
  {
    name: "Kevin",
    role: "ICT Consultant",
    bio: "Provides strategic ICT infrastructure solutions and digital transformation guidance, ensuring seamless technology integration across company operations.",
    initials: "KV",
    photo: "/Kevin.png",
  },
  {
    name: "Ms Mokeira",
    role: "Administration & Logistics Manager",
    bio: "Coordinates administrative functions and logistics, ensuring smooth supply chains and office operations that support every project.",
    initials: "MO",
    photo: "/Mokeira.png",
  },
];

const TeamSection = () => (
  <section className="py-12 md:py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <p className="text-gold font-heading font-semibold text-xs md:text-sm tracking-widest uppercase mb-3">
          Our Leadership
        </p>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 md:mb-4">
          The People Behind the Projects
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
          Experienced professionals committed to building East Africa's future with integrity and excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {team.map((member) => (
          <div
            key={member.name}
            className="group bg-card border border-border rounded-xl p-4 md:p-6 lg:p-7 text-center hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600 border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center mx-auto mb-4 md:mb-5 group-hover:border-primary/60 transition-colors overflow-hidden shadow-md">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-heading font-bold text-foreground text-base md:text-lg mb-1">
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
            <Award className="w-5 h-5 text-gold" />
            <p className="text-gold font-heading font-semibold text-sm tracking-widest uppercase">
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
