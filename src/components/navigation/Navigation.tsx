
const Navigation = () => {
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Untitled design.svg" className="h-10" /> {/* Adjust height as needed */}
        </Link>
        <div className="flex items-center gap-6">
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
      </div>
    </nav>
  );
};

export default Navigation;
