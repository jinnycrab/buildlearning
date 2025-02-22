
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { PersonaCard } from "./PersonaCard";
import { UserPersona } from "./types";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface PersonaSectionProps {
  personas: UserPersona[];
}

export const PersonaSection = ({ personas }: PersonaSectionProps) => {
  const isMobile = useIsMobile();
  const [personaIndex, setPersonaIndex] = useState(0);
  const [personaRef, personaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false
  });

  const onPersonaSelect = useCallback(() => {
    if (!personaApi) return;
    setPersonaIndex(personaApi.selectedScrollSnap());
  }, [personaApi]);

  useEffect(() => {
    if (!personaApi) return;
    onPersonaSelect();
    personaApi.on("select", onPersonaSelect);
    return () => {
      personaApi.off("select", onPersonaSelect);
    };
  }, [personaApi, onPersonaSelect]);

  if (isMobile) {
    return (
      <div className="relative pb-12">
        <Carousel ref={personaRef} className="w-full">
          <CarouselContent className="-ml-4">
            {personas.map((persona, index) => (
              <CarouselItem key={persona.title} className="pl-4 basis-[85%] min-w-0">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-[calc(100vh-320px)]"
                >
                  <PersonaCard {...persona} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-end gap-3 mt-6 px-4 absolute bottom-0 right-0">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => personaApi?.scrollPrev()} 
            disabled={personaIndex === 0} 
            className="h-10 w-10 rounded-full border-2 touch-manipulation"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => personaApi?.scrollNext()} 
            disabled={personaIndex === personas.length - 1} 
            className="h-10 w-10 rounded-full border-2 touch-manipulation"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1400px] mx-auto px-4 md:px-8">
        {personas.map((persona, index) => (
          <motion.div
            key={persona.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <PersonaCard {...persona} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
