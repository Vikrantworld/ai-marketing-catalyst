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
    <section ref={ref} className="py-16">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center font-display text-lg italic text-muted-foreground"
        >
          Some of the brands that challenge us.
        </motion.p>
        <div className="overflow-hidden border-y border-border py-6">
          <div className="animate-marquee flex whitespace-nowrap">
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="mx-10 text-xl font-medium text-foreground/30 transition-colors hover:text-foreground sm:text-2xl"
              >
                {brand}
                <span className="ml-10 text-primary">●</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogosBar;
