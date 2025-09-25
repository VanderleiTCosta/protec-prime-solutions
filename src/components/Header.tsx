import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface HeaderProps {
  city: string;
  phone: string;
}

const Header = ({ city, phone }: HeaderProps) => {
  const whatsappUrl = `https://wa.me/55${phone.replace(/\D/g, '')}`;
  
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img 
              src="/logo.png" 
              alt="Logo Desentupidora" 
              className="h-12 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary">
                Desentupidora {city}
              </h1>
              <p className="text-muted-foreground">Atendimento 24 horas</p>
            </div>
          </div>
          
          <Button 
            asChild
            variant="default"
            size="lg"
            className="bg-emergency hover:bg-emergency/90 text-emergency-foreground shadow-emergency"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              {phone}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;