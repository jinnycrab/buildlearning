import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import CampList from "../components/camps/CampList";
const CampDetails = () => {
  const camps = [{
    id: 1,
    title: "Building for Health & Wellbeing",
    description: "Innovate around mental wellbeing, healthcare accessibility & efficiency, patient and caregiver support and many more",
    duration: "6 weeks",
    capacity: "8 students / class",
    price: "",
    // Removed price as requested
    category: "Technology"
  }, {
    id: 2,
    title: "Building for Sustainability",
    description: "Innovate solutions to improve environmental sustainability and social responsibility",
    duration: "6 weeks",
    capacity: "8 students / class",
    price: "",
    // Removed price as requested
    category: "Programming"
  }, {
    id: 3,
    title: "Building for Youth & Education",
    description: "Innovate for education accessibility, improving student engagement, personalized learning, financial literacy and many more",
    duration: "6 weeks",
    capacity: "8 students / class",
    price: "",
    // Removed price as requested
    category: "Marketing"
  }, {
    id: 4,
    title: "Building for Culture & Entertainment",
    description: "Innovate for cultural exchange, diversity, games, and other entertainment-related ventures",
    duration: "6 weeks",
    capacity: "8 students / class",
    price: "",
    // Removed price as requested
    category: "Marketing"
  }];
  const handleCategoryFilter = (category: string) => {
    console.log("Filtering by category:", category);
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center font-general-sans">
            Upcoming Camps
          </h2>
          <CampList camps={camps} />
        </div>
      </section>
      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>;
};
export default CampDetails;
