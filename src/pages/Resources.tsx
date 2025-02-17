
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, PenTool } from "lucide-react";
import { Link } from "react-scroll";

const Resources = () => {
  const articles = [{
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

  const handleCategoryFilter = (category: string) => {
    console.log("Filtering by category:", category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Educational materials and tools to support your learning journey
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <Link
              to="latest-articles"
              smooth={true}
              duration={500}
              offset={-100}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full cursor-pointer hover:bg-accent/90 transition-colors text-lg font-medium"
            >
              <BookOpen className="w-5 h-5" />
              Latest Articles
            </Link>
            <Link
              to="ideation-tools"
              smooth={true}
              duration={500}
              offset={-100}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent/10 text-accent rounded-full cursor-pointer hover:bg-accent hover:text-white transition-colors text-lg font-medium"
            >
              <PenTool className="w-5 h-5" />
              Ideation Tools
            </Link>
          </div>
        </div>

        {/* Latest Articles Section */}
        <section id="latest-articles" className="py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.map((article) => (
              <a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
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
        </section>

        {/* Ideation Tools Section */}
        <section id="ideation-tools" className="py-24 bg-muted">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ideation Tools</h2>
            <p className="text-xl text-muted-foreground">Coming soon</p>
          </motion.div>
        </section>
      </main>
      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>
  );
};

export default Resources;
