
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import BuildLogo from '/lovable-uploads/85ed0275-0f08-4b17-bc76-90fc15721483.png';
import { motion } from 'framer-motion';

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-12 left-0 right-0 z-50 px-8 transition-all duration-300 ${isScrolled ? 'top-8' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-full overflow-hidden">
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
            className="absolute inset-0 rounded-full opacity-100"
          />
          <nav className="relative rounded-full bg-white/90 backdrop-blur-sm m-[1px] px-6 py-4 flex items-center justify-between transition-all duration-300 z-10">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={BuildLogo}
                alt="Build Learning Logo" 
                className="h-14 w-14"
              />
              <div className="flex flex-col leading-none">
                <span className="font-codec text-lg font-bold text-primary">Build</span>
                <span className="font-codec text-lg font-bold text-primary">Learning</span>
              </div>
            </Link>

            {!isMobile && (
              <div className="flex items-center space-x-8">
                <Link to="/schools" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Schools
                </Link>
                <Link to="/corporate" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Corporate
                </Link>
                <Link to="/individuals" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Individuals
                </Link>
                <Button className="bg-black hover:bg-black/90 text-white rounded-full">
                  Let's Chat
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
