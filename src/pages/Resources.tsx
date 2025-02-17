import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/layout/Footer";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Educational materials and tools to support your learning journey
          </p>
        </div>
        {/* Existing Resources content */}
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
