
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AiTool } from "./AiTool";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AiTool as AiToolType } from "./types";

interface AiToolsSectionProps {
  tools: AiToolType[];
}

export const AiToolsSection = ({ tools }: AiToolsSectionProps) => {
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
      <div className="relative pb-12">
        <Carousel ref={aiToolRef} className="w-full">
          <CarouselContent className="-ml-4">
            {tools.map((tool, index) => (
              <CarouselItem key={tool.title} className="pl-4 basis-[85%] min-w-0">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-[calc(100vh-320px)]"
                >
                  <AiTool {...tool} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-end gap-2 mt-4 px-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => aiToolApi?.scrollPrev()} 
            disabled={aiToolIndex === 0} 
            className="h-8 w-8 rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => aiToolApi?.scrollNext()} 
            disabled={aiToolIndex === tools.length - 1} 
            className="h-8 w-8 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <AiTool {...tool} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
