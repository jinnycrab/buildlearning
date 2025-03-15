
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
    <div className="border border-gray-200 rounded-full p-4 inline-block">
      <motion.svg
        className="w-20 h-20"
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="50"
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
    </div>
  );
};

export default AnimatedCircle;
