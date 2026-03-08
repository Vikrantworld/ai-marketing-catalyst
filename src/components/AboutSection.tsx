import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, BarChart3, Users, TrendingUp } from "lucide-react";

const valueCards = [
  {
    icon: Cpu,
    title: "AI-First",
    description: "We use AI to find patterns humans miss. Smarter targeting, faster optimization, higher-converting campaigns.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    description: "Every decision backed by real data. We don't guess — we test, measure, and scale what works.",
  },
  {
    icon: Users,
    title: "Your Team, Extended",
    description: "We embed ourselves in your business. Your Slack, your goals, your obsession.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Obsessed",
    description: "From startups to scale-ups, we build marketing engines that compound growth month after month.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Who We Are
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight lg:text-5xl">
              We don't do marketing fluff.{" "}
              <span className="text-gradient-accent">We drive results.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              X9 Media is an AI-first creative marketing agency built for businesses that refuse 
              to settle for average. We blend artificial intelligence with battle-tested marketing 
              strategy to deliver growth that actually moves the needle. Not impressions. Not 
              vanity metrics. Revenue.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The secret behind our marketing magic isn't mystical — we're jargon-busting, 
              data-driven, human-focused marketers who operate as an extension of your team. 
              Getting to know your business, understanding your audiences, and what truly 
              matters to both of you — that's how we drive results.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We're more than a marketing agency. We're obsessed with your business' success.
            </p>
          </motion.div>

          {/* Value Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {valueCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:bg-surface-hover"
              >
                <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-2.5">
                  <card.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
