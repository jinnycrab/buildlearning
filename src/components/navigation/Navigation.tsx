
import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b border-gray-100">
      <div className={`container flex items-center justify-between ${isMobile ? 'py-[22px]' : 'py-[0px]'}`}>
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">Build Learning</span>
        </Link>

        {isMobile ? (
          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              className="ml-auto" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1">
                <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home</Link>
                <Link to="/process" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Process</Link>
                <Link to="/camps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bootcamps</Link>
                <Link to="/projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Projects</Link>
                <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About</Link>
              </div>
            )}
          </div>
        ) : (
          <nav className="flex items-center space-x-8">
            <Link to="/" className="text-primary/80 hover:text-primary transition-colors">Home</Link>
            <Link to="/process" className="text-primary/80 hover:text-primary transition-colors">Our Process</Link>
            <Link to="/camps" className="text-primary/80 hover:text-primary transition-colors">Bootcamps</Link>
            <Link to="/projects" className="text-primary/80 hover:text-primary transition-colors">Projects</Link>
            <Link to="/about" className="text-primary/80 hover:text-primary transition-colors">About</Link>
            <Button className="bg-[#E86642] hover:bg-[#E86642]/90 text-white rounded-full">
              Let's Chat
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
