import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import HeroImage from "@/assets/hero.png";

interface HeroProps {
  city: string;
  phone: string;
}

const Hero = ({ city, phone }: HeroProps) => {
  const whatsappUrl = `https://wa.me/55${phone.replace(/\D/g, '')}`;

  return (
    <section 
      className="relative text-white bg-cover bg-center" 
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-sm leading-tight">
            Desentupidora 24 Horas em {city}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Visita e Orçamento Grátis. Cobrimos qualquer oferta e chegamos em até 30 minutos.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-success hover:bg-success/90 text-success-foreground shadow-lg text-lg px-8 py-6 font-bold transform hover:scale-105 transition-transform"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              Chamar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;