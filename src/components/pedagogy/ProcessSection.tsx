
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ProcessCard } from "./ProcessCard";
import { processCards } from "./data";
import { useCallback, useEffect, useState } from "react";

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
        <div className="relative">
          <Carousel ref={buildProcessRef} className="w-full">
            <CarouselContent className="-ml-4">
              {processCards.map((card, index) => (
                <CarouselItem key={card.letter} className="pl-4 basis-[85%] min-w-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-[calc(100vh-320px)]"
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
      <div className="grid grid-cols-5 gap-6">
        {processCards.map((card, index) => (
          <motion.div
            key={card.letter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <ProcessCard {...card} />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="build-process" className="py-12 md:py-24 bg-muted">
      <motion.div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center">The Build Process™</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 md:mb-12 text-base">
          Our proven methodology that guides students through the journey of creating innovative solutions to real-world problems
        </p>
        {renderProcessCards()}
      </motion.div>
    </section>
  );
};
