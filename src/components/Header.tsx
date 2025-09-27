import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ProtecLogo from "@/assets/protec.jpeg";

interface HeaderProps {
  city: string;
  phone: string;
}

const cities = [
  { name: "Página Inicial", path: "/" },
  { name: "Campinas", path: "/campinas" },
  { name: "São Paulo", path: "/sao-paulo" },
  { name: "Vinhedo", path: "/vinhedo" },
  { name: "Zona Leste", path: "/zona-leste" },
];

const Header = ({ city, phone }: HeaderProps) => {
  const whatsappUrl = `https://wa.me/55${phone.replace(/\D/g, "")}`;

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              <span>contato@protecdesentupidora.com.br</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            <span>Atendimento em toda SP e Região</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src={ProtecLogo}
              alt="Logo Grupo Protec Desentupidora"
              className="h-12 md:h-14 w-auto"
            />
          </a>
          
          <div className="flex items-center gap-2">
            {/* Menu de Cidades - Adicionado de volta */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">
                    <MapPin className="mr-1.5 h-4 w-4" />
                    Cidades
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-48 gap-1 p-2">
                      {cities.map((cityItem) => (
                        <NavigationMenuLink key={cityItem.name} asChild>
                          <a
                            href={cityItem.path}
                            className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {cityItem.name}
                          </a>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg font-bold text-base hidden sm:inline-flex"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Orçamento Grátis
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;