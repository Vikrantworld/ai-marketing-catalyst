import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const wordVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.33, 1, 0.68, 1] as const,
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20" id="home">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Decorative circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.08 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute -right-32 top-20 h-[600px] w-[600px] rounded-full bg-primary"
      />

      <div className="container relative mx-auto flex min-h-[calc(100vh-5rem)] flex-col justify-center px-6">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-px w-12 bg-foreground" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              AI-First Performance Agency
            </span>
          </motion.div>

          {/* Main headline — word-by-word reveal */}
          <h1 className="text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem]">
            {["We", "are", "an"].map((word, i) => (
              <span key={word} className="inline-block overflow-hidden mr-[0.25em]">
                <motion.span
                  className="inline-block font-body font-medium"
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <br className="hidden sm:block" />
            {["AI-first"].map((word, i) => (
              <span key={word} className="inline-block overflow-hidden mr-[0.25em]">
                <motion.span
                  className="inline-block font-display italic text-primary"
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i + 3}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            {["creative"].map((word, i) => (
              <span key={word} className="inline-block overflow-hidden mr-[0.25em]">
                <motion.span
                  className="inline-block font-display italic"
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i + 4}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <br className="hidden sm:block" />
            {["marketing", "agency."].map((word, i) => (
              <span key={word} className="inline-block overflow-hidden mr-[0.25em]">
                <motion.span
                  className="inline-block font-display italic"
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i + 5}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            A collective of data-obsessed, AI-powered marketers helping ambitious 
            businesses turn clicks into customers and ad spend into growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="https://calendly.com/x9media/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-all hover:scale-[1.02]"
            >
              Work Together
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#our-work"
              className="link-hover inline-flex items-center gap-2 text-base font-medium text-foreground"
            >
              See Our Work
            </a>
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-12 left-6 right-6"
        >
          <div className="flex flex-wrap items-end justify-between gap-8 border-t border-border pt-6">
            <div className="flex flex-wrap gap-10">
              {[
                { value: "50+", label: "Brands Scaled" },
                { value: "130K+", label: "Leads Generated" },
                { value: "3.5x", label: "Avg. ROAS" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display text-3xl italic">{value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              {["Google Partner", "Meta Partner", "LinkedIn Ads"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-border px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
