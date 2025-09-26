import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ProtecLogo from "@/assets/protec.jpeg"; // Importando a logo

interface HeaderProps {
  city: string;
  phone: string;
}

const cities = [
  { name: "Campinas", path: "/campinas" },
  { name: "São Paulo", path: "/sao-paulo" },
  { name: "Vinhedo", path: "/vinhedo" },
  { name: "Zona Leste", path: "/zona-leste" },
];

const Header = ({ city, phone }: HeaderProps) => {
  const whatsappUrl = `https://wa.me/55${phone.replace(/\D/g, "")}`;

  return (
    <header className="bg-card border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src={ProtecLogo}
              alt="Logo Grupo Protec Desentupidora"
              className="h-14 w-auto"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                Desentupidora {city}
              </h1>
              <p className="text-sm text-muted-foreground">Atendimento 24 horas</p>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">
                    <MapPin className="mr-1.5 h-4 w-4" />
                    Cidades
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-48 gap-2 p-4">
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

            {/* Botão de contato unificado com a cor de sucesso (verde) */}
            <Button
              asChild
              size="lg"
              className="bg-success hover:bg-success/90 text-success-foreground shadow-lg font-bold text-base"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                {phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;