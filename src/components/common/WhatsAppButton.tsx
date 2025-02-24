
import { MessageCircle, UserPlus } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    console.log("WhatsApp button clicked");
    const message = encodeURIComponent(
      "Thanks for your interest in Build. We are happy to answer any of your questions.\n\n" +
      "Kindly fill in the following information:\n\n" +
      "Name of Parent:\n" +
      "Camp Interested in:\n" +
      "No. of Student Pax:\n" +
      "Age of Student:\n" +
      "Question:"
    );
    window.open(`https://wa.me/6582232551?text=${message}`, '_blank');
  };

  const handleSignUpClick = () => {
    window.open('https://forms.gle/9GWixzaAFde1Ur9QA', '_blank');
  };

  console.log("WhatsApp button rendering");

  return (
    <div className="fixed bottom-8 right-4 z-[100] flex flex-col gap-4">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-200"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium">Enquire More (WhatsApp)</span>
      </button>
      <button
        onClick={handleSignUpClick}
        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-200"
      >
        <UserPlus className="w-5 h-5" />
        <span className="text-sm font-medium">Sign Up Now</span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
