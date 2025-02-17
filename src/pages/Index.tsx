import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import RecentArticles from "../components/home/RecentArticles";
import CampList from "../components/camps/CampList";
const Index = () => {
  const camps = [{
    id: 1,
    title: "AI Innovation Camp",
    description: "Learn about artificial intelligence and machine learning",
    duration: "2 weeks",
    capacity: "20 students",
    price: "2,500",
    category: "Technology"
  }, {
    id: 2,
    title: "Web Development Bootcamp",
    description: "Master modern web development technologies",
    duration: "4 weeks",
    capacity: "15 students",
    price: "3,800",
    category: "Programming"
  }, {
    id: 3,
    title: "Digital Marketing Workshop",
    description: "Learn digital marketing strategies and tools",
    duration: "1 week",
    capacity: "25 students",
    price: "1,500",
    category: "Marketing"
  }];
  const handleCategoryFilter = (category: string) => {
    // Handle category filtering logic here
    console.log("Filtering by category:", category);
  };
  return <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4">
        <Hero />
        <Features />
        <RecentArticles />
        <div className="mb-8">
          
          <CampList camps={camps} />
        </div>
      </div>
      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>;
};
export default Index;