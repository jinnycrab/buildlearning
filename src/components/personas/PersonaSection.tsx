
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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
      <div className="relative">
        <Carousel ref={personaRef} className="w-full">
          <CarouselContent className="-ml-4">
            {personas.map((persona, index) => (
              <CarouselItem key={persona.title} className="pl-4 basis-[85%] min-w-0">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-[400px]"> {/* Fixed height for mobile */}
                    <PersonaCard {...persona} />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
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
