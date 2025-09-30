import { Helmet } from "react-helmet-async";
import { cityData, FullLayoutData } from "@/data/cityData"; // <-- MUDANÇA 1
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vantagens from "@/components/Vantagens";
import Servicos from "@/components/Servicos";
import ComoFunciona from "@/components/ComoFunciona";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import WhatsappFlutuante from "@/components/WhatsappFlutuante";

const SaoPaulo = () => {
  const data = cityData["sao-paulo"] as FullLayoutData; // <-- MUDANÇA 2

  return (
    <>
      <Helmet>
        <title>Desentupidora 24 Horas em São Paulo | Atendimento Rápido</title>
        <link rel="canonical" href="https://desentupimentosaopaulo.com.br/sao-paulo" />
      </Helmet>

      <div className="bg-background">
        <TopBar whatsappNumber={data.whatsappNumber} />
        <Header city={data.city} whatsappNumber={data.whatsappNumber} />
        <main>
          <Hero 
            city={data.city} 
            whatsappNumber={data.whatsappNumber} 
            callNumber={data.callNumber} 
            neighborhoods={data.neighborhoods}
          />
          <Vantagens />
          <Servicos />
          <ComoFunciona />
          <Depoimentos city={data.city} />
          <Contato whatsappNumber={data.whatsappNumber} callNumber={data.callNumber} />
        </main>
        <Footer whatsappNumber={data.whatsappNumber} callNumber={data.callNumber} />
        <StructuredData city={data.city} phone={data.callNumber} neighborhoods={data.neighborhoods} />
        <WhatsappFlutuante whatsappNumber={data.whatsappNumber} />
      </div>
    </>
  );
};

export default SaoPaulo;