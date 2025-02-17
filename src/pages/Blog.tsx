import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { ExternalLink } from "lucide-react";

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

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Latest Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest insights and developments in technology education
          </p>
        </div>

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
                    <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
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
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
