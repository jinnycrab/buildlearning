import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb, PenTool, Wrench } from "lucide-react";
import { Link } from "react-scroll";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const DotButton = ({ selected, onClick }: { selected: boolean; onClick: () => void }) => (
  <button
    className={`w-2 h-2 rounded-full mx-1 transition-colors ${
      selected ? "bg-accent" : "bg-accent/30"
    }`}
    onClick={onClick}
  />
);

const Process = () => {
  const isMobile = useIsMobile();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

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
      description: "Be introduced to a real-world problem",
      features: [
        "Learn about the problem's significance",
        "Explore the multi-faceted nature of the problem",
        "Define project scope, objectives and expectations"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      letter: "U",
      title: "Understand",
      description: "Conduct research to deep dive into the problem",
      features: [
        "Create target audience and user personas",
        "Analyze existing solutions and their limitations",
        "Connect pain points with opportunity spaces"
      ],
      image: "https://jnj-content-lab2.brightspotcdn.com/dims4/default/30ca596/2147483647/strip/false/crop/5097x2867+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fjnj-content-lab.brightspotcdn.com%2F20%2F7c%2F79af88a4474d8536bce688017114%2Fgettyimages-1144750331.jpg"
    },
    {
      letter: "I",
      title: "Innovate",
      description: "Brainstorm solutions in ideations workshops",
      features: [
        "Share your opportunity and research findings",
        "Define how-might-we statements to trigger ideation",
        "Sketch and propose preliminary solutions"
      ],
      image: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      letter: "L",
      title: "Lead",
      description: "Refine your solution and prototype with AI",
      features: [
        "Refine and iterate preliminary ideas into MVP",
        "Consider product positioning and marketing",
        "Create Build-a-Poster™ and Build-a-Demo™ content"
      ],
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      letter: "D",
      title: "Design",
      description: "Our in-house designers bring them to life",
      features: [
        "Designers polish your high-fidelity prototypes",
        "Trainers consult on poster and demo video content",
        "Students prepare for sharing and project wrap-up"
      ],
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const renderProcessCards = () => {
    if (isMobile) {
      return (
        <div className="relative pb-8">
          <Carousel ref={emblaRef} className="w-full">
            <CarouselContent className="-ml-4">
              {processCards.map((card, index) => (
                <CarouselItem key={card.letter} className="pl-4 basis-[85%] min-w-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl shadow-lg h-[calc(100vh-280px)] overflow-y-auto"
                  >
                    <div className="flex flex-col h-full">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                        {card.letter}
                      </div>
                      <h2 className="text-2xl font-bold mb-3">{card.title}</h2>
                      <p className="text-lg text-muted-foreground mb-4">
                        {card.description}
                      </p>
                      <div className="aspect-video w-full overflow-hidden rounded-xl mb-4">
                        <img 
                          src={card.image}
                          alt={`${card.title} Process`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <ul className="space-y-3">
                        {card.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center mt-6">
            {processCards.map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      );
    }

    return (
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
            <div className="grid md:grid-cols-2 gap-8 items-center min-h-[500px]">
              <div className="flex flex-col justify-center h-full">
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
    );
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
          className="container mx-auto px-4 md:px-8"
          {...fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">The Build Process™</h2>
          {renderProcessCards()}
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
