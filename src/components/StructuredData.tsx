import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  city: string;
  phone: string;
  neighborhoods?: string[];
}

const StructuredData = ({ city, phone, neighborhoods }: StructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Desentupidora ${city}`,
    "image": "https://desentupidora.com.br/desentupidora-og.jpg",
    "telephone": phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city === "Campinas" ? -22.9099 : -23.5505,
      "longitude": city === "Campinas" ? -47.0626 : -46.6333
    },
    "url": `https://desentupidora.com.br/${city.toLowerCase().replace(/\s/g, '-')}`,
    "openingHours": [
      "Mo-Su 00:00-23:59"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": city === "Campinas" ? -22.9099 : -23.5505,
        "longitude": city === "Campinas" ? -47.0626 : -46.6333
      },
      "geoRadius": "50000"
    },
    "priceRange": "$$",
    "currenciesAccepted": "BRL",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "description": `Desentupidora 24 horas em ${city}. Atendimento rápido, orçamento grátis e garantia de 3 meses. Chegamos em até 30 minutos.`,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Desentupimento",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desentupimento de Pia",
            "description": "Desentupimento rápido de pias de cozinha e banheiro"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Desentupimento de Vaso Sanitário",
            "description": "Solução rápida para vasos sanitários entupidos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Desentupimento de Esgoto",
            "description": "Limpeza completa da rede de esgoto com hidrojateamento"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;