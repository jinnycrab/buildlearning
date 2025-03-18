
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
        width: '320px',
        height: '440px'
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
          className="absolute w-full h-full rounded-xl shadow-lg p-4 backface-hidden"
          style={{ 
            backgroundColor: cardColor,
            background: `linear-gradient(135deg, ${cardColor}cc, ${cardColor}99)`,
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            backfaceVisibility: 'hidden',
            willChange: 'transform',
            overflow: 'hidden'
          }}
        >
          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg h-[75%] overflow-hidden mb-3 shadow-inner border border-white/50">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover rounded-md"
              onError={(e) => {
                console.error(`Error loading image: ${imageSrc}`);
                (e.target as HTMLImageElement).src = '/placeholder.svg';
              }}
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold font-codec text-gray-800 drop-shadow-sm">{title}</h3>
            <p className="font-inter text-base font-medium text-gray-700">{subtitle}</p>
          </div>
        </motion.div>

        {/* Back of card (Content) */}
        <motion.div
          className="absolute w-full h-full p-5 rounded-xl shadow-lg backface-hidden flex flex-col justify-center items-center"
          style={{ 
            backgroundColor: cardColor,
            background: `linear-gradient(135deg, ${cardColor}cc, ${cardColor}99)`,
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            backfaceVisibility: 'hidden',
            willChange: 'transform',
            transform: 'rotateY(180deg)',
            overflow: 'hidden'
          }}
        >
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-inner h-full w-full flex flex-col justify-center border border-white/50">
            <p className="text-gray-700 font-inter text-lg leading-relaxed overflow-y-auto max-h-full">{fullText}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PolaroidCard;
