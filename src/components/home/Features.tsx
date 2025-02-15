
import { Sparkles, Code, Users } from "lucide-react";

const Features = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="bg-white rounded-2xl p-6 text-center">
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-2 font-general-sans">Real Projects</h3>
        <p className="text-muted-foreground">
          Work on actual problems and create solutions that matter in the real world.
        </p>
      </div>
      <div className="bg-white rounded-2xl p-6 text-center">
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Code className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-2 font-general-sans">Build Your Portfolio</h3>
        <p className="text-muted-foreground">
          Create impressive projects that showcase your skills to future opportunities.
        </p>
      </div>
      <div className="bg-white rounded-2xl p-6 text-center">
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-2 font-general-sans">Expert Mentorship</h3>
        <p className="text-muted-foreground">
          Learn from industry professionals who guide you through your learning journey.
        </p>
      </div>
    </section>
  );
};

export default Features;
