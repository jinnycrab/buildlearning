
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const BuildPortfolio = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-general-sans">
            Build-a-Portfolio™
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stand out from the crowd with your creative output and innovative solutions, while showcasing your thought process and personality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-8 shadow-lg"
          >
            <div className="relative aspect-square w-full mb-8 overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg"
                alt="Build a Poster Example"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
              <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                <h3 className="text-2xl font-bold mb-4 font-general-sans">Build-a-Poster™</h3>
                <p className="text-white/90">
                  Create visually compelling posters that showcase your high-render concept and your research-to-innovation process
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 font-general-sans">Key Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>User & competitor research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Opportunity identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Hero prototype/concept image</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 font-general-sans">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">Research</span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">AI Prompt Engineering</span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">AI Prototyping Tools</span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">Creative Innovation</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-8 shadow-lg"
          >
            <div className="relative aspect-square w-full mb-8 overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg"
                alt="Build a Demo Example"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
              <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                <h3 className="text-2xl font-bold mb-4 font-general-sans">Build-a-Demo™</h3>
                <p className="text-white/90">
                  Create a 2-min demo video or pitch that showcases your storytelling and public speaking skills
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 font-general-sans">Key Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Designing interactive prototypes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Develop marketing & positioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Practice & refine presentation</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 font-general-sans">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">Public Speaking</span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">Marketing</span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">AI Prompt Engineering</span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">Elevator Pitch</span>
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
          <Link
            to="/process"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
          >
            Our Pedagogy
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildPortfolio;
