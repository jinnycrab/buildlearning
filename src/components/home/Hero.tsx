import AnimatedWords from "../AnimatedWords";
const Hero = () => {
  return <section className="text-center max-w-3xl mx-auto mb-16 px-4">
      <h1 className="text-4xl font-bold mb-6 font-general-sans leading-tight px-0 my-0 py-[35px] md:text-5xl">
        Come build a better future for
        <AnimatedWords />
      </h1>
      <p className="text-base md:text-xl text-muted-foreground mb-8 px-4 md:px-0">
        At Build, we solve real-world problems, build portfolios, and prepare for a future in AI and innovation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="w-full sm:w-auto px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors">
          Explore Holiday Camps
        </button>
        <button className="w-full sm:w-auto px-6 py-3 bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors">
          View Student Projects
        </button>
      </div>
    </section>;
};
export default Hero;