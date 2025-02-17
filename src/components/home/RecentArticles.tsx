
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "The Future of Technology Education",
    description: "Exploring innovative approaches to teaching tech skills in 2024",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    link: "https://techcrunch.com"
  },
  {
    id: 2,
    title: "Programming Languages in 2024",
    description: "Which languages are dominating the industry?",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "https://wired.com"
  },
  {
    id: 3,
    title: "AI in Education",
    description: "How artificial intelligence is transforming learning",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    link: "https://education.com"
  }
];

const RecentArticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
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
            className="flex gap-6 py-4"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {[...articles, ...articles].map((article, index) => (
              <a
                key={`${article.id}-${index}`}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-[300px] group"
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
                      <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                        Article
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {article.description}
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
