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
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-foreground" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Who We Are
              </span>
            </div>
            <h2 className="text-4xl leading-tight tracking-tight lg:text-6xl">
              <span className="font-body font-medium">We don't do</span>{" "}
              <span className="font-display italic">marketing fluff.</span>
              <br />
              <span className="font-body font-medium">We drive</span>{" "}
              <span className="font-display italic text-primary">results.</span>
            </h2>
            <div className="mt-8 space-y-5">
              <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                X9 Media is an AI-first creative marketing agency built for businesses that refuse 
                to settle for average. We blend artificial intelligence with battle-tested marketing 
                strategy to deliver growth that actually moves the needle. Not impressions. Not 
                vanity metrics. Revenue.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                The secret behind our marketing magic isn't mystical — we're jargon-busting, 
                data-driven, human-focused marketers who operate as an extension of your team. 
                Getting to know your business, understanding your audiences, and what truly 
                matters to both of you — that's how we drive results.
              </p>
              <p className="text-base font-medium leading-relaxed text-foreground lg:text-lg">
                We're more than a marketing agency. We're obsessed with your business' success.
              </p>
            </div>
          </motion.div>

          {/* Right — Value Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {valueCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                className="group rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-full bg-primary/15 p-3">
                  <card.icon size={20} className="text-foreground" />
                </div>
                <h3 className="font-display text-xl italic">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
