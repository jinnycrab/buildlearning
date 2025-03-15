
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div 
            className="inline-block px-4 py-2 mb-6 rounded-full text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#E86642]" />
              <span className="text-[#E86642]">Build Something Today!</span>
              <Sparkles className="h-4 w-4 text-[#E86642]" />
            </div>
          </motion.div>
          
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
            className="flex flex-col sm:flex-row justify-center gap-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-[#E86642] hover:bg-[#E86642]/90 text-white rounded-full py-7 px-8 text-lg flex items-center gap-2 shadow-lg shadow-[#E86642]/20">
                <Link to="/camps">
                  Join our next bootcamp!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="border-[#4D88C4] text-[#4D88C4] rounded-full py-7 px-8 hover:bg-[#4D88C4]/10 text-lg flex items-center gap-2">
                <Link to="#contact">
                  Contact us
                  <Zap className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Feature Icons */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { 
              icon: <Cpu className="h-8 w-8 text-[#E86642]" />, 
              title: "AI-Powered", 
              description: "Learn to harness AI for innovation" 
            },
            { 
              icon: <Zap className="h-8 w-8 text-[#4D88C4]" />, 
              title: "Just 2 Hours", 
              description: "Condense months of learning into hours" 
            },
            { 
              icon: <Sparkles className="h-8 w-8 text-[#8CC084]" />, 
              title: "Build Real Products", 
              description: "Create solutions for real problems" 
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-gray-50">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 font-codec">{feature.title}</h3>
                <p className="text-gray-600 font-biome">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
