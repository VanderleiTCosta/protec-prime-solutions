import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsappFlutuante = () => {
  const phone = "11940103334";
  const whatsappUrl = `https://wa.me/55${phone}`;
  const message = "Olá! Gostaria de solicitar um orçamento.";

  return (
    <a
      href={`${whatsappUrl}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="icon"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg transform hover:scale-110 transition-transform duration-200"
        aria-label="Chamar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </a>
  );
};

export default WhatsappFlutuante;