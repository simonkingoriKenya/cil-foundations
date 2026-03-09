import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-slate-dark py-16">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-12">
              <img
                src="/logo.png"
                alt="CIL Contractors logo"
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="font-heading font-bold text-primary text-base leading-tight">CIL CONTRACTORS LTD</p>
              <p className="text-slate-dark-foreground/70 text-xs italic">"The Best Need Not Be Expensive"</p>
            </div>
          </div>
          <p className="text-slate-dark-foreground/60 text-sm leading-relaxed mb-4">
            Transforming East Africa's skyline — where the best need not be expensive.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-slate-dark-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-slate-dark-foreground/60"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-slate-dark-foreground text-sm mb-4">Services</h4>
          <ul className="space-y-2 text-slate-dark-foreground/60 text-sm">
            <li>High-Rise Construction</li>
            <li>Residential Estates</li>
            <li>Industrial Warehousing</li>
            <li>Roads & Infrastructure</li>
            <li>Water & Drainage</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-slate-dark-foreground text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-slate-dark-foreground/60 text-sm">
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-slate-dark-foreground text-sm mb-4">Contact</h4>
          <div className="space-y-3 text-slate-dark-foreground/60 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+254788281815" className="hover:text-primary transition-colors">+254 788 281 815</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:info@castleworks.co.ke" className="hover:text-primary transition-colors">info@castleworks.co.ke</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>2nd Floor Karen Plains Arcade<br />Along Karen Plains Road<br />P.O. Box 9088-00100 Nairobi</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-dark-foreground/10 pt-8 text-center text-slate-dark-foreground/40 text-xs">
        © {new Date().getFullYear()} CIL Contractors Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;