import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20" id="home">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="absolute inset-0 bg-grid opacity-10" />
      </div>

      <div className="container relative mx-auto flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 text-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            AI-First Performance Agency
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="max-w-5xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          We are an AI-first{" "}
          <span className="text-gradient-accent">creative marketing</span>{" "}
          agency.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          A collective of data-obsessed, AI-powered marketers helping ambitious businesses 
          turn clicks into customers and ad spend into growth.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="https://calendly.com/x9media/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:opacity-90 glow-accent"
          >
            Work Together
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#our-work"
            className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/60 px-7 py-4 text-lg font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/40"
          >
            <Play size={16} className="text-primary" />
            See Our Work
          </a>
        </motion.div>

        {/* Platform Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          {["Google Partner", "Meta Partner", "LinkedIn Ads", "AI SEO"].map((badge) => (
            <div
              key={badge}
              className="rounded-full border border-border/40 bg-secondary/40 px-5 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur-sm"
            >
              {badge}
            </div>
          ))}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-10 border-t border-border/30 pt-8"
        >
          {[
            { value: "50+", label: "Brands Scaled" },
            { value: "130K+", label: "Leads Generated" },
            { value: "3.5x", label: "Avg. ROAS" },
            { value: "$13", label: "Avg. CPL" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-extrabold text-foreground sm:text-3xl">{value}</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
