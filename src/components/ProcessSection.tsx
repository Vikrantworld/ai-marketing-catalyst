import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We dig deep into your business, competitors, audience data, and current marketing stack. We find the gaps and the gold. Every engagement starts with understanding what \"success\" actually looks like for your business.",
  },
  {
    number: "02",
    title: "Strategy & Roadmap",
    description:
      "Custom growth strategy with clear KPIs, channel mix, budget allocation, and a 90-day sprint plan. No 50-page decks you'll never read — a focused plan you can actually execute.",
  },
  {
    number: "03",
    title: "Launch & Optimize",
    description:
      "Campaigns go live with AI-powered bid management, creative testing, and daily optimization. We test fast, kill what doesn't work, and double down on what does.",
  },
  {
    number: "04",
    title: "Scale & Report",
    description:
      "Transparent reporting you can actually understand. Strategic scaling of winning campaigns. Continuous iteration to compound your growth quarter over quarter.",
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
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            How We Work
          </span>
          <h2 className="mt-4 text-4xl font-extrabold lg:text-5xl">
            A process designed for{" "}
            <span className="text-gradient-accent">compounding results.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:bg-surface-hover"
            >
              <span className="text-5xl font-extrabold text-primary/15">{step.number}</span>
              <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
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
