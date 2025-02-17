
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import CampList from "../components/camps/CampList";

const CampDetails = () => {
  const camps = [{
    id: 1,
    title: "AI Innovation Camp",
    description: "Learn about artificial intelligence and machine learning",
    duration: "2 weeks",
    capacity: "20 students",
    price: "", // Removed price as requested
    category: "Technology"
  }, {
    id: 2,
    title: "Web Development Bootcamp",
    description: "Master modern web development technologies",
    duration: "4 weeks",
    capacity: "15 students",
    price: "", // Removed price as requested
    category: "Programming"
  }, {
    id: 3,
    title: "Digital Marketing Workshop",
    description: "Learn digital marketing strategies and tools",
    duration: "1 week",
    capacity: "25 students",
    price: "", // Removed price as requested
    category: "Marketing"
  }];

  const handleCategoryFilter = (category: string) => {
    console.log("Filtering by category:", category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-general-sans">
            Upcoming Camps
          </h2>
          <CampList camps={camps} />
        </div>
      </section>
      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>
  );
};

export default CampDetails;
