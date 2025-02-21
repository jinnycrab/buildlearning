
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
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    formLink: "https://forms.gle/your-form-link-1",
  }, {
    id: 2,
    title: "Building for Sustainability",
    description: "Innovate solutions to improve environmental sustainability and social responsibility",
    duration: "6 weeks",
    capacity: "8 students / class",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
    formLink: "https://forms.gle/your-form-link-2",
  }, {
    id: 3,
    title: "Building for Youth & Education",
    description: "Innovate for education accessibility, improving student engagement, personalized learning, financial literacy and many more",
    duration: "6 weeks",
    capacity: "8 students / class",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
    formLink: "https://forms.gle/your-form-link-3",
  }, {
    id: 4,
    title: "Building for Culture & Entertainment",
    description: "Innovate for cultural exchange, diversity, games, and other entertainment-related ventures",
    duration: "6 weeks",
    capacity: "8 students / class",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    formLink: "https://forms.gle/your-form-link-4",
  }];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-center font-general-sans">
            Upcoming Camps
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join our innovative camps where young minds collaborate to build impactful solutions. Each camp focuses on a specific domain, enabling students to make a real difference while learning valuable skills.
          </p>
          <CampList camps={camps} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CampDetails;
