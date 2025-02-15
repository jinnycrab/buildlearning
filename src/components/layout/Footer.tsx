
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
            <h3 className="font-bold text-lg mb-4 font-general-sans">Build Learning Group</h3>
            <p className="text-muted-foreground">
              Singapore's first student incubator for innovators and leaders
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
            <h3 className="font-bold text-lg mb-4 font-general-sans">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@buildlearning.co</li>
              <li>Phone: (65) 6583 9143</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2025 Build Learning Group (C). Developed in Stanford University, USA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
