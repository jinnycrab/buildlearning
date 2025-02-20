import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
const StudentProjects = () => {
  return <div className="min-h-screen">
      <Navigation />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center font-general-sans">
            Student Projects
          </h1>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-base">
            Explore our students' innovative posters and engaging demo pitches
          </p>
          {/* Content will be added once Supabase integration is set up */}
          <div className="text-center text-muted-foreground">
            Coming soon - Student projects will be displayed here
          </div>
        </div>
      </section>
      <Footer onCategoryFilter={() => {}} />
    </div>;
};
export default StudentProjects;