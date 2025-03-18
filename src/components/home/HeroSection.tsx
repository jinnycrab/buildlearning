
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative pt-40 md:pt-48 pb-32 overflow-hidden rounded-3xl">
      {/* Vignette overlay for hero section */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-100 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/50 pointer-events-none"></div>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white to-transparent pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-100 via-gray-100/90 to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent via-white to-white pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center max-w-4xl mx-auto">
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8" style={{
            fontFamily: 'Codec Pro, sans-serif'
          }} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
            <span className="text-gray-800">
              Build a Digital Product
            </span>
            <br />
            <span className="text-gray-800">in just 2 Hours</span>
          </motion.h1>
          
          <motion.p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto" style={{
            fontFamily: 'Biome Light, sans-serif'
          }} initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }}>
            Experience AI-powered design thinking and innovation 
            <span className="relative inline-block mx-2">
              <span className="relative z-10">in our 2-hour bootcamp</span>
              <motion.span className="absolute bottom-1 left-0 right-0 h-3 bg-[#f05127]/30 -z-0" initial={{
                width: 0
              }} animate={{
                width: "100%"
              }} transition={{
                duration: 0.8,
                delay: 0.8
              }} />
            </span>
            and build something today.
          </motion.p>
          
          <motion.div className="flex justify-center" initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }}>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f05127] via-[#1f69ad] to-[#93ce98] opacity-80 group-hover:opacity-100 blur-sm group-hover:blur transition-all duration-300"></div>
              
              <motion.div 
                animate={{ 
                  background: [
                    'linear-gradient(90deg, #f05127 0%, #1f69ad 50%, #93ce98 100%)',
                    'linear-gradient(90deg, #93ce98 0%, #f9c131 50%, #f05127 100%)',
                    'linear-gradient(90deg, #1f69ad 0%, #93ce98 50%, #f9c131 100%)',
                    'linear-gradient(90deg, #f05127 0%, #1f69ad 50%, #93ce98 100%)'
                  ] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="absolute inset-0 rounded-full opacity-40 group-hover:opacity-60"
              />
              
              <Button asChild className="relative px-8 py-7 text-lg rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-xl text-white font-medium hover:bg-white/20 transition-all duration-300 z-10">
                <Link to="/camps">
                  Build Something Today!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
