
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCircle = () => {
  // Circle animation variants
  const circleVariants = {
    hidden: { 
      pathLength: 0,
      opacity: 0 
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          type: "spring", 
          duration: 2.5,
          bounce: 0 
        },
        opacity: { 
          duration: 0.5 
        }
      }
    }
  };

  return (
    <motion.svg
      className="w-full h-full"
      viewBox="0 0 300 100"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="150"
        cy="50"
        r="45"
        fill="transparent"
        stroke="#E86642"
        strokeWidth="2"
        strokeLinecap="round"
        variants={circleVariants}
        style={{ 
          strokeDasharray: "0.5, 4"
        }}
      />
    </motion.svg>
  );
};

export default AnimatedCircle;
