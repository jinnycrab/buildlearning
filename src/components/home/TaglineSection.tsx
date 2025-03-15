
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Shape component for consistent styling
interface ShapeProps {
  color: string;
  size: number;
  initialX: number;
  initialY: number;
  delayFactor: number;
  type: 'circle' | 'square' | 'triangle';
}

const Shape: React.FC<ShapeProps> = ({ color, size, initialX, initialY, delayFactor, type }) => {
  // Animation variants
  const variants = {
    initial: { 
      y: initialY - 100, 
      x: initialX,
      opacity: 0,
      rotate: Math.random() * 45 - 22.5, // Random initial rotation
    },
    animate: { 
      y: initialY,
      x: initialX + (Math.random() * 20 - 10), // Slight random horizontal movement
      opacity: 1,
      rotate: 0,
      transition: { 
        duration: 1.2,
        delay: delayFactor * 0.2,
        type: "spring",
        stiffness: 50
      }
    },
    hover: {
      y: [initialY, initialY - 10, initialY],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Render different shape types
  const renderShape = () => {
    switch(type) {
      case 'circle':
        return (
          <div 
            className={`rounded-full ${color}`} 
            style={{ width: size, height: size }}
          />
        );
      case 'square':
        return (
          <div 
            className={`${color}`} 
            style={{ width: size, height: size }}
          />
        );
      case 'triangle':
        return (
          <div 
            className={`${color} w-0 h-0`} 
            style={{ 
              borderLeft: `${size/2}px solid transparent`,
              borderRight: `${size/2}px solid transparent`,
              borderBottom: `${size}px solid currentColor`
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="absolute pointer-events-none"
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={variants}
    >
      {renderShape()}
    </motion.div>
  );
};

const TaglineSection = () => {
  // Reference for the container
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Define shapes with their properties
  const shapes = [
    // Blue shapes
    { color: "bg-blue-400", size: 16, initialX: '10%', initialY: -30, delayFactor: 1, type: 'square' as const },
    { color: "bg-blue-500", size: 12, initialX: '30%', initialY: 20, delayFactor: 3, type: 'circle' as const },
    { color: "bg-blue-300", size: 18, initialX: '80%', initialY: 40, delayFactor: 5, type: 'square' as const },
    
    // Green shapes
    { color: "bg-green-400", size: 20, initialX: '20%', initialY: -50, delayFactor: 0, type: 'triangle' as const },
    { color: "bg-green-500", size: 10, initialX: '60%', initialY: -40, delayFactor: 2, type: 'circle' as const },
    { color: "bg-green-300", size: 16, initialX: '85%', initialY: 60, delayFactor: 4, type: 'triangle' as const },
    
    // Yellow shapes
    { color: "bg-yellow-400", size: 18, initialX: '25%', initialY: -60, delayFactor: 2, type: 'triangle' as const },
    { color: "bg-yellow-500", size: 14, initialX: '70%', initialY: -30, delayFactor: 4, type: 'square' as const },
    { color: "bg-yellow-300", size: 10, initialX: '75%', initialY: 30, delayFactor: 1, type: 'circle' as const },
  ];

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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div 
        className="container mx-auto px-4 relative h-[300px] md:h-[400px] flex flex-col items-center justify-center"
        ref={containerRef}
      >
        {/* Shapes */}
        {shapes.map((shape, index) => (
          <Shape 
            key={index}
            color={shape.color}
            size={shape.size}
            initialX={typeof shape.initialX === 'string' ? 
              parseFloat(shape.initialX) / 100 * (containerRef.current?.offsetWidth || 1000) : 
              shape.initialX
            }
            initialY={shape.initialY}
            delayFactor={shape.delayFactor}
            type={shape.type}
          />
        ))}

        {/* Main content */}
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center z-10 mb-8 font-general-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
        >
          Build Something Today!
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          variants={buttonVariants}
        >
          <Link 
            to="/camps" 
            className="px-8 py-4 bg-brand-orange text-white rounded-full font-medium hover:bg-brand-orange/90 transition-colors text-center text-lg shadow-md"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TaglineSection;
