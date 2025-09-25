import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock } from "lucide-react";

interface ContatoProps {
  phone: string;
}

const Contato = ({ phone }: ContatoProps) => {
  const whatsappUrl = `https://wa.me/55${phone.replace(/\D/g, '')}`;
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
          Entre em Contato Agora
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Não perca tempo com entupimentos. Nossa equipe está pronta para atender você 24 horas por dia, 7 dias por semana.
        </p>
        
        <div className="bg-card p-8 rounded-lg shadow-lg max-w-md mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="h-6 w-6 text-emergency" />
            <span className="text-lg font-semibold">Atendimento 24 Horas</span>
          </div>
          
          <div className="text-3xl font-bold text-primary mb-6">
            {phone}
          </div>
          
          <Button 
            asChild
            size="lg"
            className="w-full bg-success hover:bg-success/90 text-success-foreground text-lg py-6"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              Chamar no WhatsApp
            </a>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="bg-emergency text-emergency-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Ligação Direta</h3>
            <p className="text-sm text-muted-foreground">Atendimento imediato</p>
          </div>
          
          <div className="text-center">
            <div className="bg-success text-success-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-sm text-muted-foreground">Mais prático e rápido</p>
          </div>
          
          <div className="text-center">
            <div className="bg-service text-service-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">24 Horas</h3>
            <p className="text-sm text-muted-foreground">Todos os dias</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;