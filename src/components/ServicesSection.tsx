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
      "End-to-end lead generation systems — from high-converting landing pages and lead magnets to automated nurture sequences that turn cold traffic into booked calls.",
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
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-foreground" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              What We Do
            </span>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-4xl tracking-tight lg:text-6xl">
              <span className="font-body font-medium">Services</span>{" "}
              <span className="font-display italic">purpose-built</span>
              <br />
              <span className="font-display italic">for</span>{" "}
              <span className="font-display italic text-primary">growth.</span>
            </h2>
            <p className="max-w-md text-base text-muted-foreground lg:text-right">
              Full-stack performance marketing powered by AI. Designed to generate qualified leads, 
              lower your CPL, and maximise every pound of ad spend.
            </p>
          </div>
        </motion.div>

        <div className="mt-16">
          {services.map((service, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className="cursor-pointer border-t border-border last:border-b"
              >
                <div className="flex items-center gap-4 py-7 sm:py-8">
                  <span className="hidden text-sm text-muted-foreground sm:block">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      I want to...
                    </p>
                    <p className="mt-1 font-display text-xl italic sm:text-2xl lg:text-3xl">
                      {service.intent}
                    </p>
                  </div>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                      isExpanded
                        ? "border-foreground bg-foreground text-background rotate-90"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    <ArrowRight size={16} />
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
                    isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-8 pl-0 sm:pl-8">
                    <h3 className="font-display text-2xl italic text-primary lg:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
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
