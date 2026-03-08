import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Target,
  Mail,
  Search,
  Code,
  Palette,
  Megaphone,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Performance Marketing",
    items: ["Social Media Marketing", "PPC Management & Strategy", "Marketing Automation"],
  },
  {
    icon: Target,
    title: "Lead Generation",
    items: ["B2B Lead Generation", "Landing Page Optimization", "Conversion Funnels"],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    items: ["Email Campaigns", "Drip Sequences", "Newsletter Strategy"],
  },
  {
    icon: Search,
    title: "AI SEO & CRO",
    items: ["AI-Powered SEO", "Technical SEO", "Conversion Rate Optimization"],
  },
  {
    icon: TrendingUp,
    title: "B2B Marketing",
    items: ["Account-Based Marketing", "LinkedIn Strategy", "Content Marketing"],
  },
  {
    icon: Code,
    title: "Web Design & Development",
    items: ["Website Design", "UI & UX Design", "Custom Development"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl font-extrabold lg:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We're more than just a marketing agency — our mission is to support your growth 
            with data-driven, AI-powered strategies.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/40 hover:bg-surface-hover"
            >
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <ul className="mt-4 space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
