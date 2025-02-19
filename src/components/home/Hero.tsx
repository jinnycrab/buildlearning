
import AnimatedWords from "../AnimatedWords";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-center max-w-3xl mx-auto mb-16 px-4">
      <h1 className="text-4xl font-bold mb-6 font-general-sans leading-tight px-0 my-0 py-[35px] md:text-5xl">
        Come build your student portfolio for
        <AnimatedWords />
      </h1>
      <p className="text-base md:text-xl text-muted-foreground mb-6 px-4 md:px-0">
        At Build, students build portfolios solving real-world problems, and prepare
        for a future in AI and innovation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link 
          to="/camps" 
          className="w-full sm:w-auto min-w-[200px] px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors text-center"
        >
          Explore Holiday Camps
        </Link>
        <Link 
          to="/projects" 
          className="w-full sm:w-auto min-w-[200px] px-6 py-3 bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors text-center"
        >
          View Student Projects
        </Link>
      </div>
    </section>
  );
};

export default Hero;
