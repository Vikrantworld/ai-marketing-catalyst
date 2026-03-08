import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp } from "lucide-react";

const mainCaseStudies = [
  {
    client: "MissPoppins",
    industry: "Parenting Platform",
    heroMetric: "1K → 10K",
    heroLabel: "Monthly Crunchbase traffic in 3 months",
    challenge:
      "Launch a brand-new parenting coaching platform with zero brand recognition against established players — not just on Google, but across AI search engines.",
    results: [
      { value: "10x", label: "Traffic Growth" },
      { value: "24%", label: "AI Citation Rate" },
      { value: "200+", label: "Keywords Ranked" },
      { value: "65/mo", label: "Qualified Leads" },
    ],
    services: ["AI SEO / AEO", "Content Strategy", "Technical SEO", "Authority Building"],
  },
  {
    client: "House of Hits",
    industry: "Grammy-Winning Studio",
    heroMetric: "340%",
    heroLabel: "Increase in artist inquiry forms",
    challenge:
      "Despite 375+ Platinum certifications, House of Hits was invisible in AI search results. Artists asking ChatGPT 'Who are the best producers?' weren't finding them.",
    results: [
      { value: "340%", label: "Inquiry Increase" },
      { value: "150+", label: "Keywords Ranked" },
      { value: "Top 3", label: "AI Visibility" },
      { value: "2x", label: "Booking Rate" },
    ],
    services: ["AI SEO / AEO", "Content Production", "Social Media"],
  },
  {
    client: "411 Locals",
    industry: "Marketing Platform",
    heroMetric: "130K+",
    heroLabel: "Leads generated. $13 CPL. 3.5x ROAS.",
    challenge:
      "Scale lead generation across the US market while maintaining cost efficiency with a significant monthly PPC budget across Google, Meta, and Bing.",
    results: [
      { value: "130K+", label: "Leads" },
      { value: "$13", label: "CPL" },
      { value: "3.5x", label: "ROAS" },
      { value: "37%", label: "CPL Reduction" },
    ],
    services: ["Performance Marketing", "Lead Generation", "CRM Integration"],
  },
];

const summaryCases = [
  {
    client: "Endor Labs",
    industry: "Cybersecurity",
    headline: "AEO strategy to own \"next-gen security\" in AI search",
    insight: "$5-10M influenced pipeline projected.",
  },
  {
    client: "Pax Market Funds",
    industry: "FinTech",
    headline: "42% sign-up boost through AI-optimized content",
    insight: "Reached 5,000+ traders.",
  },
  {
    client: "NeoLemon",
    industry: "AI Creative Tool",
    headline: "AI-powered creative tool positioning",
    insight: "Positioned against established AI image gen players.",
  },
];

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCase, setActiveCase] = useState(0);
  const current = mainCaseStudies[activeCase];

  return (
    <section id="our-work" className="py-24 lg:py-32 bg-foreground text-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-background/50" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-background/50">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl tracking-tight lg:text-6xl">
            <span className="font-body font-medium">Results that</span>{" "}
            <span className="font-display italic">speak for themselves.</span>
          </h2>
          <p className="mt-4 text-base text-background/50">
            Real campaigns. Real numbers. No fluff.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {mainCaseStudies.map((cs, i) => (
            <button
              key={cs.client}
              onClick={() => setActiveCase(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeCase === i
                  ? "bg-primary text-primary-foreground"
                  : "border border-background/20 text-background/60 hover:text-background"
              }`}
            >
              {cs.client}
            </button>
          ))}
        </motion.div>

        {/* Active Study */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 rounded-2xl border border-background/10 bg-background/5 overflow-hidden"
        >
          <div className="p-8 sm:p-12 text-center border-b border-background/10">
            <p className="text-xs uppercase tracking-[0.2em] text-background/40">
              {current.client} — {current.industry}
            </p>
            <p className="mt-4 font-display text-5xl italic sm:text-6xl lg:text-7xl">
              {current.heroMetric}
            </p>
            <p className="mt-2 text-base text-background/50">{current.heroLabel}</p>
          </div>

          <div className="p-8 sm:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">The Challenge</p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-background/60">
              {current.challenge}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {current.results.map((r) => (
                <div key={r.label} className="text-center">
                  <p className="font-display text-3xl italic">{r.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-background/40">{r.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {current.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Summary cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {summaryCases.map((sc, i) => (
            <motion.div
              key={sc.client}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="rounded-xl border border-background/10 bg-background/5 p-6"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-background/40">
                <TrendingUp size={12} />
                {sc.client} — {sc.industry}
              </div>
              <h4 className="mt-3 font-display text-lg italic">{sc.headline}</h4>
              <p className="mt-2 text-sm text-background/50">{sc.insight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
