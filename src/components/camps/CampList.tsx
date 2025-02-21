
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export interface Camp {
  id: number;
  title: string;
  description: string;
  duration: string;
  capacity: string;
  image: string;
  formLink: string;
}

interface CampListProps {
  camps: Camp[];
}

const CampList = ({ camps }: CampListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {camps.map((camp) => (
        <div
          key={camp.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          {/* Image and overlaid text */}
          <div className="relative aspect-[4/3]">
            <img
              src={camp.image}
              alt={camp.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 p-4 flex flex-col justify-end">
              <h3 className="text-lg font-semibold mb-2 text-white">
                {camp.title}
              </h3>
              <p className="text-white/90 text-sm line-clamp-2">
                {camp.description}
              </p>
            </div>
          </div>

          {/* Camp details and sign up button */}
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  Duration: {camp.duration}
                </p>
                <p className="text-sm text-muted-foreground">
                  {camp.capacity}
                </p>
              </div>
              <a href={camp.formLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  Sign Up
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampList;
