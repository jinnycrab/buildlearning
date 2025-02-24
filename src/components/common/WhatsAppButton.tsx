
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Thanks for your interest in Build. We are happy to answer any of your questions.\n\n"
      "Kindly fill in the following information:\n\n" +
      "Name of Parent:\n" +
      "Camp Interested in:\n" +
      "No. of Student Pax:\n" +
      "Age of Student:\n" +
      "Question:"

    );
    window.open(`https://wa.me/6582232551?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 right-4 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-200"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium">Enquire More (WhatsApp)</span>
    </button>
  );
};

export default WhatsAppButton;
