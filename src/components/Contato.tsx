import { Button } from "@/components/ui/button";
import { Phone, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


interface ContatoProps {
  whatsappNumber: string;
  callNumber: string;
}


const Contato = ({ whatsappNumber, callNumber }: ContatoProps) => {
  // A URL do WhatsApp usa o 'whatsappNumber'
  const whatsappUrl = `https://wa.me/55${whatsappNumber.replace(/\D/g, '')}`;
  
  return (
    <section id="contato" className="py-16 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
          Entre em Contato Agora
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Não perca tempo com entupimentos. Nossa equipe está pronta para atender você 24 horas por dia, 7 dias por semana.
        </p>
        
        <div className="bg-background border p-8 rounded-lg shadow-lg max-w-md mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">Atendimento 24 Horas</span>
          </div>
          
          
          <div className="text-3xl font-bold text-primary mb-6">
            <a href={`tel:${callNumber.replace(/\D/g, '')}`} className="hover:opacity-80 transition-opacity">
              {callNumber}
            </a>
          </div>
          
          {/* O botão de WhatsApp agora usa a URL correta */}
          <Button 
            asChild
            size="lg"
            className="w-full bg-success hover:bg-success/90 text-success-foreground text-lg py-6 font-bold"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="mr-2 h-6 w-6" />
              Chamar no WhatsApp
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-foreground">Ligação Direta</h3>
            <p className="text-sm text-muted-foreground">Atendimento imediato</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaWhatsapp className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-foreground">WhatsApp</h3>
            <p className="text-sm text-muted-foreground">Mais prático e rápido</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-foreground">24 Horas</h3>
            <p className="text-sm text-muted-foreground">Todos os dias</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;