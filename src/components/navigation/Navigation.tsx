
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import BuildLogo from '/lovable-uploads/85ed0275-0f08-4b17-bc76-90fc15721483.png';

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
