import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import CampList from "../components/camps/CampList";
import { Button } from "../components/ui/button";
import CampRegistrationForm from "../components/camps/CampRegistrationForm";
const CampDetails = () => {
  const camps = [{
    id: 1,
    title: "Building for Health & Wellbeing",
    description: "Innovate around mental wellbeing, healthcare accessibility & efficiency, patient and caregiver support and many more",
    duration: "6 classes",
    capacity: "8 students / class",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    formLink: "https://forms.gle/your-form-link-1"
  }, {
    id: 2,
    title: "Building for Sustainability",
    description: "Innovate solutions to improve environmental sustainability and social responsibility",
    duration: "6 classes",
    capacity: "8 students / class",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
    formLink: "https://forms.gle/your-form-link-2"
  }, {
    id: 3,
    title: "Building for Youth & Education",
    description: "Innovate for education accessibility, improving student engagement, personalized learning, financial literacy and many more",
    duration: "6 classes",
    capacity: "8 students / class",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
    formLink: "https://forms.gle/your-form-link-3"
  }, {
    id: 4,
    title: "Building for Culture & Entertainment",
    description: "Innovate for cultural exchange, diversity, games, and other entertainment-related ventures",
    duration: "6 classes",
    capacity: "8 students / class",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    formLink: "https://forms.gle/your-form-link-4"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-center font-general-sans">
            Camps
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12 md:text-xl text-base text-center">
            Our 2025 theme is "Social Innovation", and we have curated 4 themes around Health, Sustainability, Education and Culture. Join us to build something meaningful today.
          </p>
          <CampList camps={camps} />
        </div>
      </section>

      

      <section className="py-16 bg-zinc-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center font-general-sans">
            Important Camp Details
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-muted-foreground">
                Build Learning Group Studio
                <br />
                83 Clemenceau Avenue #02-01
                <br />
                Singapore 239920
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Schedule</h3>
              <p className="text-muted-foreground">
                Every Saturday, 10:00 AM - 1:00 PM
                <br />
                Duration: 6 sessions per camp
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Transportation</h3>
              <p className="text-muted-foreground">
                Nearest MRT: Fort Canning (Downtown Line)
                <br />
                5 minutes walk from Exit B
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">What to Bring</h3>
              <p className="text-muted-foreground">
                - Laptop (required)
                <br />
                - Water bottle
                <br />
                - Notebook and pen
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default CampDetails;