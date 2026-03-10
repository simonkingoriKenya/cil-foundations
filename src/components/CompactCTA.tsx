import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CompactCTAProps {
  title?: string;
  description?: string;
}

const CompactCTA = ({ 
  title = "Ready to discuss your next project?",
  description = "Let's explore how CIL Contractors can bring your vision to life." 
}: CompactCTAProps) => (
  <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center my-8">
    <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
      {title}
    </h3>
    <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
      {description}
    </p>
    <Button size="lg" asChild>
      <a href="#contact" className="gap-2">
        Discuss Your Next Project <ArrowRight className="w-4 h-4" />
      </a>
    </Button>
  </div>
);

export default CompactCTA;
