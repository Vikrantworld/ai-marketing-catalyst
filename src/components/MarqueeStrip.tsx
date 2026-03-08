const items = [
  "Performance Marketing",
  "Lead Generation",
  "Email Marketing",
  "AI SEO & AEO",
  "CRO",
  "B2B Marketing",
  "Web Design",
  "UI/UX Design",
  "Technical SEO",
  "PPC Management",
  "Marketing Automation",
  "Content Strategy",
];

const MarqueeStrip = () => {
  return (
    <div className="overflow-hidden border-y border-border/30 bg-secondary/20 py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          >
            {item}
            <span className="ml-6 text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
