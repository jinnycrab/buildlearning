
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "../../hooks/use-mobile";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  return <nav className="border-b bg-white sticky top-0 z-50">
      <div className="container flex items-center justify-between py-0">
        <Link to="/" className={`flex items-center gap-3 ${isMobile ? 'pl-4' : 'pl-8'}`}>
          {!isMobile && (
            <img 
              alt="Build Learning Logo" 
              loading="eager" 
              className="h-16 md:h-20 w-auto [image-rendering:crisp-edges] object-cover" 
              src="/lovable-uploads/8aa9c99b-a7c2-4b4a-8af6-19c47e335365.png" 
            />
          )}
          <span className="text-xl font-semibold">
            {isMobile ? "Build Learning Co." : "Build Learning Company"}
          </span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 mr-4" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ marginRight: "1rem" }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 pr-8">
          <Link to="/about" className="text-muted-foreground hover:text-accent flex items-center gap-2">
            About
          </Link>
          <Link to="/process" className="text-muted-foreground hover:text-accent flex items-center gap-2">
            Pedagogy
          </Link>
          <Link to="/resources" className="text-muted-foreground hover:text-accent flex items-center gap-2">
            Resources
          </Link>
          <Link to="/projects" className="text-muted-foreground hover:text-accent flex items-center gap-2">
            Student Projects
          </Link>
          <Link to="/camps" className="text-muted-foreground hover:text-accent flex items-center gap-2">
            Camps
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && <div className="absolute top-full left-0 right-0 bg-white border-b md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/about" className="text-muted-foreground hover:text-accent px-4 py-2" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/process" className="text-muted-foreground hover:text-accent px-4 py-2" onClick={() => setIsMenuOpen(false)}>
                Pedagogy
              </Link>
              <Link to="/resources" className="text-muted-foreground hover:text-accent px-4 py-2" onClick={() => setIsMenuOpen(false)}>
                Resources
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-accent px-4 py-2" onClick={() => setIsMenuOpen(false)}>
                Student Projects
              </Link>
              <Link to="/camps" className="text-muted-foreground hover:text-accent px-4 py-2" onClick={() => setIsMenuOpen(false)}>
                Camps
              </Link>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;
