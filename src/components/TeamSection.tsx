import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "John K. Mwangi",
    role: "Managing Director",
    bio: "25+ years in construction management across East Africa. Leads CIL's strategic vision and client relationships.",
    initials: "JM",
  },
  {
    name: "Grace W. Njeri",
    role: "Director of Operations",
    bio: "Oversees all project execution and site operations. Expert in value engineering and resource optimization.",
    initials: "GN",
  },
  {
    name: "David O. Otieno",
    role: "Chief Civil Engineer",
    bio: "Specialized in infrastructure, water systems, and road construction. Drives technical excellence across projects.",
    initials: "DO",
  },
  {
    name: "Fatuma A. Hassan",
    role: "Head of Business Development",
    bio: "Builds client partnerships and drives growth. Focused on expanding CIL's footprint across the region.",
    initials: "FH",
  },
];

const TeamSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
          Our Leadership
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
          The People Behind the Projects
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Experienced professionals committed to building East Africa's future with integrity and excellence.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <div
            key={member.name}
            className="group bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 hover:shadow-xl transition-all duration-300"
          >
            {/* Avatar placeholder with initials */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-5 group-hover:border-primary/60 transition-colors">
              <span className="font-heading font-bold text-primary text-xl">
                {member.initials}
              </span>
            </div>

            <h3 className="font-heading font-bold text-foreground text-lg mb-1">
              {member.name}
            </h3>
            <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              {member.bio}
            </p>

            <div className="flex justify-center gap-3">
              <button
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label={`Email ${member.name}`}
              >
                <Mail className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
              <button
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label={`LinkedIn profile of ${member.name}`}
              >
                <Linkedin className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
