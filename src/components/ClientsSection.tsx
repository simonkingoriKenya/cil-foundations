const row1 = [
  { src: "/clients/advtech.png", alt: "ADvTECH Group" },
  { src: "/clients/habitart.jpg", alt: "HabitArt + Partners" },
  { src: "/clients/nakuru.png", alt: "Nakuru County" },
  { src: "/clients/kiambu.png", alt: "Kiambu County" },
  { src: "/clients/makini.jpg", alt: "Makini Schools" },
];

const row2 = [
  { src: "/clients/nova.png", alt: "Nova Consulting Group" },
  { src: "/clients/judiciary.jpeg", alt: "Judiciary of Kenya" },
  { src: "/clients/gok.png", alt: "Government of Kenya" },
  { src: "/clients/kenha.jpeg", alt: "KeNHA" },
  { src: "/clients/pmalliance.png", alt: "PM Alliance" },
];

const MarqueeRow = ({
  logos,
  direction,
}: {
  logos: { src: string; alt: string }[];
  direction: "left" | "right";
}) => {
  // Duplicate for seamless loop
  const items = [...logos, ...logos, ...logos, ...logos];
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="group overflow-hidden py-4">
      <div className={`flex w-max gap-12 ${animClass} group-hover:[animation-play-state:paused]`}>
        {items.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center h-16 w-40 shrink-0 transition-all duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Trusted By The Best
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground">
            Our Clients & Partners
          </h2>
        </div>
        <MarqueeRow logos={row1} direction="left" />
        <MarqueeRow logos={row2} direction="right" />
      </div>
    </section>
  );
};

export default ClientsSection;
