import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTABanner = () => (
  <section className="py-20 bg-gradient-to-r from-steel to-slate-dark relative overflow-hidden">
    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 36px)"
      }} />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-steel-foreground mb-3">
            Discuss Your Next Project
          </h2>
          <p className="text-steel-foreground/70 text-lg max-w-xl">
            From concept to completion — let's build something exceptional together. Get a detailed quote within 48 hours.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact" className="gap-2">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="tel:+254788281815" className="gap-2">
              <Phone className="w-4 h-4" /> Call Us Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;