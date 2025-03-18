
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PolaroidCardProps {
  title: string;
  subtitle: string;
  fullText: string;
  imageSrc: string;
  cardColor: string;
  rotation?: number;
  scale?: number;
}

const PolaroidCard: React.FC<PolaroidCardProps> = ({ 
  title, 
  subtitle, 
  fullText, 
  imageSrc,
  cardColor,
  rotation = 0,
  scale = 1
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="relative perspective-1000 cursor-pointer hover:z-10"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: scale }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ 
        transform: `rotate(${rotation}deg)`, 
        transformStyle: 'preserve-3d',
        maxWidth: '350px',
        height: '450px'
      }}
      whileHover={{ scale: scale * 1.05, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
        onClick={flipCard}
      >
        {/* Front of card (Polaroid style) */}
        <motion.div
          className={`absolute w-full h-full rounded-xl shadow-lg p-4 ${cardColor} backface-hidden`}
          style={{ 
            backfaceVisibility: 'hidden',
            willChange: 'transform',
            overflow: 'hidden'
          }}
        >
          <div className="bg-white p-3 rounded-lg h-[80%] overflow-hidden mb-3">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold font-codec">{title}</h3>
            <p className="font-inter text-sm font-medium opacity-80">{subtitle}</p>
          </div>
        </motion.div>

        {/* Back of card (Content) */}
        <motion.div
          className={`absolute w-full h-full p-5 rounded-xl shadow-lg ${cardColor} backface-hidden flex flex-col justify-center items-center text-center`}
          style={{ 
            backfaceVisibility: 'hidden',
            willChange: 'transform',
            transform: 'rotateY(180deg)',
            overflow: 'hidden'
          }}
        >
          <div className="bg-white/90 p-6 rounded-lg shadow-inner h-full w-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-3 font-codec">{title}</h3>
            <p className="text-lg mb-2 font-inter">{subtitle}</p>
            <p className="text-muted-foreground text-sm mt-2 font-inter">{fullText}</p>
            <p className="mt-4 text-sm font-medium italic text-muted-foreground">Click to flip back</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PolaroidCard;
