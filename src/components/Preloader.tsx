import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"counting" | "revealing" | "done">("counting");

  useEffect(() => {
    const duration = 2000;
    const steps = 100;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      // Ease — starts fast, slows near end
      const eased = Math.min(current, 100);
      setCount(eased);

      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => setPhase("revealing"), 300);
        setTimeout(() => {
          setPhase("done");
          onComplete();
        }, 1200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-foreground"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="font-display text-6xl italic text-background sm:text-8xl md:text-9xl">
              X9<span className="not-italic">.Media</span>
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="h-px flex-1 bg-background/20" />
              <span className="font-body text-sm tracking-[0.3em] text-background/60">
                {String(count).padStart(3, "0")}%
              </span>
              <div className="h-px flex-1 bg-background/20" />
            </div>
            <div className="mx-auto mt-4 h-0.5 w-48 overflow-hidden rounded-full bg-background/10">
              <motion.div
                className="h-full bg-primary"
                style={{ width: `${count}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
