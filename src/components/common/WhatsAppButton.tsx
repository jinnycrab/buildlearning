
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/6500000000', '_blank'); // Replace with your actual WhatsApp number
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 right-4 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-200"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium">Enquire More</span>
    </button>
  );
};

export default WhatsAppButton;
