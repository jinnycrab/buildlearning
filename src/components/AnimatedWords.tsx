
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["sustainability", "public health", "technology"];

const AnimatedWords = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[40px] relative overflow-hidden inline-block min-w-[200px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute text-accent whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedWords;

