
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Users, GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const camps = [
  {
    id: 1,
    title: "Winter Wonderland Coding Camp",
    description: "Learn to code while celebrating the winter season!",
    duration: "2 weeks",
    capacity: "15 students",
    price: "$299",
    category: "coding",
  },
  {
    id: 2,
    title: "Holiday Arts & Crafts",
    description: "Create beautiful holiday decorations and gifts",
    duration: "1 week",
    capacity: "12 students",
    price: "$199",
    category: "arts",
  },
  {
    id: 3,
    title: "Festive Cooking Adventure",
    description: "Master holiday recipes and baking techniques",
    duration: "3 days",
    capacity: "10 students",
    price: "$149",
    category: "cooking",
  },
];

const categories = ["all", "coding", "arts", "cooking"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCamps = camps.filter(
    (camp) => selectedCategory === "all" || camp.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      <nav className="bg-primary text-secondary py-4 sticky top-0 z-50">
        <div className="container flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b235711a-f628-48e4-8700-52914ec41fd1.png" 
              alt="Build Logo" 
              className="h-8 w-auto"
            />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-secondary/80 hover:text-secondary transition-colors">Home</a>
            <a href="#" className="text-secondary/80 hover:text-secondary transition-colors">Camps</a>
            <a href="#" className="text-secondary/80 hover:text-secondary transition-colors">About</a>
            <a href="#" className="text-secondary/80 hover:text-secondary transition-colors">Contact</a>
            <button className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors">
              Sign Up
            </button>
          </div>
          <button className="md:hidden text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        <div className="container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-secondary font-general-sans"
          >
            Holiday Camp Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary/90 font-inter max-w-2xl mx-auto"
          >
            Join our immersive in-person holiday camps and create unforgettable memories
          </motion.p>
        </div>
      </header>

      <main className="container py-16 flex-1">
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-white shadow-sm"
            >
              <Calendar className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-general-sans">Flexible Schedule</h3>
              <p className="text-muted-foreground">Choose from various camp durations that fit your schedule</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-white shadow-sm"
            >
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-general-sans">Small Groups</h3>
              <p className="text-muted-foreground">Personal attention in small, focused learning groups</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl bg-white shadow-sm"
            >
              <GraduationCap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-general-sans">Expert Instructors</h3>
              <p className="text-muted-foreground">Learn from passionate and experienced teachers</p>
            </motion.div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold font-general-sans">Available Camps</h2>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-accent text-white"
                      : "bg-white text-primary hover:bg-accent/10"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCamps.map((camp) => (
              <motion.div
                key={camp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {camp.category.charAt(0).toUpperCase() + camp.category.slice(1)}
                    </span>
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-general-sans">{camp.title}</h3>
                  <p className="text-muted-foreground mb-4">{camp.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{camp.duration}</span>
                      <span className="text-sm text-muted-foreground">{camp.capacity}</span>
                    </div>
                    <span className="text-lg font-semibold text-primary">{camp.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-primary text-secondary py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 font-general-sans">About Us</h3>
              <p className="text-secondary/80 leading-relaxed">
                We provide engaging holiday-themed camps that combine learning with festive fun. Our mission is to create unforgettable experiences for every participant.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 font-general-sans">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-secondary/80">contact@holidaycamps.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-secondary/80">(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-secondary/80">123 Camp Street, Holiday Valley</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 font-general-sans">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-secondary/80 hover:text-secondary transition-colors">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#" className="text-secondary/80 hover:text-secondary transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-secondary/80 hover:text-secondary transition-colors">FAQ</a>
                </li>
                <li>
                  <a href="#" className="text-secondary/80 hover:text-secondary transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary/10 mt-8 pt-8 text-center">
            <p className="text-secondary/60">© {new Date().getFullYear()} Holiday Camp Courses. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
