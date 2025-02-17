import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";

const Process = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            The Build Process™
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn about our proven methodology for success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Discovery</h2>
            <p className="text-gray-600">
              We begin by understanding your goals, target audience, and unique requirements
              through in-depth consultations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Planning</h2>
            <p className="text-gray-600">
              Our team creates a detailed roadmap, including timelines, milestones, and
              resource allocation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Design</h2>
            <p className="text-gray-600">
              We craft intuitive user interfaces and engaging experiences that align with
              your brand identity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Development</h2>
            <p className="text-gray-600">
              Our developers bring the design to life using modern technologies and best
              practices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Testing</h2>
            <p className="text-gray-600">
              Rigorous quality assurance ensures your project meets the highest standards
              of performance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Launch</h2>
            <p className="text-gray-600">
              We handle deployment and provide ongoing support to ensure a smooth transition
              to production.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Process;
