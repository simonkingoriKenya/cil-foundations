import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Quote request submitted! We'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-6">
              Request a Quote
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Ready to break ground on your next project? Contact us for a detailed quote. Our team is available 24/7 to discuss your construction and civil engineering needs.
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">Phone</p>
                  <a href="tel:+254788281815" className="text-muted-foreground text-sm hover:text-primary transition-colors">+254 788 281 815</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">Email</p>
                  <a href="mailto:info@castleworks.co.ke" className="text-muted-foreground text-sm hover:text-primary transition-colors">info@castleworks.co.ke</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">Address</p>
                  <p className="text-muted-foreground text-sm">P.O BOX 9088-00100, Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">Hours</p>
                  <p className="text-muted-foreground text-sm">Open 24/7</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <Input required placeholder="John Mwangi" className="bg-background" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                <Input required placeholder="+254 7XX XXX XXX" className="bg-background" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
              <Input required type="email" placeholder="john@example.com" className="bg-background" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Project Type</label>
              <Input required placeholder="e.g. Office Block, Road Construction, Warehouse" className="bg-background" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Project Details</label>
              <Textarea required rows={4} placeholder="Describe your project scope, location, and timeline..." className="bg-background resize-none" />
            </div>
            <Button type="submit" variant="steel" size="lg" className="w-full" disabled={loading}>
              {loading ? "Submitting..." : "Submit Quote Request"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
