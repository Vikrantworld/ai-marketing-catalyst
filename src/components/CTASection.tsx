import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32" ref={ref} id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-12 text-center lg:p-20"
        >
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />

          <div className="relative">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Let's Talk
            </span>
            <h2 className="mt-4 text-4xl font-extrabold lg:text-6xl">
              Ready to turn your marketing into a{" "}
              <span className="text-gradient-accent">growth engine?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Book a free 30-minute strategy call. We'll audit your current setup, identify 
              quick wins, and map out a plan to scale — whether you work with us or not.
            </p>
            <a
              href="https://calendly.com/x9media/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:opacity-90 glow-accent"
            >
              Book Your Free Strategy Call
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
