import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-slate-dark py-8 md:py-12 lg:py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12">
              <img
                src="/logo.png"
                alt="CIL Contractors logo"
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="font-heading font-bold text-gold text-sm sm:text-base leading-tight">CIL CONTRACTORS LTD</p>
              <p className="text-slate-dark-foreground/70 text-[10px] sm:text-xs italic">"The Best Need Not Be Expensive"</p>
            </div>
          </div>
          <p className="text-slate-dark-foreground/60 text-xs sm:text-sm leading-relaxed mb-3 md:mb-4">
            Transforming East Africa's skyline — where the best need not be expensive.
          </p>
          <div className="flex gap-2 md:gap-3">
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
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-dark-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-slate-dark-foreground/60"
              >
                <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-slate-dark-foreground text-xs sm:text-sm mb-3 md:mb-4">Services</h4>
          <ul className="space-y-1.5 md:space-y-2 text-slate-dark-foreground/60 text-xs sm:text-sm">
            <li>High-Rise Construction</li>
            <li>Residential Estates</li>
            <li>Industrial Warehousing</li>
            <li>Roads & Infrastructure</li>
            <li>Water & Drainage</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-slate-dark-foreground text-xs sm:text-sm mb-3 md:mb-4">Company</h4>
          <ul className="space-y-1.5 md:space-y-2 text-slate-dark-foreground/60 text-xs sm:text-sm">
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#projects" className="hover:text-primary transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-slate-dark-foreground text-xs sm:text-sm mb-3 md:mb-4">Contact</h4>
          <div className="space-y-2 md:space-y-3 text-slate-dark-foreground/60 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <a href="tel:+254788281815" className="hover:text-primary transition-colors">+254 788 281 815</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <a href="mailto:info@castleworks.co.ke" className="hover:text-primary transition-colors">info@castleworks.co.ke</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm">2nd Floor Karen Plains Arcade<br />Along Karen Plains Road<br />P.O. Box 9088-00100 Nairobi</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-dark-foreground/10 pt-4 md:pt-6 lg:pt-8 text-center text-slate-dark-foreground/40 text-[10px] sm:text-xs">
        © {new Date().getFullYear()} CIL Contractors Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;