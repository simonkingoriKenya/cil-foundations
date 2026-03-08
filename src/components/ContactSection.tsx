import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const CONTACT_EMAIL = "info@castleworks.co.ke";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const projectType = data.get("projectType") as string;
    const details = data.get("details") as string;

    const subject = encodeURIComponent(`Quote Request: ${projectType}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProject Type: ${projectType}\n\nProject Details:\n${details}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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
                  <p className="text-muted-foreground text-sm">2nd Floor Karen Plains Arcade<br />Along Karen Plains Road<br />P.O. Box 9088-00100 Nairobi</p>
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
          <form ref={formRef} onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <Input name="name" required placeholder="John Mwangi" className="bg-background" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                <Input name="phone" required placeholder="+254 7XX XXX XXX" className="bg-background" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
              <Input name="email" required type="email" placeholder="john@example.com" className="bg-background" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Project Type</label>
              <Input name="projectType" required placeholder="e.g. Office Block, Road Construction, Warehouse" className="bg-background" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Project Details</label>
              <Textarea name="details" required rows={4} placeholder="Describe your project scope, location, and timeline..." className="bg-background resize-none" />
            </div>
            <Button type="submit" variant="steel" size="lg" className="w-full">
              Submit Quote Request
            </Button>
          </form>
        </div>

        {/* Map */}
        <div className="mt-16">
          <h3 className="font-heading font-bold text-2xl text-foreground mb-6 text-center">
            Our Location
          </h3>
          <div className="rounded-lg overflow-hidden border border-border aspect-[16/6]">
            <iframe
              title="CIL Contractors Location - Karen Plains Arcade, Nairobi"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Karen+Plains+Arcade,Karen+Plains+Road,Nairobi,Kenya&zoom=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
