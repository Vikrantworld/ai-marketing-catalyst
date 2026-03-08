import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Can I work with X9 Media if I'm not based in your city?",
    answer:
      "Absolutely. We work with clients across the UK, US, India, and the Middle East. Our team operates remotely and we're set up for async collaboration across time zones.",
  },
  {
    question: "I'm not sure which channels to start with. Can you help?",
    answer:
      "That's exactly what our discovery call is for. We'll build a strategy bespoke for your brand, your budget, and your KPIs. We don't do cookie-cutter — we do what works for you.",
  },
  {
    question: "What makes X9 Media different from other agencies?",
    answer:
      "Three things. We're AI-first across every campaign. We operate as an extension of your team, not a vendor. And we're obsessed with measurable results — if it doesn't move revenue, we don't do it.",
  },
  {
    question: "What's your pricing like?",
    answer:
      "We offer flexible packages for businesses at different stages. From startups needing foundational setup to brands looking to scale aggressively. Book a call and we'll recommend the right fit.",
  },
  {
    question: "What is AI SEO / Answer Engine Optimization?",
    answer:
      "AI SEO (AEO) is optimizing your content to be cited by AI search engines like ChatGPT, Claude, Perplexity, and Gemini. It's the next frontier of search — and most brands aren't doing it yet.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. Rolling monthly agreements. We believe in earning your business every month through results, not locking you into contracts.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-foreground" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl tracking-tight lg:text-5xl">
              <span className="font-body font-medium">Got</span>{" "}
              <span className="font-display italic">questions?</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              If you can't find what you're looking for, book a call and we'll walk you through everything.
            </p>
          </motion.div>

          {/* Right — Accordion */}
          <div>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border-b border-border"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-medium">{faq.question}</span>
                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? "bg-foreground text-background" : "bg-surface text-foreground"
                    }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
                      isOpen ? "max-h-48 opacity-100 pb-5" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-muted-foreground pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
