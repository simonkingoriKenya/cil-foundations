import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact Us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-dark/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 sm:w-16 sm:h-16">
            <img
              src="/logo.png"
              alt="CIL Contractors logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <p className="font-heading font-bold text-primary text-sm sm:text-lg leading-tight">CIL CONTRACTORS LTD</p>
            <p className="text-slate-dark-foreground/70 text-[10px] sm:text-xs italic hidden sm:block">"The Best Need Not Be Expensive"</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-slate-dark-foreground/80 text-sm font-medium">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:+254788281815" className="hidden sm:flex items-center gap-1.5 text-slate-dark-foreground/70 text-xs">
            <Phone className="w-3.5 h-3.5" />
            +254 788 281 815
          </a>
          <Button variant="hero" size="sm" asChild className="hidden sm:inline-flex">
            <a href="#contact">Get Quote</a>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-dark-foreground p-1.5"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-dark/95 border-t border-slate-dark-foreground/10 px-4 pb-4 pt-2 animate-fade-up">
          <div className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-dark-foreground/80 hover:text-primary transition-colors text-sm font-medium py-1"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+254788281815" className="flex items-center gap-1.5 text-slate-dark-foreground/70 text-xs py-1">
              <Phone className="w-3.5 h-3.5" />
              +254 788 281 815
            </a>
            <Button variant="hero" size="sm" asChild className="w-full mt-1">
              <a href="#contact" onClick={() => setOpen(false)}>Get Quote</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Construction site in Nairobi" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-dark/90 via-slate-dark/70 to-slate-dark/40" />
    </div>
    <div className="relative container mx-auto px-4 py-32">
      <div className="max-w-2xl animate-fade-up">
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">
          General Building & Civil Engineering
        </p>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-dark-foreground leading-[1.1] mb-6">
          Building East Africa's <span className="text-primary">Future</span>
        </h1>
        <p className="text-slate-dark-foreground/75 text-lg max-w-lg mb-8 leading-relaxed">
          Where the best need not be expensive. From high-rise office blocks to roads and water systems — quality construction across Kenya and East Africa.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Request a Quote</a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </div>
    </div>
    {/* Bottom stats bar */}
    <div className="absolute bottom-0 left-0 right-0 bg-slate-dark/80 backdrop-blur-sm border-t border-slate-dark-foreground/10">
      <div className="container mx-auto px-4 py-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="font-heading font-bold text-2xl text-primary">24/7</p>
          <p className="text-slate-dark-foreground/60 text-xs">Availability</p>
        </div>
        <div>
          <p className="font-heading font-bold text-2xl text-primary">East Africa</p>
          <p className="text-slate-dark-foreground/60 text-xs">Regional Coverage</p>
        </div>
        <div>
          <p className="font-heading font-bold text-2xl text-primary">Full Scope</p>
          <p className="text-slate-dark-foreground/60 text-xs">Building & Civil</p>
        </div>
      </div>
    </div>
  </section>
);

export { Navbar, HeroSection };
