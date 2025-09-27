import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vantagens from "@/components/Vantagens";
import Servicos from "@/components/Servicos"; // Ou use o ServicosComImagens se preferir
import ComoFunciona from "@/components/ComoFunciona"; // Novo
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const SaoPaulo = () => {
  const city = "São Paulo";
  const phone = "(11) 94010-3334";
  const neighborhoods = [
    "Centro", "Vila Madalena", "Pinheiros", "Moema", 
    "Ipanema", "Vila Olímpia", "Brooklin", "Itaim Bibi"
  ];

  return (
    <>
      <Helmet>
        <title>Desentupidora 24 Horas em São Paulo | Atendimento Rápido</title>
        {/* Outras meta tags permanecem as mesmas */}
        <link rel="canonical" href="https://desentupimentosaopaulo.com.br/sao-paulo" />
      </Helmet>

      <div className="bg-background">
        <Header city={city} phone={phone} />
        <main>
          <Hero city={city} phone={phone} />
          <Vantagens />
          <Servicos />
          <ComoFunciona />
          <Depoimentos city={city} />
          <Contato phone={phone} />
        </main>
        <Footer city={city} />
        <StructuredData city={city} phone={phone} neighborhoods={neighborhoods} />
      </div>
    </>
  );
};

export default SaoPaulo;