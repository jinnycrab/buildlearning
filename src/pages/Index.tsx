
import { useState } from "react";
import Navigation from "../components/navigation/Navigation";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CampList from "../components/camps/CampList";
import Footer from "../components/layout/Footer";
import { Camp } from "../components/camps/CampList";

const camps: Camp[] = [
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
      <Navigation />
      <main className="container py-16 flex-1">
        <Hero />
        <Features />
        <CampList camps={filteredCamps} />
      </main>
      <Footer onCategoryFilter={setCategoryFilter} />
    </div>
  );
};

export default Index;
