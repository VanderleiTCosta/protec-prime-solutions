import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  const phone = "(11) 94010-3334";
  const whatsappUrl = `https://wa.me/55${phone.replace(/\D/g, '')}`;

  return (
    <>
      <Helmet>
        <title>Desentupidora 24 Horas | Atendimento em SP e Região</title>
        <meta 
          name="description" 
          content="Desentupidora 24 horas em São Paulo, Campinas, Vinhedo e Zona Leste. Atendimento rápido, orçamento grátis e garantia. Ligue: (11) 94010-3334" 
        />
        <meta name="keywords" content="desentupidora 24h, desentupimento são paulo, desentupidora campinas, hidrojateamento" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header city="SP e Região" phone={phone} />
        
        {/* Hero */}
        <header className="gradient-hero text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-sm">
              Desentupidora 24 Horas
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Atendimento rápido e profissional em São Paulo e região
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-service hover:bg-service/90 text-service-foreground shadow-service text-lg px-8 py-6"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-6 w-6" />
                {phone}
              </a>
            </Button>
          </div>
        </header>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© 2025 Desentupidora. Todos os direitos reservados.</p>
            <p className="text-primary-foreground/80 text-sm mt-2">
              Atendimento 24 horas • Orçamento grátis • Garantia de 3 meses
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
