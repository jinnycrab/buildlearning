
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BorderedSection from '../layout/BorderedSection';

const HeroSection = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 overflow-hidden bg-[#ffffff]">
      <div className="container mx-auto px-4 relative">
        <BorderedSection className="border-black border-2" backgroundColor="#f8eec4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E86642] via-[#E86642] to-[#FF8E71]">
                Build an AI Digital Product
              </span>
              <br />
              <span className="text-gray-800">in just 2 Hours</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto" 
              style={{ fontFamily: 'Biome Light, sans-serif' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Experience AI-powered design thinking and innovation 
              <span className="relative inline-block mx-2">
                <span className="relative z-10">in our 2-hour bootcamp</span>
                <motion.span 
                  className="absolute bottom-1 left-0 right-0 h-3 bg-[#F4D365]/30 -z-0" 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
              and build a real prototype that solves real problems.
            </motion.p>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="bg-[#1f69ad] hover:bg-[#1f69ad]/90 text-white rounded-full py-7 px-8 text-lg flex items-center gap-2 shadow-lg shadow-[#1f69ad]/20">
                  <Link to="/camps">
                    Join our next bootcamp!
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </BorderedSection>
      </div>
    </section>
  );
};

export default HeroSection;
