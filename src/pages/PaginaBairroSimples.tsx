import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { SimpleLayoutData } from "@/data/cityData"; // Importa o tipo específico
import { Star, ShieldCheck, Clock, Award, CheckCircle } from "lucide-react";

interface PaginaBairroProps {
  data: SimpleLayoutData; // Usa o tipo específico aqui
}

const PaginaBairroSimples = ({ data }: PaginaBairroProps) => {
  const whatsappUrl = `https://wa.me/55${data.phone.replace(/\D/g, "")}`;

  const servicos = [
    "Desentupimento de Pias e Ralos",
    "Desentupimento de Vasos Sanitários",
    "Desentupimento de Esgotos",
    "Limpeza de Caixa de Gordura",
    "Hidrojateamento",
    "Controle de Pragas",
  ];

  return (
    <>
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <meta name="keywords" content={data.seo.keywords} />
        <link rel="canonical" href={data.seo.canonical} />
      </Helmet>
      
      <div className="bg-white min-h-screen">
        <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold">
              Desentupidora {data.city}
            </h1>
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="mr-2 h-5 w-5" />
                <span>{data.phone}</span>
              </a>
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 md:py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Desentupimento em {data.city} 24 Horas
          </h2>
          <p className="mt-4 text-xl text-blue-600 font-bold">
            {data.price}
          </p>
          <div className="flex justify-center my-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {data.content}
          </p>
          <Button asChild size="lg" className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-7 px-8 animate-pulse">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="mr-3 h-7 w-7" />
              Solicite um Orçamento Grátis Agora
            </a>
          </Button>
        </main>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-10">Nossos Diferenciais em {data.city}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <ShieldCheck className="h-12 w-12 text-blue-600 mb-3" />
                <h4 className="text-lg font-semibold text-gray-700">Garantia Total</h4>
                <p className="text-gray-600">Oferecemos garantia em todos os serviços prestados.</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-12 w-12 text-blue-600 mb-3" />
                <h4 className="text-lg font-semibold text-gray-700">Agilidade no Atendimento</h4>
                <p className="text-gray-600">Chegamos rapidamente em qualquer ponto do bairro.</p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="h-12 w-12 text-blue-600 mb-3" />
                <h4 className="text-lg font-semibold text-gray-700">Melhor Preço</h4>
                <p className="text-gray-600">Cobrimos qualquer oferta da concorrência na região.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold text-gray-800">Serviços que Oferecemos</h3>
                </div>
                <div className="max-w-2xl mx-auto">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {servicos.map((servico) => (
                            <li key={servico} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">{servico}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        
        <footer className="bg-gray-100 border-t">
          <div className="container mx-auto px-4 py-6 text-center text-gray-600">
            <p>&copy; 2025 Desentupidora {data.city} | Atendimento 24 Horas</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PaginaBairroSimples;