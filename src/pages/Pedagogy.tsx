
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb, PenTool, Wrench } from "lucide-react";
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

  const processCards = [
    {
      letter: "B",
      title: "Brief",
      description: "Learn more about a real-world problem.",
      features: [
        "Learn the problem's significance",
        "Explore the multi-faceted nature of the problem",
        "Define project scope, objectives and expectations"
      ],
      image: "/placeholder.svg"
    },
    {
      letter: "U",
      title: "Understand",
      description: "Deep dive into the problem, target audience and existing solutions by conducting research.",
      features: [
        "Create an interview questionnaire",
        "Create user personas and develop empathy",
        "Analyze limitations and opportunities from existing solutions"
      ],
      image: "/placeholder.svg"
    },
    {
      letter: "I",
      title: "Innovate",
      description: "Generate creative solutions through group-based ideation workshops.",
      features: [
        "Share your opportunity and research",
        "Brainstorm solutions and approaches",
        "Sketch preliminary ideas"
      ],
      image: "https://images.unsplash.com/photo-1526378787940-576a539ba69d?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      letter: "L",
      title: "Lead",
      description: "Take ownership of your solution and prototype it with AI.",
      features: [
        "Refine & iterate preliminary ideas into MVP",
        "Consider positioning and marketing",
        "Create Build-a-Poster™ and Build-a-Demo™ content"
      ],
      image: "/placeholder.svg"
    },
    {
      letter: "D",
      title: "Design",
      description: "Our in-house designers will polish your visual concepts and bring them to life.",
      features: [
        "Create high-fidelity prototypes",
        "Develop user interfaces and experiences",
        "Prepare for sharing and wrap-up"
      ],
      image: "/placeholder.svg"
    }
  ];

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
          
          <div className="space-y-8">
            {processCards.map((card, index) => (
              <motion.div
                key={card.letter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6">
                        {card.letter}
                      </div>
                      <h2 className="text-4xl font-bold mb-4">{card.title}</h2>
                      <p className="text-xl text-muted-foreground mb-8">
                        {card.description}
                      </p>
                      <ul className="space-y-4">
                        {card.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="aspect-square w-full overflow-hidden rounded-2xl">
                    <img 
                      src={card.image}
                      alt={`${card.title} Process`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
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
              <Wrench className="w-12 h-12 text-accent mx-auto mb-4" />
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
