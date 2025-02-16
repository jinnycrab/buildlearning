import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img 
            src="https://raw.githubusercontent.com/jinnycrab/holiday-learn-fun/refs/heads/main/images/1.png" 
            alt="Build Learning Logo" 
            className="h-13 md:h-15 w-auto object-contain [image-rendering:crisp-edges]"
            loading="eager"
          />
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/about" 
            className="text-muted-foreground hover:text-accent flex items-center gap-2"
          >
            About
          </Link>
          <Link 
            to="/process" 
            className="text-muted-foreground hover:text-accent flex items-center gap-2"
          >
            The Build Process™
          </Link>
          <Link 
            to="/blog" 
            className="text-muted-foreground hover:text-accent flex items-center gap-2"
          >
            Blog
          </Link>
          <Link 
            to="/resources" 
            className="text-muted-foreground hover:text-accent flex items-center gap-2"
          >
            Resources
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-accent px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/process" 
                className="text-muted-foreground hover:text-accent px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                The Build Process™
              </Link>
              <Link 
                to="/blog" 
                className="text-muted-foreground hover:text-accent px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/resources" 
                className="text-muted-foreground hover:text-accent px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
