
import { Link } from "react-router-dom";

interface FooterProps {
  onCategoryFilter: (category: string) => void;
}

const Footer = ({ onCategoryFilter }: FooterProps) => {
  return (
    <footer className="border-t bg-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 font-general-sans">Holiday Camps</h3>
            <p className="text-muted-foreground">
              Empowering young minds to create meaningful solutions through technology and innovation.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 font-general-sans">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-muted-foreground hover:text-accent">
                  The Build Process™
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-accent">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 font-general-sans">Categories</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onCategoryFilter("coding")}
                  className="text-muted-foreground hover:text-accent"
                >
                  Coding Camps
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onCategoryFilter("arts")}
                  className="text-muted-foreground hover:text-accent"
                >
                  Arts & Crafts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onCategoryFilter("tech")}
                  className="text-muted-foreground hover:text-accent"
                >
                  Tech Workshops
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 font-general-sans">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@holidaycamps.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Innovation Way</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2024 Holiday Camps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
