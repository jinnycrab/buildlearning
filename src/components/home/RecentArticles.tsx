import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

interface Article {
  id: number;
  title: string;
  source: string;
  imageUrl: string;
  link: string;
}

const articles: Article[] = [{
  id: 1,
  title: "AI is Transforming How We Learn and Teach",
  source: "Harvard Business Review • By Sarah Chen",
  imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  link: "https://techcrunch.com"
}, {
  id: 2,
  title: "The Rise of Project-Based Learning in Schools",
  source: "Education Weekly • By Michael Roberts",
  imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  link: "https://wired.com"
}, {
  id: 3,
  title: "How Gen Z is Reshaping Education Technology",
  source: "MIT Technology Review • By Emma Davis",
  imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  link: "https://education.com"
}];

const RecentArticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isMounted, setIsMounted] = React.useState(false);
  const scrollSpeed = 20;
  const itemWidth = isMobile ? 280 : 300;
  const totalWidth = itemWidth * articles.length;

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMobile && isMounted) {
      let isAnimating = true;
      const animate = async () => {
        while (isAnimating) {
          await controls.start({
            x: -totalWidth,
            transition: {
              duration: scrollSpeed,
              ease: "linear",
              repeat: 0
            }
          });
          if (isAnimating) {
            await controls.set({
              x: 0
            });
          }
        }
      };
      animate();
      return () => {
        isAnimating = false;
        controls.stop();
      };
    }
  }, [controls, totalWidth, scrollSpeed, isMobile, isMounted]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (isMobile) {
      const swipeThreshold = 30;
      if (Math.abs(info.offset.x) > swipeThreshold) {
        if (info.offset.x > 0 && currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else if (info.offset.x < 0 && currentIndex < articles.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      }
    }
  };

  return (
    <section className="py-24 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-general-sans mb-4">
            What Experts Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Latest insights and developments in education, locally and globally
          </p>
        </div>

        <div className="relative overflow-hidden">
          {isMobile && currentIndex < articles.length - 1 && <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12">
              <ArrowRight className="w-6 h-6 text-gray-400 animate-pulse" />
            </div>}

          <motion.div ref={containerRef} className="flex gap-6" animate={isMobile ? {
          x: -currentIndex * (itemWidth + 24)
        } : controls} drag={isMobile ? "x" : false} dragConstraints={isMobile ? {
          left: -((articles.length - 1) * (itemWidth + 24)),
          right: 0
        } : undefined} onDragEnd={handleDragEnd} dragElastic={0.1} dragTransition={{
          bounceStiffness: 600,
          bounceDamping: 20
        }} style={{
          width: isMobile ? `${(itemWidth + 24) * articles.length}px` : `${totalWidth * 2}px`,
          cursor: isMobile ? 'grab' : 'default'
        }} transition={isMobile ? {
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.5
        } : undefined}>
            {articles.map((article, index) => <a key={article.id} href={article.link} target="_blank" rel="noopener noreferrer" className="flex-none relative" style={{
            width: `${itemWidth}px`
          }}>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="relative h-48 overflow-hidden">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {article.source}
                    </p>
                  </div>
                </div>
                {isMobile && <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {articles.map((_, i) => <div key={i} className={`h-2 w-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-gray-800 w-4' : 'bg-gray-300'}`} />)}
                  </div>}
              </a>)}
            {!isMobile && articles.map(article => <a key={`${article.id}-duplicate`} href={article.link} target="_blank" rel="noopener noreferrer" className="flex-none" style={{
            width: `${itemWidth}px`
          }}>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="relative h-48 overflow-hidden">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {article.source}
                    </p>
                  </div>
                </div>
              </a>)}
          </motion.div>
        </div>

        <div className="flex justify-center mt-16">
          <Link 
            to="/blog" 
            className="w-full sm:w-auto px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
