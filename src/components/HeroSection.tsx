import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BarChart3, Target, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const serviceBadges = [
  { icon: BarChart3, label: "PERFORMANCE MARKETING" },
  { icon: Target, label: "LEAD GENERATION" },
  { icon: Mail, label: "EMAIL MARKETING" },
  { icon: Sparkles, label: "AI SEO & CRO" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20" id="home">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="container relative mx-auto flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 text-center">
        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          {serviceBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-border/60 bg-secondary/60 px-4 py-2 backdrop-blur-sm"
            >
              <Icon size={14} className="text-primary" />
              <span className="text-xs font-medium tracking-wider text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="max-w-5xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          WE GROW{" "}
          <span className="text-gradient-accent">SMB</span>{" "}
          BRANDS.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          We're not your typical agency. We combine the power of Artificial Intelligence 
          with data-driven creative strategies to help small & medium businesses 
          outperform competitors, generate high-quality leads, and build brands 
          that customers actually remember.
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
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:opacity-90 glow-accent"
          >
            Start Your Growth
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <span className="text-sm text-muted-foreground">
            Free 30-min strategy session · No strings attached
          </span>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 border-t border-border/40 pt-8"
        >
          {[
            { value: "50+", label: "Brands Scaled" },
            { value: "3x", label: "Avg. ROAS" },
            { value: "10M+", label: "Leads Generated" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-extrabold text-foreground sm:text-3xl">{value}</p>
              <p className="text-xs tracking-wider text-muted-foreground uppercase">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
