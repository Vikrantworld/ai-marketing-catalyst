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
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="relative overflow-hidden rounded-3xl bg-foreground p-12 text-background text-center lg:p-20"
        >
          {/* Decorative */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
          <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-primary/15 blur-[60px]" />

          <div className="relative">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-background/50">
              Let's Talk
            </span>
            <h2 className="mt-6 text-4xl tracking-tight lg:text-6xl">
              <span className="font-body font-medium">Ready to turn your marketing</span>
              <br />
              <span className="font-display italic">into a growth engine?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base text-background/60">
              Book a free 30-minute strategy call. We'll audit your setup, identify quick wins, 
              and map out a plan to scale — whether you work with us or not.
            </p>
            <a
              href="https://calendly.com/x9media/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:scale-[1.02]"
            >
              Book Your Free Strategy Call
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
