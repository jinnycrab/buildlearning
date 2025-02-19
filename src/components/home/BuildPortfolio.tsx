import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
const BuildPortfolio = () => {
  return <div className="container mx-auto px-4">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} viewport={{
      once: true
    }} className="text-center mb-12">
        <h2 className="font-bold mb-6 font-general-sans md:text-4xl text-4xl">What You Get</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base">Every project portfolio will culminate in a poster of your creative output and a video of you presenting your idea</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} whileInView={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} viewport={{
        once: true
      }} className="bg-background rounded-2xl p-8 shadow-lg">
          <div className="relative aspect-square w-full mb-8 overflow-hidden rounded-xl">
            <img src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Build a Poster Example" className="w-full h-full object-cover" />
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

        <motion.div initial={{
        opacity: 0,
        x: 20
      }} whileInView={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} viewport={{
        once: true
      }} className="bg-background rounded-2xl p-8 shadow-lg">
          <div className="relative aspect-square w-full mb-8 overflow-hidden rounded-xl">
            <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Build a Demo Example" className="w-full h-full object-cover" />
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

      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 0.6
    }} viewport={{
      once: true
    }} className="text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/projects" className="w-full sm:w-auto min-w-[200px] px-6 py-3 bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors text-center">
            View Student Projects
          </Link>
          <Link to="/process" className="w-full sm:w-auto min-w-[200px] px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors text-center">
            Our Pedagogy
          </Link>
        </div>
      </motion.div>
    </div>;
};
export default BuildPortfolio;