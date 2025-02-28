import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
const Resources = () => {
  const isMobile = useIsMobile();
  const quotes = [{
    id: 1,
    quote: "Academic grades can only tell you so much about a student. Through the interviews, portfolios and aptitude tests that NUS uses, the university can assess their interests and aptitude for a particular field.",
    author: "Prof. Goh Say Song",
    role: "Dean of Admissions, NUS",
    source: "The Straits Times",
    imageUrl: "https://i0.wp.com/postgrad.com.sg/wp-content/uploads/2019/10/SUTD-School-Cover-Image_SUTD.png?fit=1600%2C1046&ssl=1",
    link: "https://www.straitstimes.com/singapore/nus-and-ntu-cast-wider-net-for-students-through-aptitude-based-admissions",
    backgroundColor: "bg-[#F1F0FB]"
  }, {
    id: 2,
    quote: "As Singapore journeys towards becoming an innovation-driven nation, empowering our next generation with design thinking as a national skillset will be instrumental in securing our future success.",
    author: "Dawn Lim",
    role: "Executive Director, DesignSingapore Council",
    source: "Design Singapore Council",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "https://designsingapore.org/news/national-design-education-committee-unveils-blueprint-for-future-design-school-to-prepare-students-and-workforce-for-changing-economy/",
    backgroundColor: "bg-[#E5DEFF]"
  }, {
    id: 3,
    quote: "What activities they engage in tells us a lot about them as a person. Portfolios are a good way to demonstrate how they have spent their time and energies outside the classroom.",
    author: "Lynette Ang",
    role: "Director of Admissions, SUTD",
    source: "The Straits Times",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    link: "https://www.straitstimes.com/singapore/from-poly-to-uni-what-you-need-to-know#",
    backgroundColor: "bg-[#F2FCE2]"
  }];
  const handleCategoryFilter = (category: string) => {
    console.log("Filtering by category:", category);
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="container mx-auto">
          <h2 className="text-4xl font-bold font-general-sans mb-4 text-center md:text-4xl">News Spotlight</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12 text-lg">See what our national leaders are saying about the future of education</p>
          <div className={`grid grid-cols-1 ${isMobile ? 'gap-6' : 'md:grid-cols-3 gap-8'}`}>
            {quotes.map((item, index) => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="group block h-full">
                <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.2
            }} viewport={{
              once: true
            }} className={`${item.backgroundColor} rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 relative group`}>
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="mb-6">
                        <p className="text-lg font-medium text-gray-900 mb-4 leading-relaxed">
                          "{item.quote}"
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">{item.author}</p>
                          <p className="text-sm text-gray-600">{item.role}</p>
                          <p className="text-xs text-accent mt-1">
                            {item.source} <ExternalLink className="w-3 h-3 inline ml-1 mb-0.5" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>)}
          </div>
        </motion.div>
      </section>

      {/* Free Ideation Tools Section */}
      <section id="ideation-tools" className="py-24 bg-[#F4B400]">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="container mx-auto text-center">
          <h2 className="text-4xl font-bold font-general-sans mb-4 md:text-4xl">
            Free Ideation Tools
          </h2>
          <p className="text-muted-foreground text-base">
            Coming soon
          </p>
        </motion.div>
      </section>
      <Footer onCategoryFilter={handleCategoryFilter} />
    </div>;
};
export default Resources;