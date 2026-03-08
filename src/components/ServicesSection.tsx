import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Megaphone, Target, Mail, Search, Code } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    intent: "drive profitable customer acquisition through paid media",
    title: "Performance Marketing",
    description:
      "Multi-channel paid media across Google, Meta, LinkedIn & Microsoft Ads — relentlessly optimized for ROAS, CPL, and pipeline growth. From campaign architecture to creative testing, we turn ad budgets into revenue machines.",
    capabilities: ["Google Ads", "Meta Ads", "LinkedIn Ads", "PPC Strategy", "Retargeting", "Shopping Ads"],
  },
  {
    icon: Target,
    intent: "fill my pipeline with qualified leads on autopilot",
    title: "Lead Generation & Automation",
    description:
      "End-to-end lead generation systems — from high-converting landing pages and lead magnets to automated nurture sequences that turn cold traffic into booked calls. We integrate with HubSpot, Salesforce, and your existing stack.",
    capabilities: ["Landing Pages", "Lead Magnets", "CRM Integration", "HubSpot", "Salesforce", "Marketing Automation"],
  },
  {
    icon: Mail,
    intent: "turn my email list into a revenue channel",
    title: "Email Marketing",
    description:
      "Strategic email campaigns and automated workflows that nurture, convert, and retain. We build the sequences that turn subscribers into customers and one-time buyers into repeat purchasers.",
    capabilities: ["Email Automation", "Drip Campaigns", "A/B Testing", "Segmentation", "Lifecycle Marketing"],
  },
  {
    icon: Search,
    intent: "get my brand cited by AI search engines",
    title: "AI SEO, AEO & CRO",
    description:
      "Next-gen Answer Engine Optimization to get your brand cited by ChatGPT, Claude, Perplexity & Gemini. Plus conversion rate optimization and full-funnel B2B strategy that turns traffic into pipeline.",
    capabilities: ["AI SEO / AEO", "Technical SEO", "CRO", "B2B Strategy", "Content Marketing"],
  },
  {
    icon: Code,
    intent: "build a website that actually converts",
    title: "Web Design & SEO",
    description:
      "High-performance websites engineered for conversion. Beautiful UI/UX paired with technical SEO foundations that compound your organic visibility month after month.",
    capabilities: ["Website Design", "UI/UX", "WordPress / Shopify", "Technical SEO", "On-Page SEO", "Site Speed"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

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
            Services purpose-built for <span className="text-gradient-accent">growth.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Full-stack performance marketing powered by AI. Designed to generate qualified leads, 
            lower your CPL, and maximise every pound of ad spend.
          </p>
        </motion.div>

        <div className="mt-16 space-y-4">
          {services.map((service, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-300 ${
                  isExpanded
                    ? "border-primary/40 bg-card"
                    : "border-border/50 bg-card/50 hover:border-border hover:bg-card"
                }`}
              >
                <div className="flex items-center gap-4 p-6 sm:p-8">
                  <div className="inline-flex shrink-0 rounded-xl bg-primary/10 p-3">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      I want to...
                    </p>
                    <p className="mt-1 text-lg font-bold sm:text-xl">{service.intent}</p>
                  </div>
                  <ArrowRight
                    size={20}
                    className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-border/30 px-6 pb-8 pt-6 sm:px-8">
                    <h3 className="text-2xl font-extrabold text-gradient-accent">{service.title}</h3>
                    <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="rounded-full border border-border/50 bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
