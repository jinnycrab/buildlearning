
import { Link } from "react-router-dom";

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
  );
};

export default CampList;
