import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Can I work with X9 Media if I'm not based in your city?",
    answer:
      "Absolutely. We work with clients across the UK, US, India, and the Middle East. Our team operates remotely and we're set up for async collaboration across time zones. Whether your audience is local or global, we've got you covered.",
  },
  {
    question: "I'm not sure which channels to start with. Can you help?",
    answer:
      "That's exactly what our discovery call is for. Whether you need a full overhaul or just need to plug gaps in your funnel, we'll build a strategy that's bespoke for your brand, your budget, and your KPIs. We don't do cookie-cutter — we do what works for you.",
  },
  {
    question: "What makes X9 Media different from other agencies?",
    answer:
      "Three things. First, we're AI-first — we use artificial intelligence across every campaign for targeting, optimization, and content. Second, we operate as an extension of your team, not as a vendor. Third, we're obsessed with measurable results. No vanity metrics. No fluff. If it doesn't move revenue, we don't do it.",
  },
  {
    question: "What's your pricing like?",
    answer:
      "We offer flexible packages designed for businesses at different stages. From startups needing foundational setup to established brands looking to scale aggressively. Book a call and we'll recommend the right package for your goals and budget.",
  },
  {
    question: "What is AI SEO / Answer Engine Optimization?",
    answer:
      "AI SEO (or AEO) is the practice of optimizing your brand's content to be cited and recommended by AI search engines like ChatGPT, Claude, Perplexity, and Gemini. It's the next frontier of search — and most brands aren't doing it yet. We are.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. We offer rolling monthly agreements. We believe in earning your business every month through results, not locking you into lengthy contracts.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">FAQ</span>
          <h2 className="mt-4 text-4xl font-extrabold lg:text-5xl">
            Got questions? <span className="text-gradient-accent">We've got answers.</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-border/50 bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-surface-hover"
                >
                  <span className="text-base font-semibold">{faq.question}</span>
                  {isOpen ? (
                    <Minus size={18} className="shrink-0 text-primary" />
                  ) : (
                    <Plus size={18} className="shrink-0 text-muted-foreground" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
