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

const Campinas = () => {
  // 2. Puxar os dados específicos de Campinas
  const data = cityData["campinas"] as FullLayoutData; // <-- MUDANÇA 2

  return (
    <>
      <Helmet>
        <title>Desentupidora 24 Horas em Campinas | Atendimento Rápido</title>
        <meta 
          name="description" 
          content="Desentupidora 24 horas em Campinas. Atendimento rápido, orçamento grátis e garantia de 3 meses. Chegamos em até 30 minutos." 
        />
        <meta name="keywords" content="desentupidora campinas, desentupimento 24h campinas, desentupidora cambuí, hidrojateamento campinas" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Desentupidora 24 Horas em Campinas | Atendimento Rápido" />
        <meta property="og:description" content="Desentupidora 24 horas em Campinas. Atendimento rápido, orçamento grátis e garantia de 3 meses." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://desentupir.onrender.com/campinas" />
      </Helmet>

      <div className="bg-background">
        <TopBar whatsappNumber={data.whatsappNumber} />
        <Header city={data.city} whatsappNumber={data.whatsappNumber} />
        <main>
          <Hero 
            city={data.city} 
            whatsappNumber={data.whatsappNumber} 
            callNumber={data.callNumber} 
            neighborhoods={data.neighborhoods} // Agora sem erro
          />
          
          <section className="py-16 bg-card">
            {/* ... seu conteúdo estático da página ... */}
          </section>

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

export default Campinas;