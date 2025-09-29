import { ArrowRight, MessageCircle } from "lucide-react"; // Importe o MessageCircle
import { Button } from "./ui/button";

// Importe as suas imagens
import PiaImage from '@/assets/pia.png';
import VasoImage from '@/assets/vaso.png';
import RaloImage from '@/assets/ralo.png';
import CaixaDeGorduraImage from '@/assets/caixadegordura.png';
import EsgotoImage from '@/assets/esgoto.png';
import CanoImage from '@/assets/cano.png';
import FossaImage from '@/assets/fossa.png';
import PragasImage from '@/assets/pragas.png';

const servicos = [
  {
    imagem: PiaImage,
    titulo: "Desentupimento de Pia",
    descricao: "Soluções rápidas para pias de cozinha e banheiro.",
  },
  {
    imagem: VasoImage,
    titulo: "Desentupimento de Vaso",
    descricao: "Desobstrução de vasos sanitários sem danos.",
  },
  {
    imagem: RaloImage,
    titulo: "Desentupimento de Ralo",
    descricao: "Limpeza completa de ralos de chuveiro e pátio.",
  },
  {
    imagem: CaixaDeGorduraImage,
    titulo: "Limpeza de Caixa de Gordura",
    descricao: "Manutenção essencial para cozinhas e restaurantes.",
  },
  {
    imagem: EsgotoImage,
    titulo: "Hidrojateamento",
    descricao: "Limpeza profunda com jatos de alta pressão.",
  },
  {
    imagem: CanoImage,
    titulo: "Desentupimento de Esgoto",
    descricao: "Soluções completas para redes de esgoto.",
  },
  {
    imagem: FossaImage,
    titulo: "Limpeza de Fossa",
    descricao: "Esgotamento e limpeza de fossas sépticas.",
  },
  {
    imagem: PragasImage,
    titulo: "Controle de Pragas",
    descricao: "Dedetização, desratização e descupinização.",
  },
];

const ServicosComImagens = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Soluções Completas para Você
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços com equipamentos modernos, técnicos especializados e garantia total.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicos.map((servico, index) => (
            <div 
              key={index}
              className="group bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={servico.imagem}
                  alt={servico.titulo}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {servico.titulo}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {servico.descricao}
                </p>
                <a href={`https://wa.me/5511940103334`} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold inline-flex items-center group-hover:underline text-sm">
                  {/* Ícone do WhatsApp adicionado */}
                  <MessageCircle className="mr-1.5 h-4 w-4" />
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                Ver Todos os Serviços
            </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicosComImagens;