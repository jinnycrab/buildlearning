
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["healthcare", "technology", "education", "culture", "design"];

const AnimatedWords = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-block w-full">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{
            y: 40,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          exit={{
            y: -40,
            opacity: 0
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
          className="block text-accent font-general-sans text-4xl md:text-5xl font-bold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default AnimatedWords;
