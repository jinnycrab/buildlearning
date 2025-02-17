import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb, PenTool, Wrench, Rocket, Library, Search, Share, Presentation } from "lucide-react";
import { Link } from "react-scroll";

const Process = () => {
  const handleCategoryFilter = (category: string) => {
    console.log("Filtering by category:", category);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Pedagogy
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our systematic approach to guide students in developing solutions for real-world problems
          </p>
          
          {/* Navigation Buttons */}
          <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-md mx-auto">
            <Link
              to="build-process"
              smooth={true}
              duration={500}
              offset={-100}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-full cursor-pointer hover:bg-accent/90 transition-colors text-lg font-medium w-full"
            >
              <PenTool className="w-5 h-5" />
              The Build Process™
            </Link>
            <Link
              to="ai-tools"
              smooth={true}
              duration={500}
              offset={-100}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent/10 text-accent rounded-full cursor-pointer hover:bg-accent hover:text-white transition-colors text-lg font-medium w-full"
            >
              <Wrench className="w-5 h-5" />
              AI Tools We Use
            </Link>
          </div>
        </motion.div>
      </section>

      {/* The Build Process Section */}
      <section id="build-process" className="py-24 bg-muted">
        <motion.div 
          className="container mx-auto px-8"
          {...fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">The Build Process™</h2>
          
          {/* Brief Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24 bg-white p-12 rounded-2xl shadow-lg">
            <div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                B
              </div>
              <h2 className="text-4xl font-bold mb-6">Brief</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Learn more about a real-world problem. 
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Learn the problem's significance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Explore the multi-faceted nature of the problem</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Define project scope, objectives and expectations</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/placeholder.svg"
                alt="Brief Process"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>

          {/* Understand Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24 bg-white p-12 rounded-2xl shadow-lg">
            <div className="order-2 md:order-1">
              <img 
                src="/placeholder.svg"
                alt="Research Process"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                U
              </div>
              <h2 className="text-4xl font-bold mb-6">Understand</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Deep dive into the problem, target audience and existing solutions by conducting research. 
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Create an interview questionnaire</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Create user personas and develop empathy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Analyze limitations and opportunities from existing solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Innovate Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24 bg-white p-12 rounded-2xl shadow-lg">
            <div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                I
              </div>
              <h2 className="text-4xl font-bold mb-6">Innovate</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Generate creative solutions through group-based ideation workshops.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Share your opportunity and research</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Brainstorm solutions and approaches</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Sketch preliminary ideas</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/placeholder.svg"
                alt="Innovation Process"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>

          {/* Lead Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24 bg-white p-12 rounded-2xl shadow-lg">
            <div className="order-2 md:order-1">
              <img 
                src="/placeholder.svg"
                alt="Leadership Process"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                L
              </div>
              <h2 className="text-4xl font-bold mb-6">Lead</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Take ownership of your solution and prototype it with AI.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Refine & iterate preliminary ideas into MVP</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Consider positioning and marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Create Build-a-Poster™ and Build-a-Demo™ content</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Design Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16 bg-white p-12 rounded-2xl shadow-lg">
            <div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                D
              </div>
              <h2 className="text-4xl font-bold mb-6">Design</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our in-house designers will polish your visual concepts and bring them to life 
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Create high-fidelity prototypes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Develop user interfaces and experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Prepare for sharing and wrap-up</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/placeholder.svg"
                alt="Design Process"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* AI Tools Section */}
      <section id="ai-tools" className="py-24">
        <motion.div 
          className="container mx-auto px-8"
          {...fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">AI Tools We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a 
              href="https://www.lovable.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <Wrench className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Lovable</h4>
              <p className="text-muted-foreground mb-4">
                AI-powered development environment that helps students build web applications through natural language conversations.
              </p>
              <span className="text-accent hover:text-accent/80 text-sm font-medium">
                Learn More →
              </span>
            </a>

            <a 
              href="https://chat.openai.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">ChatGPT</h4>
              <p className="text-muted-foreground mb-4">
                Advanced language model that assists with research, ideation, and problem-solving throughout the development process.
              </p>
              <span className="text-accent hover:text-accent/80 text-sm font-medium">
                Learn More →
              </span>
            </a>

            <a 
              href="https://github.com/features/copilot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <Rocket className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">GitHub Copilot</h4>
              <p className="text-muted-foreground mb-4">
                AI pair programmer that helps students write better code faster through intelligent code suggestions.
              </p>
              <span className="text-accent hover:text-accent/80 text-sm font-medium">
                Learn More →
              </span>
            </a>
          </div>
        </motion.div>
      </section>

      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>
  );
};

export default Process;
