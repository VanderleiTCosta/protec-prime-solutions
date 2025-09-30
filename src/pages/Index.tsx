import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vantagens from "@/components/Vantagens";
import ServicosComImagens from "@/components/ServicosComImagens";
import ComoFunciona from "@/components/ComoFunciona";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { cityData } from "@/data/cityData";
import TopBar from "@/components/TopBar";
import WhatsappFlutuante from "@/components/WhatsappFlutuante";

const Index = () => {
  const defaultCity = cityData["sao-paulo"];
  
  const { whatsappNumber, callNumber } = defaultCity;

  return (
    <>
      <Helmet>
        <title>Desentupidora 24 Horas | Atendimento em SP e Região</title>
        <meta 
          name="description" 
          content="Desentupidora 24 horas em São Paulo, Campinas, Vinhedo e Zona Leste. Atendimento rápido, orçamento grátis e garantia. Ligue: (11) 94010-3334" 
        />
        <meta name="keywords" content="desentupidora 24h, desentupimento são paulo, desentupidora campinas, hidrojateamento" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="bg-background">
        <TopBar whatsappNumber={whatsappNumber} />
        
        <Header city="SP e Região" whatsappNumber={whatsappNumber} />
        <main>
          
          <Hero 
            city="SP e Região" 
            whatsappNumber={whatsappNumber} 
            callNumber={callNumber} 
          />
          
          <Vantagens />
          <ServicosComImagens />
          <ComoFunciona />
          <Depoimentos />
          <Contato whatsappNumber={whatsappNumber} callNumber={callNumber} />
          
        </main>
        <Footer whatsappNumber={whatsappNumber} callNumber={callNumber} />
        <StructuredData city="SP e Região" phone={callNumber} />
        <WhatsappFlutuante whatsappNumber={whatsappNumber} />
      </div>
    </>
  );
};

export default Index;