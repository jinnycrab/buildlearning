
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";

const CampDetails = () => {
  const handleCategoryFilter = (category: string) => {
    console.log("Filtering by category:", category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>
  );
};

export default CampDetails;
