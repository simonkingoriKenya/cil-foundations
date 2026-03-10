import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "CIL Contractors brought our vision for Maki House to life with exceptional craftsmanship and attention to detail. Every room reflects quality and durability. The entire process was seamless from groundbreaking to handover—they truly understand the importance of creating homes, not just buildings.",
    name: "Winnie Warui",
    title: "Project Owner",
    company: "Maki House",
    project: "Thika Residence",
  },
  {
    quote: "When we entrusted CIL with our boarding facility project for Daughters of Jesus The Good Shepherd, we needed a partner who understood institutional requirements. Their professionalism, punctuality, and commitment to our tight timeline was remarkable. They delivered a world-class facility on budget.",
    name: "Arch. Donald",
    title: "Project Architect",
    company: "Karimu Ministries",
    project: "Boarding Facility",
  },
  {
    quote: "CIL's expertise in large-scale institutional construction was evident throughout our Huka University project. They managed complex coordination with multiple departments and never compromised on quality. The university now has state-of-the-art facilities that our students can be proud of.",
    name: "Sister Florence",
    title: "Facilities Director",
    company: "Huka University",
    project: "Academic Campus",
  },
  {
    quote: "We required industrial-grade storage solutions, and CIL Contractors delivered exactly that. Their engineering solutions for Store House Holdings optimized our space while maintaining structural integrity. Their value engineering approach saved us significant costs without sacrificing quality.",
    name: "Arch. Joseph Maina",
    title: "Chief Technical Officer",
    company: "Store House Holdings Ltd",
    project: "Warehouse Complex",
  },
  {
    quote: "CIL's work on our Karen Co-operative University facilities has been nothing short of exceptional. They handled the complexity of our master plan implementation with precision and professionalism. Our students now study in modern facilities that reflect the institution's commitment to excellence.",
    name: "James Mburu",
    title: "Vice Principal, Infrastructure",
    company: "Karen Co-operative University",
    project: "Educational Infrastructure",
  },
  {
    quote: "As an engineer, I'm critical of construction quality, but CIL's adherence to specifications and technical excellence is commendable. Every aspect—from site management to final inspection—demonstrates their 24/7 commitment to delivering superior projects. They are true partners in infrastructure development.",
    name: "Eng. James Mariga",
    title: "Infrastructure Consultant",
    company: "East African Development Partners",
    project: "Civil Engineering Projects",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[active];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-slate-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <p className="text-gold font-heading font-semibold text-xs md:text-sm tracking-widest uppercase mb-3">
            Client Voices
          </p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-slate-dark-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 md:mb-8">
            <Quote className="w-8 md:w-12 text-gold/40 mx-auto mb-4 md:mb-6" />
            <p
              key={active}
              className="text-slate-dark-foreground/85 text-base sm:text-lg md:text-xl leading-relaxed italic animate-fade-in"
            >
              "{t.quote}"
            </p>
          </div>

          <div key={`info-${active}`} className="animate-fade-in">
            <p className="font-heading font-bold text-slate-dark-foreground text-sm md:text-base">
              {t.name}
            </p>
            <p className="text-gold text-xs md:text-sm font-medium">{t.title}</p>
            <p className="text-slate-dark-foreground/50 text-xs md:text-sm">{t.company} — {t.project}</p>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-6 md:mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === active
                  ? "bg-gold w-8"
                  : "bg-slate-dark-foreground/20 hover:bg-slate-dark-foreground/40"
              }`}
              aria-label={`View testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
