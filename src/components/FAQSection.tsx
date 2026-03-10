import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of construction projects does CIL handle?",
    a: "We handle the full spectrum — high-rise commercial buildings, residential estates, institutional facilities, industrial warehousing, road construction, water reticulation, sewerage treatment, and storm water drainage systems across Kenya and East Africa.",
  },
  {
    q: "How long does a typical construction project take?",
    a: "Timelines vary by scope: residential projects typically take 6–12 months, commercial buildings 12–24 months, and large infrastructure projects 18–36 months. We provide a detailed project schedule during the proposal phase.",
  },
  {
    q: "What is your payment structure?",
    a: "We operate on milestone-based payments aligned with project phases. A mobilisation advance is typically required, followed by interim certificates issued by the project's quantity surveyor based on work completed.",
  },
  {
    q: "Do you handle building permits and approvals?",
    a: "Yes. We assist with obtaining all necessary permits from county governments, NEMA approvals, NCA compliance, and other regulatory requirements as part of our project management services.",
  },
  {
    q: "What areas do you serve?",
    a: "We operate across Kenya with our headquarters in Nairobi (Karen). Our projects extend to counties nationwide and across the broader East African region.",
  },
  {
    q: "How do you ensure quality on your projects?",
    a: "We maintain rigorous quality management through regular site inspections, material testing, third-party audits, and adherence to international standards. Our team conducts daily quality checks at every stage of construction.",
  },
  {
    q: "Can I visit the construction site during the project?",
    a: "Absolutely. We encourage client site visits and provide regular progress reports with photographs. Site visits are coordinated with our project manager to ensure safety compliance.",
  },
  {
    q: "Do you provide post-construction support?",
    a: "Yes. We offer a defects liability period (typically 6–12 months after handover) during which we address any issues at no additional cost. We also provide maintenance guidance and support beyond the liability period.",
  },
];

const FAQSection = () => (
  <section className="py-12 md:py-20 lg:py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <p className="text-gold font-heading font-semibold text-xs md:text-sm tracking-widest uppercase mb-3">
          Common Questions
        </p>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 md:mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
          Everything you need to know about working with CIL Contractors.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="bg-card border border-border rounded-xl px-4 md:px-6 data-[state=open]:border-primary/40 transition-colors"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground text-sm md:text-base py-3 md:py-5 hover:no-underline hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs md:text-sm leading-relaxed pb-3 md:pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;