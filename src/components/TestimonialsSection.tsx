import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "CIL Contractors delivered our 8-storey office block ahead of schedule and under budget. Their attention to structural detail and commitment to safety standards was exceptional throughout the entire project.",
    name: "James Kariuki",
    title: "Director, Property Development",
    company: "Karen Plains Hotel",
    project: "Hospitality Project",
  },
  {
    quote: "We've worked with many contractors across East Africa, but CIL's transparency and value engineering approach stands apart. They truly embody 'the best need not be expensive.'",
    name: "Dr. Sarah Mwende",
    title: "Facilities Director",
    company: "Makini Schools",
    project: "Institutional Buildings",
  },
  {
    quote: "From groundbreaking to handover, CIL's project management was world-class. Their 24/7 availability meant issues were resolved before they became problems. Highly recommended.",
    name: "Peter Ochieng",
    title: "County Infrastructure Director",
    company: "Nakuru County Government",
    project: "Road Infrastructure",
  },
  {
    quote: "CIL Contractors transformed our vision into reality with precision and professionalism. The quality of finishes on our residential estate exceeded all expectations.",
    name: "Amina Hassan",
    title: "CEO",
    company: "Liza Heights",
    project: "Residential Estate",
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
    <section className="py-24 bg-slate-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Client Voices
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-dark-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Quote className="w-12 h-12 text-primary/40 mx-auto mb-6" />
            <p
              key={active}
              className="text-slate-dark-foreground/85 text-lg sm:text-xl leading-relaxed italic animate-fade-in"
            >
              "{t.quote}"
            </p>
          </div>

          <div key={`info-${active}`} className="animate-fade-in">
            <p className="font-heading font-bold text-slate-dark-foreground text-base">
              {t.name}
            </p>
            <p className="text-primary text-sm font-medium">{t.title}</p>
            <p className="text-slate-dark-foreground/50 text-sm">{t.company} — {t.project}</p>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === active
                  ? "bg-primary w-8"
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
