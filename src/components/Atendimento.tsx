import { Button } from "@/components/ui/button";
import { Zap, Phone } from "lucide-react";

interface AtendimentoProps {
  city: string;
  phone: string;
}

const Atendimento = ({ city, phone }: AtendimentoProps) => {
  const whatsappUrl = `https://wa.me/55${phone.replace(/\D/g, '')}`;
  
  return (
    <section className="py-16 gradient-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Zap className="h-12 w-12" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Atendimento Rápido em {city}
          </h2>
          
          <p className="text-xl mb-8 text-white/90">
            Nossa equipe especializada chega em até <strong>30 minutos</strong> com 
            equipamentos de hidrojateamento de alta pressão. Solucionamos seu problema 
            de entupimento de forma rápida e eficaz.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Equipamentos Modernos</h3>
              <p className="text-white/90">Hidrojateamento de alta pressão</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Técnicos Qualificados</h3>
              <p className="text-white/90">Profissionais experientes</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Atendimento 24h</h3>
              <p className="text-white/90">Todos os dias da semana</p>
            </div>
          </div>
          
          <Button 
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-6 w-6" />
              Solicitar Atendimento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Atendimento;