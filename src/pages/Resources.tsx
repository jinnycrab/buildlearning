
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, PenTool } from "lucide-react";
import { Link } from "react-scroll";

const Resources = () => {
  const articles = [
    {
      id: 1,
      title: "The Future of Technology Education",
      description: "Exploring innovative approaches to teaching tech skills in 2024",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      link: "https://techcrunch.com",
      date: "Mar 15, 2024"
    },
    {
      id: 2,
      title: "Programming Languages in 2024",
      description: "Which languages are dominating the industry?",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "https://wired.com",
      date: "Mar 10, 2024"
    },
    {
      id: 3,
      title: "AI in Education",
      description: "How artificial intelligence is transforming learning",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      link: "https://education.com",
      date: "Mar 5, 2024"
    }
  ];

  const handleCategoryFilter = (category: string) => {
    console.log("Filtering by category:", category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Resources
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Stay informed about the latest in education and technology
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
              Free Ideation Tools
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Latest Articles Section */}
      <section id="latest-articles" className="py-24 bg-[#F2FCE2]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-general-sans mb-4 text-center">Latest Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-12">
            Stay tuned to developments in the education sector
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <span className="text-xs font-medium px-2 py-1 bg-accent/10 text-accent rounded-full">
                        {article.date}
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
          </div>
        </motion.div>
      </section>

      {/* Free Ideation Tools Section */}
      <section id="ideation-tools" className="py-24 bg-[#9b87f5]/10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-general-sans mb-4">Free Ideation Tools</h2>
          <p className="text-lg text-muted-foreground">
            Coming soon
          </p>
        </motion.div>
      </section>
      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>
  );
};

export default Resources;
