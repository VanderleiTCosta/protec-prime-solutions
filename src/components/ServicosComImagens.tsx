import { ArrowRight } from "lucide-react";
import Pia from "@/assets/pia.png";
import Vaso from "@/assets/vaso.png";
import Ralo from "@/assets/ralo.png";
import CaixaGordura from "@/assets/caixadegordura.png";
import Hidrojateamento from "@/assets/encanador.png";
import Esgoto from "@/assets/esgoto.png";

// Imagens placeholder - substitua pelas suas imagens de serviço
const servicos = [
  {
    imagem: Pia,
    titulo: "Desentupimento de Pia",
    descricao: "Soluções rápidas para pias de cozinha e banheiro.",
  },
  {
    imagem: Vaso,
    titulo: "Desentupimento de Vaso",
    descricao: "Desobstrução de vasos sanitários sem danos.",
  },
  {
    imagem: Ralo,
    titulo: "Desentupimento de Ralo",
    descricao: "Limpeza completa de ralos de chuveiro e pátio.",
  },
  {
    imagem: CaixaGordura,
    titulo: "Limpeza de Caixa de Gordura",
    descricao: "Manutenção essencial para cozinhas e restaurantes.",
  },
  {
    imagem: Hidrojateamento,
    titulo: "Hidrojateamento",
    descricao: "Limpeza profunda com jatos de alta pressão.",
  },
  {
    imagem: Esgoto,
    titulo: "Desentupimento de Esgoto",
    descricao: "Soluções completas para redes de esgoto.",
  },
];

const ServicosComImagens = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Soluções Completas de Desentupimento
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Oferecemos todos os tipos de desentupimento com equipamentos modernos, técnicos especializados e garantia total dos serviços.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-muted-foreground mb-4">
                  {servico.descricao}
                </p>
                <a href={`https://wa.me/5511940103334`} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold inline-flex items-center group-hover:underline">
                  Solicitar Orçamento <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicosComImagens;