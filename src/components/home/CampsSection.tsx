import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CampList from "../camps/CampList";
interface Camp {
  id: number;
  title: string;
  description: string;
  duration: string;
  capacity: string;
  image: string;
  formLink: string;
}
interface CampsSectionProps {
  camps: Camp[];
}
export const CampsSection = ({
  camps
}: CampsSectionProps) => {
  return <section className="py-24 bg-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center font-general-sans md:text-4xl">
          Our 2025 Camps
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our 2025 theme is "Social Innovation", and we have curated 4 themes around Health, Sustainability, Education and Culture. Join us to build something meaningful today.
        </p>
        <CampList camps={camps} />
        <div className="flex justify-center mt-12">
          <Link to="/camps">
            <Button variant="default" className="bg-accent hover:bg-accent/90 text-white w-[200px]">See All Camps</Button>
          </Link>
        </div>
      </div>
    </section>;
};