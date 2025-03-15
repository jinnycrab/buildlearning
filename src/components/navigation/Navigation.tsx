
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

        {!isMobile && (
          <Button className="bg-[#E86642] hover:bg-[#E86642]/90 text-white rounded-full">
            Let's Chat
          </Button>
        )}
      </div>
    </header>
  );
};

export default Navigation;
