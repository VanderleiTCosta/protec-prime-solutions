import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ProtecLogo from "@/assets/protec.webp";

interface HeaderProps {
  city: string;
  phone: string;
}

// Lista de links para o menu de Cidades
const cidadesLinks = [
  { name: "Página Inicial", path: "/" },
  { name: "Campinas", path: "/campinas" },
  { name: "São Paulo", path: "/sao-paulo" },
  { name: "Vinhedo", path: "/vinhedo" },
  { name: "Zona Leste", path: "/zona-leste" },
];

// Lista de links para o novo menu de Bairros
const bairrosLinks = [
  { name: "Jundiaí", path: "/jundiai" },
  { name: "Tatuapé", path: "/tatuape" },
  { name: "Itaim Bibi", path: "/itaim-bibi" },
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
          
          <div className="flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Menu de Cidades */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">
                    Cidades
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-48 gap-1 p-2">
                      {cidadesLinks.map((link) => (
                        <NavigationMenuLink key={link.name} asChild>
                          <a
                            href={link.path}
                            className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {link.name}
                          </a>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Novo Menu de Bairros */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">
                    Bairros
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-48 gap-1 p-2">
                      {bairrosLinks.map((link) => (
                        <NavigationMenuLink key={link.name} asChild>
                          <a
                            href={link.path}
                            className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {link.name}
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
                <FaWhatsapp className="mr-2 h-5 w-5" />
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