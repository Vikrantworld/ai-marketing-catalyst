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
              X9 Media was set up with the belief that taking small consistent steps 
              will lead to success. We pride ourselves on being jargon-busting, 
              data-driven, human-focused marketers.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We operate as an extension of your own team — getting to know your business, 
              understanding your audiences, and what truly matters to both of you is how 
              we drive incredible results.
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
