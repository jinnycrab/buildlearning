
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

interface Article {
  id: number;
  title: string;
  source: string;
  imageUrl: string;
  link: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "AI is Transforming How We Learn and Teach",
    source: "Harvard Business Review • By Sarah Chen",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    link: "https://techcrunch.com"
  },
  {
    id: 2,
    title: "The Rise of Project-Based Learning in Schools",
    source: "Education Weekly • By Michael Roberts",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "https://wired.com"
  },
  {
    id: 3,
    title: "How Gen Z is Reshaping Education Technology",
    source: "MIT Technology Review • By Emma Davis",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    link: "https://education.com"
  }
];

const RecentArticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isMobile = useIsMobile();

  const scrollSpeed = isMobile ? 25 : 20;
  const itemWidth = isMobile ? 280 : 300;
  const totalWidth = itemWidth * articles.length;

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: [0, -totalWidth],
          transition: {
            duration: scrollSpeed,
            ease: "linear",
            repeat: 0,
          },
        });
        // Reset position instantly
        await controls.set({ x: 0 });
      }
    };

    animate();

    return () => {
      controls.stop();
    };
  }, [controls, totalWidth, scrollSpeed]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Recent Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights and developments in technology education
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex gap-6"
            animate={controls}
            style={{ width: `${totalWidth * 2}px` }}
          >
            {/* First set of articles */}
            {articles.map((article) => (
              <a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none"
                style={{ width: `${itemWidth}px` }}
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
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
              </a>
            ))}
            {/* Duplicate set for seamless loop */}
            {articles.map((article) => (
              <a
                key={`${article.id}-duplicate`}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none"
                style={{ width: `${itemWidth}px` }}
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
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
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
