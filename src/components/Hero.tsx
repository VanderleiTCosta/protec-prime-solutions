import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Clock, Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Importado de react-icons
import HeroImage from "@/assets/heroImage.png";

interface HeroProps {
  phone: string;
  city?: string;
  neighborhoods?: string[];
}

const Hero = ({ city, phone, neighborhoods }: HeroProps) => {
  const whatsappUrl = `https://wa.me/55${phone.replace(/\D/g, '')}`;

  const title = city ? `Desentupidora 24 Horas em ${city}` : "Desentupidora 24 Horas em SP e Região";
  const subtitle = city 
    ? `Atendemos: ${neighborhoods?.join(", ")} e toda a região.`
    : "Soluções completas para residências, comércios e indústrias.";

  return (
    <section 
      className="relative text-white bg-cover bg-center" 
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-sm leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <Button 
              asChild
              size="lg"
              className="bg-success hover:bg-success/90 text-success-foreground shadow-lg text-lg px-8 py-7 font-bold transform hover:scale-105 transition-transform"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {/* Ícone do WhatsApp atualizado */}
                <FaWhatsapp className="mr-2 h-6 w-6" />
                Orçamento Grátis via WhatsApp
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="text-black border-white hover:bg-white hover:text-primary text-lg px-8 py-7 font-bold"
            >
              <a href={`tel:${phone.replace(/\D/g, '')}`}>
                <Phone className="mr-2 h-5 w-5" />
                Ligue Agora
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center sm:text-left mt-12">
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <ShieldCheck className="h-5 w-5 text-green-400" />
              <span>Garantia no Serviço</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <Clock className="h-5 w-5 text-green-400" />
              <span>Chegamos em até 30 min.</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <Award className="h-5 w-5 text-green-400" />
              <span>Cobrimos qualquer oferta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;