import { useParams, Navigate } from "react-router-dom";
import { cityData, SimpleLayoutData, FullLayoutData } from "@/data/cityData";

import PaginaBairroSimples from "./PaginaBairroSimples";

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

  if (data.layout === 'simple') {
    return <PaginaBairroSimples data={data as SimpleLayoutData} />;
  }

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
        <Header city={fullData.city} phone={fullData.phone} />
        <main>
          <Hero city={fullData.city} phone={fullData.phone} neighborhoods={fullData.neighborhoods} />
          <Vantagens />
          <ServicosComImagens />
          <SobreNos />
          <ComoFunciona />
          <Depoimentos city={fullData.city} />
          <Contato phone={fullData.phone} />
        </main>
        <Footer city={fullData.city} />
        <StructuredData city={fullData.city} phone={fullData.phone} neighborhoods={fullData.neighborhoods} />
      </div>
    </>
  );
};

export default PaginaCidade;