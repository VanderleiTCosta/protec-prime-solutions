import { Button } from "@/components/ui/button";
import { Phone, Clock } from "lucide-react";
import HeroImage from "@/assets/heroImage.png";

interface HeroProps {
  city: string;
  phone: string;
  neighborhoods?: string[];
}

const Hero = ({ city, phone, neighborhoods }: HeroProps) => {
  const whatsappUrl = `https://wa.me/55${phone.replace(/\D/g, '')}`;
  // A imagem do Hero será gerada para combinar com as cores da sua logo

  return (
    <section className="gradient-hero text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-sm">
              Desentupidora em {city}
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-primary-foreground/90">
              Atendimento rápido e eficiente!
            </h2>

            <div className="flex items-center gap-2 mb-6">
              <Clock className="h-5 w-5 text-accent" /> {/* Ícone da hora com cor de destaque */}
              <span className="text-lg">Chegamos em até 30 minutos</span>
            </div>

            {neighborhoods && (
              <p className="mb-6 text-primary-foreground/90">
                Atendemos: {neighborhoods.join(", ")} e região
              </p>
            )}

            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-service text-lg px-8 py-6" // Botão de destaque com cor de acento
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-6 w-6" />
                Chame Agora: {phone}
              </a>
            </Button>
          </div>

          <div className="flex justify-center">
            <img
              src={HeroImage}
              alt={`Veículo da desentupidora em ${city}`}
              className="max-w-full h-auto rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;