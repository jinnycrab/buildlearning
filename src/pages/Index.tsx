import { useState } from "react";
import { Link } from "react-router-dom";
import { Code, Sparkles, Users, BookOpen, FileText, Workflow, Info } from "lucide-react";

const camps = [
  {
    id: 1,
    title: "Be a Sustainability Builder",
    description: "Work on projects that solve for environmental, social and economic sustainability",
    duration: "2 weeks (5 half days across 2 weeks)",
    capacity: "15 students",
    price: "$1,200",
    category: "sustainability",
  },
  {
    id: 2,
    title: "Be a Technology Builder",
    description: "Work on projects to innovate technology and consumer electronics offerings",
    duration: "2 weeks (5 half days across 2 weeks)",
    capacity: "15 students",
    price: "$1,200",
    category: "tech",
  },
];

const Index = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredCamps =
    categoryFilter === "all"
      ? camps
      : camps.filter((camp) => camp.category === categoryFilter);

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold font-general-sans">
            Holiday Camps
          </Link>
          <div className="flex items-center gap-6">
            <Link 
              to="/about" 
              className="text-muted-foreground hover:text-accent flex items-center gap-2"
            >
              <Info className="w-4 h-4" />
              About
            </Link>
            <Link 
              to="/process" 
              className="text-muted-foreground hover:text-accent flex items-center gap-2"
            >
              <Workflow className="w-4 h-4" />
              The Build Process™
            </Link>
            <Link 
              to="/blog" 
              className="text-muted-foreground hover:text-accent flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Blog
            </Link>
            <Link 
              to="/resources" 
              className="text-muted-foreground hover:text-accent flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Resources
            </Link>
          </div>
        </div>
      </nav>

      <main className="container py-16 flex-1">
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 font-general-sans leading-tight">
            Develop Solutions for Real World Problems
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join our immersive camps where you'll learn to create meaningful projects, 
            build your portfolio, and prepare for a future in technology and innovation.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors">
              Explore Camps
            </button>
            <button className="px-6 py-3 bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors">
              View Student Projects
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-general-sans">Real Projects</h3>
            <p className="text-muted-foreground">
              Work on actual problems and create solutions that matter in the real world.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-general-sans">Build Your Portfolio</h3>
            <p className="text-muted-foreground">
              Create impressive projects that showcase your skills to future opportunities.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-general-sans">Expert Mentorship</h3>
            <p className="text-muted-foreground">
              Learn from industry professionals who guide you through your learning journey.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-8 font-general-sans">Explore Our Camps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {camps.map((camp) => (
                <Link
                  to={`/camp/${camp.id}`}
                  key={camp.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 font-general-sans">
                      {camp.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{camp.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Duration: {camp.duration}
                      </span>
                      <span className="font-medium">SGD {camp.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 font-general-sans">Holiday Camps</h3>
              <p className="text-muted-foreground">
                Empowering young minds to create meaningful solutions through technology and innovation.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 font-general-sans">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-accent">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/process" className="text-muted-foreground hover:text-accent">
                    The Build Process™
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-muted-foreground hover:text-accent">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="text-muted-foreground hover:text-accent">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 font-general-sans">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setCategoryFilter("coding")}
                    className="text-muted-foreground hover:text-accent"
                  >
                    Coding Camps
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCategoryFilter("arts")}
                    className="text-muted-foreground hover:text-accent"
                  >
                    Arts & Crafts
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCategoryFilter("tech")}
                    className="text-muted-foreground hover:text-accent"
                  >
                    Tech Workshops
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 font-general-sans">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Email: info@holidaycamps.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Innovation Way</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 Holiday Camps. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
