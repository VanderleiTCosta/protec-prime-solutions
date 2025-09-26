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
  const whatsappUrl = `https://wa.me/55${phone.replace(/\D/g, '')}`;

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              {/* Sua logo agora no cabeçalho */}
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdesentupidoraprotec.com.br%2F&psig=AOvVaw2gB8O6Z_4p9rX4f3Q_0n7K&ust=1708892408990000&source=images&cd=vfe&opi=89978757&ved=0CBMQjRxqFwoTCID425S7yIQDFQAAAAAdAAAAABAE"
                alt="Logo Grupo Protec Desentupidora"
                className="h-16 w-auto"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-primary">
                  Desentupidora {city}
                </h1>
                <p className="text-muted-foreground">Atendimento 24 horas</p>
              </div>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-background text-primary hover:bg-accent hover:text-accent-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    Nossas Cidades
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-48 gap-2 p-4 bg-popover border rounded-md shadow-md">
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
      </div>
    </header>
  );
};

export default Header;