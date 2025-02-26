
import { Link } from "react-router-dom";

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
          <div className="relative aspect-[4/3]">
            <img
              src={camp.image}
              alt={camp.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 p-6 flex flex-col">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {camp.title}
                </h3>
                <p className="text-white/90 text-sm">
                  {camp.description}
                </p>
              </div>
            </div>
          </div>

          {/* Camp details on white background */}
          <div className="p-4 bg-white">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                Duration: {camp.duration}
              </p>
              <p className="text-sm text-muted-foreground">
                {camp.capacity}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampList;
