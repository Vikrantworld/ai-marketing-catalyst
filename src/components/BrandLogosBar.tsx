import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brands = [
  "House of Hits Records",
  "MissPoppins",
  "Endor Labs",
  "NHS",
  "NeoLemon",
  "411 Locals",
  "Pax Market Funds",
];

const BrandLogosBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="border-y border-border/30 py-12">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
        >
          Some of the brands that challenge us.
        </motion.p>
        <div className="overflow-hidden">
          <div className="animate-marquee flex whitespace-nowrap">
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="mx-8 text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-foreground sm:text-xl"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogosBar;
