
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
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%]"
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
          filter: "url(#chalk-texture)",
          strokeDasharray: "0.5, 4"
        }}
      />
      {/* Filter for chalk-like effect */}
      <defs>
        <filter id="chalk-texture" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </defs>
    </motion.svg>
  );
};

export default AnimatedCircle;
