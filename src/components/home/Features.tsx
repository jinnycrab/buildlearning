
import { Sparkles, Code, Users } from "lucide-react";

const Features = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="bg-white rounded-2xl p-6 text-center">
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-2 font-general-sans">Real-world problems</h3>
        <p className="text-muted-foreground">
          Develop innovative solutions for carefully curated real-world problems
        </p>
      </div>
      <div className="bg-white rounded-2xl p-6 text-center">
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Code className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-2 font-general-sans">Build your student portfolio</h3>
        <p className="text-muted-foreground">
          Showcase your potential through your projects and innovative solutions 
        </p>
      </div>
      <div className="bg-white rounded-2xl p-6 text-center">
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-2 font-general-sans">Innovate using AI tools</h3>
        <p className="text-muted-foreground">
          Our industry trainers guide you to use various AI tools to research and prototype
        </p>
      </div>
    </section>
  );
};

export default Features;
