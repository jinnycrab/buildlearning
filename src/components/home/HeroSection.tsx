
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative pt-40 md:pt-48 pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-codec font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gray-800">
              Build a Digital Product
            </span>
            <br />
            <span className="text-gray-800">in just 2 Hours</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-biome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
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
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button asChild className="bg-[#1f69ad] hover:bg-[#1f69ad]/90 text-white rounded-full py-7 px-8 text-lg flex items-center gap-2 shadow-lg shadow-[#1f69ad]/20">
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
