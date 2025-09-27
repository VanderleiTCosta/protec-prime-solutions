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

const Index = () => {
  const phone = "(11) 94010-3334";

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
        <Header city="SP e Região" phone={phone} />
        <main>
          {/* O Hero agora recebe a prop "city" conforme HeroProps */}
          <Hero city="SP e Região" phone={phone} /> 
          
          {/* Seções Adicionadas */}
          <Vantagens />
          <ServicosComImagens />
          <ComoFunciona />
          <Depoimentos /> {/* Sem a prop "city", mostrará depoimentos gerais */}
          <Contato phone={phone} />
          
        </main>
        <Footer city="SP e Região" />
        <StructuredData city="SP e Região" phone={phone} />
      </div>
    </>
  );
};

export default Index;