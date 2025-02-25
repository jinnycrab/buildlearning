import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ProcessCard } from "./ProcessCard";
import { processCards } from "./data";
import { useCallback, useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const ProcessSection = () => {
  const isMobile = useIsMobile();
  const [buildProcessIndex, setBuildProcessIndex] = useState(0);
  const [buildProcessRef, buildProcessApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false
  });

  const onBuildProcessSelect = useCallback(() => {
    if (!buildProcessApi) return;
    setBuildProcessIndex(buildProcessApi.selectedScrollSnap());
  }, [buildProcessApi]);

  useEffect(() => {
    if (!buildProcessApi) return;
    onBuildProcessSelect();
    buildProcessApi.on("select", onBuildProcessSelect);
    return () => {
      buildProcessApi.off("select", onBuildProcessSelect);
    };
  }, [buildProcessApi, onBuildProcessSelect]);

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
                  >
                    <ProcessCard {...card} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
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
                  <img src={card.image} alt={`${card.title} Process`} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="build-process" className="py-24 bg-muted">
      <motion.div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center">The Build Process™</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-base">
          Our proven methodology that guides students through the journey of creating innovative solutions to real-world problems
        </p>
        {renderProcessCards()}
      </motion.div>
    </section>
  );
};
