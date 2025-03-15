
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTaglineProps {
  text: string;
}

const AnimatedTagline = ({ text }: AnimatedTaglineProps) => {
  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.h2 
      className="text-4xl md:text-6xl font-bold text-center z-10 font-codec"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={titleVariants}
    >
      {text}
    </motion.h2>
  );
};

export default AnimatedTagline;
