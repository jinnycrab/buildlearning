import { MessageCircle, UserPlus } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
const WhatsAppButton = () => {
  const isMobile = useIsMobile();
  const handleClick = () => {
    console.log("WhatsApp button clicked");
    const message = encodeURIComponent("Thanks for your interest in Build. We are happy to answer any of your questions.\n\n" + "Kindly fill in the following information:\n\n" + "Name of Parent:\n" + "Camp Interested in:\n" + "No. of Student Pax:\n" + "Age of Student:\n" + "Question:");
    window.open(`https://wa.me/6582232551?text=${message}`, '_blank');
  };
  const handleSignUpClick = () => {
    window.open('https://forms.gle/9GWixzaAFde1Ur9QA', '_blank');
  };
  console.log("WhatsApp button rendering");
  return <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t shadow-lg py-2 md:py-3 px-4 z-[100]">
      <div className="container mx-auto max-w-7xl grid grid-cols-2 gap-4">
        <button onClick={handleClick} className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-3 md:px-4 py-2 md:py-3 shadow hover:bg-[#128C7E] transition-colors duration-200 w-full">
          {isMobile ? <span className="text-xs font-medium">Enquire</span> : <>
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Enquire More (WhatsApp)</span>
            </>}
        </button>
        <button onClick={handleSignUpClick} className="flex items-center justify-center gap-2 text-white px-3 md:px-4 py-2 md:py-3 shadow transition-colors duration-200 w-full bg-blue-600 hover:bg-blue-500">
          {isMobile ? <span className="text-xs font-medium">Sign Up</span> : <>
              <UserPlus className="w-5 h-5" />
              <span className="text-sm font-medium">Sign Up Now</span>
            </>}
        </button>
      </div>
    </div>;
};
export default WhatsAppButton;