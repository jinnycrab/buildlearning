
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export interface Camp {
  id: number;
  title: string;
  description: string;
  duration: string;
  capacity: string;
  price: string;
  category: string;
}

interface CampListProps {
  camps: Camp[];
}

const CampList = ({ camps }: CampListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {camps.map((camp) => (
        <div
          key={camp.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
        >
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 font-general-sans">
              {camp.title}
            </h3>
            <p className="text-muted-foreground mb-4">{camp.description}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">
                Duration: {camp.duration}
              </span>
              <Link to={`/camp/${camp.id}`}>
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampList;
