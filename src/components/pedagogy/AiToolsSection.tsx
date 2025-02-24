
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { AiTool } from "./AiTool";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AiTool as AiToolType } from "./types";

interface AiToolsSectionProps {
  tools: AiToolType[];
}

export const AiToolsSection = ({
  tools
}: AiToolsSectionProps) => {
  const isMobile = useIsMobile();
  const [aiToolIndex, setAiToolIndex] = useState(0);
  const [aiToolRef, aiToolApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false
  });

  const onAiToolSelect = useCallback(() => {
    if (!aiToolApi) return;
    setAiToolIndex(aiToolApi.selectedScrollSnap());
  }, [aiToolApi]);

  useEffect(() => {
    if (!aiToolApi) return;
    onAiToolSelect();
    aiToolApi.on("select", onAiToolSelect);
    return () => {
      aiToolApi.off("select", onAiToolSelect);
    };
  }, [aiToolApi, onAiToolSelect]);

  if (isMobile) {
    return (
      <div className="relative">
        <Carousel ref={aiToolRef} className="w-full">
          <CarouselContent className="-ml-4">
            {tools.map((tool, index) => (
              <CarouselItem key={tool.title} className="pl-4 basis-[85%] min-w-0">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-[300px]"
                >
                  <AiTool {...tool} />
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
        {tools.map((tool, index) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-[350px]"
          >
            <AiTool {...tool} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
