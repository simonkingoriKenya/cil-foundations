import { Award, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const team = [
  {
    name: "George Kingori",
    role: "Engineering Technical Lead",
    bio: "Drives technical excellence in engineering solutions, overseeing structural integrity, design compliance, and on-site technical supervision across all projects.",
    initials: "GK",
    photo: "/George-new.jpeg",
    fullBio: "George Kingori is the Engineering Technical Lead at CIL Contractors Ltd, where he drives technical excellence across all engineering solutions. With deep expertise in structural integrity, design compliance, and on-site technical supervision, George ensures every project meets the highest standards of quality and safety. His leadership spans the full lifecycle of construction — from initial design review through to final handover — coordinating with architects, engineers, and site teams to deliver projects that stand the test of time.",
  },
  {
    name: "Tirus Kagiri",
    role: "Operations Manager",
    bio: "Oversees day-to-day site operations, coordinating teams and resources to maintain seamless project execution across East Africa.",
    initials: "TK",
    photo: "/kagiri-new.png",
    fullBio: "Tirus Kagiri serves as Operations Manager at CIL Contractors Ltd, responsible for the seamless coordination of day-to-day site operations. He manages teams, resources, and logistics to ensure every project runs on schedule and within budget. With extensive field experience across East Africa, Tirus brings operational discipline and a hands-on leadership style that keeps projects moving efficiently from groundbreaking to completion.",
  },
  {
    name: "Ndiba",
    role: "Finance & Procurement Manager",
    bio: "Manages financial planning, cost control, and strategic procurement to ensure projects are delivered within budget without compromising quality.",
    initials: "ND",
    photo: "/Ndiba.png",
    fullBio: "Ndiba leads Finance & Procurement at CIL Contractors Ltd, overseeing financial planning, cost control, and strategic procurement across all projects. His meticulous approach ensures projects are delivered within budget while maintaining the highest quality standards. Ndiba's expertise in supplier negotiations and financial management has been instrumental in optimizing project costs and building lasting vendor partnerships.",
  },
  {
    name: "Ms Sandra",
    role: "Project Management",
    bio: "Leads project delivery end-to-end, ensuring timelines, budgets, and quality benchmarks are met across all active sites with precision and accountability.",
    initials: "SA",
    photo: "/Sandra.png",
    fullBio: "Ms Sandra is the Project Management lead at CIL Contractors Ltd, driving end-to-end project delivery across all active sites. She ensures timelines, budgets, and quality benchmarks are met with precision and accountability. Sandra's methodical approach to project planning and stakeholder communication has been key to CIL's consistent track record of successful project completions.",
  },
  {
    name: "Kevin",
    role: "ICT Consultant",
    bio: "Provides strategic ICT infrastructure solutions and digital transformation guidance, ensuring seamless technology integration across company operations.",
    initials: "KV",
    photo: "/kevin-new.jpeg",
    fullBio: "Kevin serves as ICT Consultant at CIL Contractors Ltd, providing strategic ICT infrastructure solutions and digital transformation guidance. He ensures seamless technology integration across all company operations, from project management systems to communication platforms. Kevin's expertise in modern technology solutions has helped CIL stay ahead of the curve in adopting digital tools that enhance productivity and collaboration.",
  },
  {
    name: "Ms Mokeira",
    role: "Administration & Logistics Manager",
    bio: "Coordinates administrative functions and logistics, ensuring smooth supply chains and office operations that support every project.",
    initials: "MO",
    photo: "/Mokeira.png",
    fullBio: "Ms Mokeira manages Administration & Logistics at CIL Contractors Ltd, coordinating all administrative functions and logistics operations. She ensures smooth supply chains and office operations that form the backbone supporting every project. Her organizational skills and attention to detail keep the company running efficiently behind the scenes.",
  },
];

const TeamMemberModal = ({
  member,
  isOpen,
  onClose,
}: {
  member: typeof team[0] | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!member) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        <div className="relative">
          <div className="w-full aspect-[4/3] overflow-hidden rounded-t-lg">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16">
            <h2 className="font-heading font-bold text-2xl text-white">
              {member.name}
            </h2>
            <p className="text-primary text-sm font-semibold mt-1">{member.role}</p>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">About</h3>
            <p className="text-muted-foreground leading-relaxed">
              {member.fullBio}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (member: typeof team[0]) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
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
              onClick={() => handleOpenModal(member)}
              className="group bg-card border border-border rounded-xl p-4 md:p-6 lg:p-7 text-center hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-muted to-muted/50 border-2 border-border flex items-center justify-center mx-auto mb-4 md:mb-5 group-hover:border-primary/60 transition-colors overflow-hidden shadow-md">
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
              <p className="text-primary/60 text-xs mt-3 group-hover:text-primary transition-colors">
                Click to view full profile →
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

      <TeamMemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default TeamSection;
