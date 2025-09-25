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

const Vinhedo = () => {
  const city = "Vinhedo";
  const phone = "(11) 94010-3334";
  const neighborhoods = [
    "Centro", "Vila João XXIII", "Pinheirinho", "Jardim Mirante", 
    "Vila Planalto", "Altos de Vinhedo", "Capela"
  ];

  return (
    <>
      <Helmet>
        <title>Desentupidora 24 Horas em Vinhedo | Atendimento Rápido</title>
        <meta 
          name="description" 
          content="Desentupidora 24 horas em Vinhedo. Atendimento rápido, orçamento grátis e garantia de 3 meses. Chegamos em até 30 minutos. Ligue: (11) 94010-3334" 
        />
        <meta name="keywords" content="desentupidora vinhedo, desentupimento 24h vinhedo, desentupidora capela, hidrojateamento vinhedo" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Desentupidora 24 Horas em Vinhedo | Atendimento Rápido" />
        <meta property="og:description" content="Desentupidora 24 horas em Vinhedo. Atendimento rápido, orçamento grátis e garantia de 3 meses." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://desentupimentovinhedo.com.br/vinhedo" />
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

export default Vinhedo;