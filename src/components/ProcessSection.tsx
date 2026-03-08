import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We dig deep into your business, competitors, audience data, and current marketing stack. We find the gaps and the gold.",
  },
  {
    number: "02",
    title: "Strategy & Roadmap",
    description:
      "Custom growth strategy with clear KPIs, channel mix, budget allocation, and a 90-day sprint plan. No 50-page decks — a focused plan.",
  },
  {
    number: "03",
    title: "Launch & Optimize",
    description:
      "Campaigns go live with AI-powered bid management, creative testing, and daily optimization. We test fast, kill what doesn't work.",
  },
  {
    number: "04",
    title: "Scale & Report",
    description:
      "Transparent reporting you can actually understand. Strategic scaling. Continuous iteration to compound growth quarter over quarter.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-foreground" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              How We Work
            </span>
          </div>
          <h2 className="text-4xl tracking-tight lg:text-6xl">
            <span className="font-body font-medium">A process for</span>{" "}
            <span className="font-display italic text-primary">compounding results.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-0 border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group border-b border-r border-border p-8 transition-colors duration-300 hover:bg-surface-hover lg:border-b-0 last:lg:border-r-0"
            >
              <span className="font-display text-5xl italic text-foreground/10 transition-colors group-hover:text-primary/30">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl italic">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
