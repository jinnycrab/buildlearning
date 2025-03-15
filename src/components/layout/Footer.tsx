import { Link } from "react-router-dom";
interface FooterProps {
  onCategoryFilter?: (category: string) => void;
}
const Footer = ({
  onCategoryFilter
}: FooterProps) => {
  return <footer className="border-t bg-white">
      <div className="container py-12">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="w-full md:w-1/4">
            <h3 className="font-bold text-lg mb-4 font-general-sans">Build Learning Pte Ltd</h3>
            <p className="text-sm text-muted-foreground">Reimagining innovation and design thinking education for all, powered by good pedagogical design and relevance in the future of AI. </p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="font-bold text-lg mb-4 font-general-sans">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-sm text-muted-foreground hover:text-accent">
                  Pedagogy
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground hover:text-accent">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-muted-foreground hover:text-accent">
                  Student Projects
                </Link>
              </li>
              <li>
                <Link to="/camps" className="text-sm text-muted-foreground hover:text-accent">
                  Camps
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="font-bold text-lg mb-4 font-general-sans">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Email: info@buildlearning.co</li>
              <li className="text-sm text-muted-foreground">Contact: (65) 8223 2551</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© Build Learning Pte Ltd 2025. Program developed in Stanford University, USA. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;