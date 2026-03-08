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
    <div className="overflow-hidden py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground"
          >
            {item}
            <span className="ml-8 text-primary">●</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
