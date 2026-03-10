import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const CONTACT_EMAIL = "info@castleworks.co.ke";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const projectType = data.get("projectType") as string;
    const details = data.get("details") as string;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          projectType,
          details,
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div>
            <p className="text-gold font-heading font-semibold text-xs md:text-sm tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 md:mb-6">
              Request a Quote
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 md:mb-10">
              Ready to break ground on your next project? Contact us for a detailed quote. Our team is available 24/7 to discuss your construction and civil engineering needs.
            </p>
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-xs md:text-sm">Phone</p>
                  <a href="tel:+254788281815" className="text-muted-foreground text-xs md:text-sm hover:text-primary transition-colors">+254 788 281 815</a>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-xs md:text-sm">Email</p>
                  <a href="mailto:info@castleworks.co.ke" className="text-muted-foreground text-xs md:text-sm hover:text-primary transition-colors">info@castleworks.co.ke</a>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-xs md:text-sm">Address</p>
                  <p className="text-muted-foreground text-xs md:text-sm">2nd Floor Karen Plains Arcade<br />Along Karen Plains Road<br />P.O. Box 9088-00100 Nairobi</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-xs md:text-sm">Hours</p>
                  <p className="text-muted-foreground text-xs md:text-sm">Open 24/7</p>
                </div>
              </div>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-4 md:p-6 lg:p-8 space-y-4 md:space-y-5">
            {showSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 md:p-4 flex items-start gap-2 md:gap-3 mb-4 md:mb-6">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900 text-sm">Email Received!</p>
                  <p className="text-xs md:text-sm text-green-800">Thank you for your inquiry. We will get back to you within 24 hours.</p>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <Input name="name" required placeholder="John Mwangi" className="bg-background text-sm h-10 md:h-auto" />
              </div>
              <div>
                <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                <Input name="phone" required placeholder="+254 7XX XXX XXX" className="bg-background text-sm h-10 md:h-auto" />
              </div>
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
              <Input name="email" required type="email" placeholder="john@example.com" className="bg-background text-sm h-10 md:h-auto" />
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 block">Project Type</label>
              <Input name="projectType" required placeholder="e.g. Office Block, Road Construction, Warehouse" className="bg-background text-sm h-10 md:h-auto" />
            </div>
            <div>
              <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 block">Project Details</label>
              <Textarea name="details" required rows={4} placeholder="Describe your project scope, location, and timeline..." className="bg-background resize-none text-sm" />
            </div>
            <Button type="submit" variant="steel" size="lg" className="w-full text-sm md:text-base h-10 md:h-auto" disabled={isLoading}>
              {isLoading ? "Sending..." : "Submit Quote Request"}
            </Button>
          </form>
        </div>

        {/* Map */}
        <div className="mt-8 md:mt-12 lg:mt-16">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground mb-4 md:mb-6 text-center">
            Our Location
          </h3>
          <div className="rounded-lg overflow-hidden border border-border aspect-[16/6]">
            <iframe
              title="CIL Contractors Location - Karen Plains Arcade, Nairobi"
              src="https://maps.google.com/maps?q=Karen+Plains+Arcade,+Karen+Plains+Road,+Nairobi,+Kenya&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
