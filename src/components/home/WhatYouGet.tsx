
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const BuildPortfolio = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-bold mb-6 font-general-sans md:text-4xl text-4xl">
          What You Get
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base">
          Every project portfolio will culminate in a poster of your creative output and a video of you presenting your idea
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-background rounded-xl p-6 shadow-lg"
        >
          <div className="flex gap-6 mb-6">
            <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Build a Poster Example"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 font-general-sans">Build-a-Poster™</h3>
              <p className="text-muted-foreground text-sm">
                Create visually compelling posters that showcase your high-render concept and your research-to-innovation process
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-base font-semibold mb-2 font-general-sans">Key Features</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">User & competitor research</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Opportunity identification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Hero prototype/concept image</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-2 font-general-sans">Core Skills</h4>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xs">Research</span>
                <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xs">AI Prompt Engineering</span>
                <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xs">AI Prototyping Tools</span>
                <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xs">Creative Innovation</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-background rounded-xl p-6 shadow-lg"
        >
          <div className="flex gap-6 mb-6">
            <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Build a Demo Example"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 font-general-sans">Build-a-Demo™</h3>
              <p className="text-muted-foreground text-sm">
                Create a 2-min demo video or pitch that showcases your storytelling and public speaking skills
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-base font-semibold mb-2 font-general-sans">Key Features</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Designing interactive prototypes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Develop marketing & positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Practice & refine presentation</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-2 font-general-sans">Core Skills</h4>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xs">Public Speaking</span>
                <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xs">Marketing</span>
                <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xs">AI Prompt Engineering</span>
                <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xs">Elevator Pitch</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/projects"
            className="w-full sm:w-auto min-w-[200px] px-6 py-3 bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors text-center"
          >
            View Student Projects
          </Link>
          <Link
            to="/process"
            className="w-full sm:w-auto min-w-[200px] px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors text-center"
          >
            Our Pedagogy
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default BuildPortfolio;
