import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import WhatWeDo from "../components/home/WhatWeDo";
import CampList from "../components/camps/CampList";
import WhatYouGet from "../components/home/WhatYouGet";
import { motion } from "framer-motion";
import { AiTool } from "../components/pedagogy/AiTool";
import { aiTools } from "../components/pedagogy/data";
import { PersonaCard } from "../components/personas/PersonaCard";
import { userPersonas } from "../components/personas/data";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const isMobile = useIsMobile();
  const [personaIndex, setPersonaIndex] = useState(0);
  const [aiToolIndex, setAiToolIndex] = useState(0);
  const [personaRef, personaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false
  });
  const [aiToolRef, aiToolApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false
  });

  const onPersonaSelect = useCallback(() => {
    if (!personaApi) return;
    setPersonaIndex(personaApi.selectedScrollSnap());
  }, [personaApi]);

  const onAiToolSelect = useCallback(() => {
    if (!aiToolApi) return;
    setAiToolIndex(aiToolApi.selectedScrollSnap());
  }, [aiToolApi]);

  useEffect(() => {
    if (!personaApi) return;
    onPersonaSelect();
    personaApi.on("select", onPersonaSelect);
    return () => {
      personaApi.off("select", onPersonaSelect);
    };
  }, [personaApi, onPersonaSelect]);

  useEffect(() => {
    if (!aiToolApi) return;
    onAiToolSelect();
    aiToolApi.on("select", onAiToolSelect);
    return () => {
      aiToolApi.off("select", onAiToolSelect);
    };
  }, [aiToolApi, onAiToolSelect]);

  const camps = [{
    id: 1,
    title: "Building for Health & Wellbeing",
    description: "Innovate around mental wellbeing, healthcare accessibility & efficiency, patient and caregiver support and many more",
    duration: "6 weeks",
    capacity: "8 students / class",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    formLink: "https://forms.gle/your-form-link-1"
  }, {
    id: 2,
    title: "Building for Sustainability",
    description: "Innovate solutions to improve environmental sustainability and social responsibility",
    duration: "6 weeks",
    capacity: "8 students / class",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
    formLink: "https://forms.gle/your-form-link-2"
  }, {
    id: 3,
    title: "Building for Youth & Education",
    description: "Innovate for education accessibility, improving student engagement, personalized learning, financial literacy and many more",
    duration: "6 weeks",
    capacity: "8 students / class",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
    formLink: "https://forms.gle/your-form-link-3"
  }];

  const handleCategoryFilter = (category: string) => {
    console.log("Filtering by category:", category);
  };

  const renderPersonaCards = () => {
    if (isMobile) {
      return <div className="relative pb-12">
          <Carousel ref={personaRef} className="w-full">
            <CarouselContent className="-ml-4">
              {userPersonas.map((persona, index) => <CarouselItem key={persona.title} className="pl-4 basis-[85%] min-w-0 py-[16px]">
                  <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="w-full">
                    <PersonaCard {...persona} />
                  </motion.div>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-end gap-3 mt-6 px-4 absolute bottom-0 right-0">
            <Button variant="outline" size="icon" onClick={() => personaApi?.scrollPrev()} disabled={personaIndex === 0} className="h-10 w-10 rounded-full border-2 touch-manipulation">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => personaApi?.scrollNext()} disabled={personaIndex === userPersonas.length - 1} className="h-10 w-10 rounded-full border-2 touch-manipulation">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>;
    }
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
        {userPersonas.map((persona, index) => <motion.div key={persona.title} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: index * 0.1
      }} viewport={{
        once: true
      }} className="w-full">
            <PersonaCard {...persona} />
          </motion.div>)}
      </div>;
  };

  const renderAiTools = () => {
    if (isMobile) {
      return <div className="relative pb-12 py-0">
          <Carousel ref={aiToolRef} className="w-full">
            <CarouselContent className="-ml-4">
              {aiTools.map((tool, index) => <CarouselItem key={tool.title} className="pl-4 basis-[85%] min-w-0">
                  <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow h-[calc(100vh-320px)] overflow-y-auto mb-8">
                    <AiTool {...tool} />
                  </motion.div>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-end gap-2 mt-4 px-4">
            <Button variant="outline" size="icon" onClick={() => aiToolApi?.scrollPrev()} disabled={aiToolIndex === 0} className="h-8 w-8 rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => aiToolApi?.scrollNext()} disabled={aiToolIndex === aiTools.length - 1} className="h-8 w-8 rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>;
    }
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {aiTools.map(tool => <motion.div key={tool.title} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <AiTool {...tool} />
          </motion.div>)}
      </div>;
  };

  return <div className="min-h-screen">
      <Navigation />
      <div className="bg-white py-[96px]">
        <Hero />
      </div>
      
      <section className="py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-general-sans md:text-4xl">
            What We Do
          </h2>
          <WhatWeDo />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
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
        }}>
            <h2 className="font-bold mb-4 text-center text-4xl">Who Is Build For?</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-base">A platform to build meaningful projects and portfolios, for all students aged 15+</p>
            {renderPersonaCards()}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <WhatYouGet />
      </section>
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
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
        }}>
            <h2 className="font-bold mb-4 text-center text-4xl">AI Tools We Use</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-base">Thrive in the age of AI with exposure to latest AI tools</p>
            {renderAiTools()}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center font-general-sans md:text-4xl">
            Our 2025 Camps
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our 2025 theme is "Social Innovation", and we have curated 4 themes around Health, Sustainability, Education and Culture. Join us to build something meaningful today.
          </p>
          <CampList camps={camps} />
          <div className="flex justify-center mt-12">
            <Link to="/camps">
              <Button variant="default" className="bg-accent hover:bg-accent/90 text-white w-[200px]">
                See More Camps
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>;
};

export default Index;
