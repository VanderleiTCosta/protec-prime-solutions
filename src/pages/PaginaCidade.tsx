import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { cityData, CityData } from "@/data/cityData";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vantagens from "@/components/Vantagens";
import Servicos from "@/components/Servicos";
import ComoFunciona from "@/components/ComoFunciona";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

// Define a interface para as chaves do objeto cityData
type CityId = keyof typeof cityData;

const PaginaCidade = () => {
  const { cityId } = useParams<{ cityId: string }>();

  // Verifica se o cityId é uma chave válida
  const isValidCityId = (id: string | undefined): id is CityId => {
    return id ? id in cityData : false;
  };
  
  if (!isValidCityId(cityId)) {
    return <Navigate to="/not-found" replace />;
  }

  const data: CityData = cityData[cityId];

  return (
    <>
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <meta name="keywords" content={data.seo.keywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={data.seo.title} />
        <meta property="og:description" content={data.seo.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={data.seo.canonical} />
      </Helmet>

      <div className="bg-background">
        <Header city={data.city} phone={data.phone} />
        <main>
          <Hero city={data.city} phone={data.phone} />
          
          <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                    {data.about.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    {data.about.text1}
                  </p>
                  <p className="text-muted-foreground">
                    {data.about.text2}
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={data.about.imageUrl}
                    alt={data.about.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          <Vantagens />
          <Servicos />
          <ComoFunciona />
          <Depoimentos city={data.city} />
          <Contato phone={data.phone} />
        </main>
        <Footer city={data.city} />
        <StructuredData city={data.city} phone={data.phone} neighborhoods={data.neighborhoods} />
      </div>
    </>
  );
};

export default PaginaCidade;