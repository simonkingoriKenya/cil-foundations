import { MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

const MobileFloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide button when near the contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();
        const isNearContact = contactRect.top < window.innerHeight && contactRect.top > 0;
        setIsVisible(!isNearContact);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-40 md:hidden bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center w-14 h-14"
      title="Discuss Your Next Project"
    >
      <MessageSquare className="w-6 h-6" />
    </a>
  );
};

export default MobileFloatingCTA;
