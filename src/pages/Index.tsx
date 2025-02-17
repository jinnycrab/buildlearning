
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import RecentArticles from "../components/home/RecentArticles";
import CampList from "../components/camps/CampList";

const Index = () => {
  const camps = [
    {
      id: 1,
      title: "AI Innovation Camp",
      description: "Learn about artificial intelligence and machine learning",
      duration: "2 weeks",
      capacity: "20 students",
      price: "2,500",
      category: "Technology"
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      description: "Master modern web development technologies",
      duration: "4 weeks",
      capacity: "15 students",
      price: "3,800",
      category: "Programming"
    },
    {
      id: 3,
      title: "Digital Marketing Workshop",
      description: "Learn digital marketing strategies and tools",
      duration: "1 week",
      capacity: "25 students",
      price: "1,500",
      category: "Marketing"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <RecentArticles />
      <CampList camps={camps} />
    </div>
  );
};

export default Index;
