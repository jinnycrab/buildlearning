
import AnimatedWords from "../AnimatedWords";

const Hero = () => {
  return (
    <section className="text-center max-w-3xl mx-auto mb-16">
      <h1 className="text-5xl font-bold mb-6 font-general-sans leading-tight">
        Innovate solutions for <AnimatedWords/>
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Solve real-world problems, build your portfolios, and prepare for a future in AI and innovation. 
      </p>
      <div className="flex gap-4 justify-center">
        <button className="px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors">
          Explore Holiday Camps
        </button>
      </div>
    </section>
  );
};

export default Hero;
