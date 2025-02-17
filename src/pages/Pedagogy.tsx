
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { PenTool, Wrench, CheckCircle2 } from "lucide-react";
import { Link } from "react-scroll";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ProcessCard } from "@/components/pedagogy/ProcessCard";
import { AiTool } from "@/components/pedagogy/AiTool";
import { DotIndicator } from "@/components/pedagogy/DotIndicator";
import { processCards, aiTools } from "@/components/pedagogy/data";

const Process = () => {
  const isMobile = useIsMobile();
  const [buildProcessIndex, setBuildProcessIndex] = useState(0);
  const [aiToolsIndex, setAiToolsIndex] = useState(0);
  
  const [buildProcessRef, buildProcessApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
  });

  const [aiToolsRef, aiToolsApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
  });

  const onBuildProcessSelect = useCallback(() => {
    if (!buildProcessApi) return;
    setBuildProcessIndex(buildProcessApi.selectedScrollSnap());
  }, [buildProcessApi]);

  const onAiToolsSelect = useCallback(() => {
    if (!aiToolsApi) return;
    setAiToolsIndex(aiToolsApi.selectedScrollSnap());
  }, [aiToolsApi]);

  useEffect(() => {
    if (!buildProcessApi) return;
    onBuildProcessSelect();
    buildProcessApi.on("select", onBuildProcessSelect);
    return () => {
      buildProcessApi.off("select", onBuildProcessSelect);
    };
  }, [buildProcessApi, onBuildProcessSelect]);

  useEffect(() => {
    if (!aiToolsApi) return;
    onAiToolsSelect();
    aiToolsApi.on("select", onAiToolsSelect);
    return () => {
      aiToolsApi.off("select", onAiToolsSelect);
    };
  }, [aiToolsApi, onAiToolsSelect]);

  const handleCategoryFilter = (category: string) => {
    console.log("Filtering by category:", category);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const renderProcessCards = () => {
    if (isMobile) {
      return (
        <div className="relative pb-8">
          <Carousel ref={buildProcessRef} className="w-full">
            <CarouselContent className="-ml-4">
              {processCards.map((card, index) => (
                <CarouselItem key={card.letter} className="pl-4 basis-[85%] min-w-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl shadow-lg h-[calc(100vh-320px)] overflow-y-auto mb-8"
                  >
                    <ProcessCard {...card} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center mt-6">
            {processCards.map((_, index) => (
              <DotIndicator
                key={index}
                selected={index === buildProcessIndex}
                onClick={() => buildProcessApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-8">
        {processCards.map((card, index) => (
          <motion.div
            key={card.letter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {card.letter}
                </div>
                <h2 className="text-2xl font-bold mb-3">{card.title}</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  {card.description}
                </p>
                <ul className="space-y-3">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-video w-full overflow-hidden rounded-xl">
                  <img 
                    src={card.image}
                    alt={`${card.title} Process`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  const renderAiTools = () => {
    if (isMobile) {
      return (
        <div className="relative pb-8">
          <Carousel ref={aiToolsRef} className="w-full">
            <CarouselContent className="-ml-4">
              {aiTools.map((tool, index) => (
                <CarouselItem key={tool.title} className="pl-4 basis-[85%] min-w-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-md text-center h-[420px] flex flex-col mb-8"
                  >
                    <AiTool {...tool} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center mt-6">
            {aiTools.map((_, index) => (
              <DotIndicator
                key={index}
                selected={index === aiToolsIndex}
                onClick={() => aiToolsApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {aiTools.map((tool) => (
          <AiTool key={tool.title} {...tool} />
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
              className="inline-flex items-center justify-center gap-2 px

-8 py-4 bg-accent text-white rounded-full cursor-pointer hover:bg-accent/90 transition-colors text-lg font-medium w-full"
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
          <h2 className="text-4xl font-bold mb-4 text-center">The Build Process™</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our proven methodology that guides students through the journey of creating innovative solutions to real-world problems
          </p>
          {renderProcessCards()}
        </motion.div>
      </section>

      {/* AI Tools Section */}
      <section id="ai-tools" className="py-24">
        <motion.div 
          className="container mx-auto px-4 md:px-8"
          {...fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">AI Tools We Use</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Cutting-edge AI tools that empower our students to learn, create, and innovate more effectively
          </p>
          {renderAiTools()}
        </motion.div>
      </section>

      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>
  );
};

export default Process;
