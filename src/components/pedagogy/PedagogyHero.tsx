
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const PedagogyHero = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" 
        initial={{
          opacity: 0,
          y: 20
        }} 
        animate={{
          opacity: 1,
          y: 0
        }} 
        transition={{
          duration: 0.6
        }}
      >
        <h1 className="font-bold mb-6 md:text-4xl text-4xl">
          Our Pedagogy
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-12 md:text-xl text-base">
          Our systematic approach to guide students in developing solutions for real-world problems
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8 w-full max-w-md mx-auto">
          <Link 
            to="build-process" 
            smooth={true} 
            duration={500} 
            offset={-100} 
            className="w-full sm:w-auto min-w-[200px] px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors text-center"
          >
            The Build Process™
          </Link>
          <Link 
            to="ai-tools" 
            smooth={true} 
            duration={500} 
            offset={-100} 
            className="w-full sm:w-auto min-w-[200px] px-6 py-3 bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors text-center"
          >
            AI Tools We Use
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
