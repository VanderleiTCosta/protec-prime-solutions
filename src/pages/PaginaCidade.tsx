import { useParams, Navigate } from "react-router-dom";
import { cityData, FullLayoutData } from "@/data/cityData";


import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vantagens from "@/components/Vantagens";
import ServicosComImagens from "@/components/ServicosComImagens";
import SobreNos from "@/components/SobreNos.tsx";
import ComoFunciona from "@/components/ComoFunciona";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import TopBar from "@/components/TopBar";
import WhatsappFlutuante from "@/components/WhatsappFlutuante";
import ServicosDetalhes from "@/components/ServicosDetalhes";

type CityId = keyof typeof cityData;

const PaginaCidade = () => {
  const { cityId } = useParams<{ cityId: string }>();

  const isValidCityId = (id: string | undefined): id is CityId => {
    return id ? id in cityData : false;
  };
  
  if (!isValidCityId(cityId)) {
    return <Navigate to="/not-found" replace />;
  }

  const data = cityData[cityId];
  const fullData = data as FullLayoutData;

  return (
    <>
      <Helmet>
        <title>{fullData.seo.title}</title>
        <meta name="description" content={fullData.seo.description} />
        <meta name="keywords" content={fullData.seo.keywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={fullData.seo.title} />
        <meta property="og:description" content={fullData.seo.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={fullData.seo.canonical} />
      </Helmet>

      <div className="bg-background">
        <TopBar whatsappNumber={fullData.whatsappNumber} />
        <Header city={fullData.city} whatsappNumber={fullData.whatsappNumber} />
        <main>
          <Hero 
            city={fullData.city} 
            whatsappNumber={fullData.whatsappNumber}
            callNumber={fullData.callNumber}
            neighborhoods={fullData.neighborhoods} 
          />
          <Vantagens />
          <ServicosComImagens />
          <ServicosDetalhes />
          <SobreNos />
          <ComoFunciona />
          <Depoimentos city={fullData.city} />
          
          <Contato whatsappNumber={fullData.whatsappNumber} callNumber={fullData.callNumber} />
        </main>
        <Footer whatsappNumber={fullData.whatsappNumber} callNumber={fullData.callNumber} />
        <StructuredData city={fullData.city} phone={fullData.callNumber} neighborhoods={fullData.neighborhoods} />
        <WhatsappFlutuante whatsappNumber={fullData.whatsappNumber} />
      </div>
    </>
  );
};

export default PaginaCidade;