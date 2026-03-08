import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";

const mainCaseStudies = [
  {
    client: "MissPoppins",
    industry: "Parenting Platform",
    heroMetric: "1K → 10K",
    heroLabel: "Monthly Crunchbase traffic in 3 months",
    challenge:
      "Launch a brand-new parenting coaching platform with zero brand recognition. MissPoppins needed to compete against established players like BabyCenter and What to Expect — not just on Google, but across AI search engines.",
    results: [
      { value: "10x", label: "Traffic Growth" },
      { value: "24%", label: "AI Citation Rate" },
      { value: "200+", label: "Keywords Ranked" },
      { value: "65/mo", label: "Qualified Leads" },
    ],
    services: ["AI SEO / AEO", "Content Strategy", "Technical SEO", "Authority Building"],
  },
  {
    client: "House of Hits Records",
    industry: "Grammy-Winning Music Studio",
    heroMetric: "340%",
    heroLabel: "Increase in artist inquiry forms",
    challenge:
      "Despite 375+ Platinum certifications and an incredible roster, House of Hits was invisible in AI search results. When artists asked ChatGPT \"Who are the best music producers?\" — they weren't showing up.",
    results: [
      { value: "340%", label: "Inquiry Increase" },
      { value: "150+", label: "Keywords Ranked" },
      { value: "Top 3", label: "AI Visibility" },
      { value: "2x", label: "Booking Rate" },
    ],
    services: ["AI SEO / AEO", "Content Production", "Social Media Optimization"],
  },
  {
    client: "411 Locals",
    industry: "Marketing Services Platform",
    heroMetric: "130K+",
    heroLabel: "Leads generated. $13 CPL. 3.5x ROAS.",
    challenge:
      "411 Locals needed to scale lead generation across the US market while maintaining cost efficiency. With a significant monthly PPC budget across Google, Meta, and Bing, the challenge was generating volume without sacrificing quality.",
    results: [
      { value: "130K+", label: "Leads Generated" },
      { value: "$13", label: "Cost Per Lead" },
      { value: "3.5x", label: "ROAS" },
      { value: "37%", label: "CPL Reduction" },
    ],
    services: ["Performance Marketing", "Lead Generation", "Marketing Automation", "CRM Integration"],
  },
];

const summaryCases = [
  {
    client: "Endor Labs",
    industry: "Cybersecurity / DevSecOps",
    headline: "AEO strategy to own \"next-gen security\" in AI search",
    insight: "First mover advantage projected at $5-10M influenced pipeline.",
  },
  {
    client: "Pax Market Funds",
    industry: "FinTech / Proprietary Trading",
    headline: "42% sign-up boost through AI-optimized content",
    insight: "Reached 5,000+ traders through AI-friendly content.",
  },
  {
    client: "NeoLemon",
    industry: "AI Cartoon Generator",
    headline: "AI-powered creative tool positioning",
    insight: "Content and SEO strategy positioning against established AI image gen players.",
  },
];

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCase, setActiveCase] = useState(0);

  const current = mainCaseStudies[activeCase];

  return (
    <section id="our-work" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Work
          </span>
          <h2 className="mt-4 text-4xl font-extrabold lg:text-5xl">
            Results that speak for <span className="text-gradient-accent">themselves.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Real campaigns. Real numbers. No fluff.
          </p>
        </motion.div>

        {/* Case Study Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {mainCaseStudies.map((cs, i) => (
            <button
              key={cs.client}
              onClick={() => setActiveCase(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                activeCase === i
                  ? "bg-primary text-primary-foreground glow-accent"
                  : "border border-border/50 bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {cs.client}
            </button>
          ))}
        </motion.div>

        {/* Active Case Study */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 overflow-hidden rounded-2xl border border-border/50 bg-card"
        >
          <div className="border-b border-border/30 bg-primary/5 p-8 text-center sm:p-12">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {current.client} — {current.industry}
            </p>
            <p className="mt-3 text-5xl font-extrabold text-gradient-accent sm:text-6xl lg:text-7xl">
              {current.heroMetric}
            </p>
            <p className="mt-2 text-lg text-muted-foreground">{current.heroLabel}</p>
          </div>

          <div className="p-8 sm:p-12">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">The Challenge</h3>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {current.challenge}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {current.results.map((r) => (
                <div key={r.label} className="rounded-xl border border-border/40 bg-secondary/40 p-4 text-center">
                  <p className="text-2xl font-extrabold text-foreground">{r.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{r.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {current.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Summary Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {summaryCases.map((sc, i) => (
            <motion.div
              key={sc.client}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="group rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30"
            >
              <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2">
                <TrendingUp size={16} className="text-primary" />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {sc.client} — {sc.industry}
              </p>
              <h4 className="mt-2 text-base font-bold">{sc.headline}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{sc.insight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
