import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Who We Are
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight lg:text-5xl">
              Small Can Also Be{" "}
              <span className="text-gradient-accent">Mighty.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              X9 Media was born from a simple conviction: small and medium businesses deserve 
              the same caliber of marketing firepower as the big players. We're a crew of 
              passionate strategists, creatives, and AI specialists who genuinely get excited 
              about watching your brand punch above its weight.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The secret behind our marketing magic isn't mystical at all — we pride ourselves 
              on being jargon-busting, data-driven, and deeply human-focused. Every campaign, 
              every pixel, every line of copy is backed by real data and built with real empathy 
              for your audience.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We don't work <em>for</em> you — we work <em>with</em> you. As an extension of 
              your own team, we immerse ourselves in your business, understand your customers, 
              and obsess over what makes them tick. That's how we consistently drive results 
              that feel almost unfair to your competitors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "50+", label: "Clients Served" },
              { number: "3+", label: "Years Experience" },
              { number: "10x", label: "Average ROI" },
              { number: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/50 bg-card p-6 text-center transition-colors hover:border-primary/30"
              >
                <div className="text-3xl font-extrabold text-gradient-accent lg:text-4xl">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
