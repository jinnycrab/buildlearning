
import { Sparkles, Code, Users } from "lucide-react";

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-2 font-general-sans">Solve real-world problems</h3>
        <p className="text-muted-foreground">
          Students develop innovations for carefully curated real-world problems
        </p>
      </div>
      <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Code className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-2 font-general-sans">Build your student portfolio</h3>
        <p className="text-muted-foreground">
          Showcase your potential through your projects, supported by Build's designers 
        </p>
      </div>
      <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-2 font-general-sans">Innovate using AI tools</h3>
        <p className="text-muted-foreground">
          Students learn how to use AI tools for research and prototyping
        </p>
      </div>
    </div>
  );
};

export default Features;
