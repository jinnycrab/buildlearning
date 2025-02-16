
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["healthcare", "technology", "mental wellness", "education", "design"];

const AnimatedWords = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[80px] flex items-center justify-center relative overflow-hidden inline-flex mx-auto">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-accent whitespace-nowrap absolute left-1/2 -translate-x-1/2"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedWords;
