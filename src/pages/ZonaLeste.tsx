import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vantagens from "@/components/Vantagens";
import Servicos from "@/components/Servicos";
import Atendimento from "@/components/Atendimento";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const ZonaLeste = () => {
  const city = "Zona Leste - São Paulo";
  const phone = "(11) 94010-3334";
  const neighborhoods = [
    "Tatuapé", "Moóca", "Vila Prudente", "Penha", 
    "Itaquera", "Vila Matilde", "Anália Franco", "Vila Formosa"
  ];

  return (
    <>
      <Helmet>
        <title>Desentupidora 24 Horas na Zona Leste SP | Atendimento Rápido</title>
        <meta 
          name="description" 
          content="Desentupidora 24 horas na Zona Leste de São Paulo. Atendimento rápido, orçamento grátis e garantia de 3 meses. Chegamos em até 30 minutos. Ligue: (11) 94010-3334" 
        />
        <meta name="keywords" content="desentupidora zona leste, desentupimento 24h tatuapé, desentupidora moóca, hidrojateamento zona leste" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Desentupidora 24 Horas na Zona Leste SP | Atendimento Rápido" />
        <meta property="og:description" content="Desentupidora 24 horas na Zona Leste de São Paulo. Atendimento rápido, orçamento grátis e garantia de 3 meses." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://desentupimentosaopaulo.com.br/zona-leste" />
      </Helmet>

      <Header city={city} phone={phone} />
      <Hero city={city} phone={phone} neighborhoods={neighborhoods} />
      <Vantagens />
      <Servicos />
      <Atendimento city={city} phone={phone} />
      <Depoimentos city={city} />
      <Contato phone={phone} />
      <Footer city={city} />
      <StructuredData city={city} phone={phone} neighborhoods={neighborhoods} />
    </>
  );
};

export default ZonaLeste;