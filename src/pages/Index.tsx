
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import RecentArticles from "../components/home/RecentArticles";
import CampList from "../components/camps/CampList";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <RecentArticles />
      <CampList />
    </div>
  );
};

export default Index;
