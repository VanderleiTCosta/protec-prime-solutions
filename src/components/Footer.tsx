import ProtecLogo from "@/assets/protec.webp";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// ALTERAÇÃO 1: A interface agora espera os números dinâmicos
interface FooterProps {
  whatsappNumber: string;
  callNumber: string;
  year?: number;
}

const cities = [
  { name: "Página Inicial", path: "/" },
  { name: "Campinas", path: "/campinas" },
  { name: "São Paulo", path: "/sao-paulo" },
  { name: "Vinhedo", path: "/vinhedo" },
  { name: "Zona Leste", path: "/zona-leste" },
];

const services = [
  "Desentupimento de Pia",
  "Desentupimento de Vaso",
  "Desentupimento de Ralo",
  "Limpeza de Caixa de Gordura",
  "Hidrojateamento",
  "Limpeza de Fossa",
  "Controle de Pragas",
];

// ALTERAÇÃO 2: O componente recebe as props e não tem mais número fixo
const Footer = ({ whatsappNumber, callNumber, year = 2025 }: FooterProps) => {
  const whatsappUrl = `https://wa.me/55${whatsappNumber.replace(/\D/g, "")}`;

  return (
    <footer className="bg-secondary text-secondary-foreground border-t-4 border-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <a href="/" className="inline-block">
              <img src={ProtecLogo} alt="Logo Grupo Protec" className="h-16 w-auto" />
            </a>
            <p className="text-sm text-secondary-foreground/80">
              Soluções completas em desentupimento e controle de pragas. Atendimento 24 horas com rapidez e garantia.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Navegação</h3>
            <ul className="space-y-2">
              {cities.map((cityLink) => (
                <li key={cityLink.name}>
                  <a href={cityLink.path} className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                    {cityLink.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* ALTERAÇÃO 3: A seção de contato agora usa as props */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contato 24 Horas</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaWhatsapp className="h-5 w-5 text-primary" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  {whatsappNumber} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href={`tel:${callNumber.replace(/\D/g, '')}`} className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  {callNumber} (Ligação)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm text-secondary-foreground/80">contato@protec.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm text-secondary-foreground/80">Atendimento em toda SP e Região</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-secondary-foreground/60">
          <p>© {year} Grupo Protec Desentupidora. Todos os direitos reservados.</p>
          <p className="mt-1">Desenvolvido com tecnologia de ponta.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;