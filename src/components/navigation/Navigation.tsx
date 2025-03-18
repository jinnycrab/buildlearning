
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

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
        <nav className={`rounded-full border border-[#f05127] bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Build Learning</span>
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
              <Button className="bg-[#f05127] hover:bg-[#f05127]/90 text-white rounded-full">
                Let's Chat
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
