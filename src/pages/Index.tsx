import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

const cities = [
  { name: "Campinas", path: "/campinas", description: "Atendimento em toda região de Campinas" },
  { name: "São Paulo", path: "/sao-paulo", description: "Cobertura completa na capital paulista" },
  { name: "Vinhedo", path: "/vinhedo", description: "Serviços especializados em Vinhedo" },
  { name: "Zona Leste", path: "/zona-leste", description: "Atendimento rápido na Zona Leste de SP" },
];

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
        {/* Header */}
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

        {/* Cidades */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Escolha sua cidade
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cities.map((city, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-smooth border-t-4 border-t-emergency"
                >
                  <div className="text-center">
                    <div className="bg-emergency text-emergency-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {city.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {city.description}
                    </p>
                    <Button asChild className="w-full">
                      <a href={city.path}>Ver Página</a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
