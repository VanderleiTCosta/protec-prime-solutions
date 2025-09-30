import { Helmet } from "react-helmet-async";

// URL base do site. Mude apenas aqui se o domínio mudar.
const BASE_URL = "https://SEU-DOMINIO.com.br";

interface StructuredDataProps {
  city: string;
  phone: string;
  canonicalUrl: string;
  neighborhoods?: string[];
}

const StructuredData = ({ city, phone, canonicalUrl, neighborhoods }: StructuredDataProps) => {
  
  // 1. Começamos com a descrição base
  let mainDescription = `Desentupidora 24 horas em ${city}. Atendimento rápido, orçamento grátis e garantia de 3 meses. Chegamos em até 30 minutos.`;

  // 2. Adicionamos os bairros à descrição principal, se existirem
  if (neighborhoods && neighborhoods.length > 0) {
    mainDescription += ` Atendemos toda a região de ${city}, incluindo os bairros: ${neighborhoods.join(', ')}.`;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Desentupidora ${city}`,
    "image": `${BASE_URL}/desentupidora-og.jpg`,
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
    "url": canonicalUrl,
    "openingHours": [
      "Mo-Su 00:00-23:59"
    ],
    // ✅ CORREÇÃO 1: Propriedade renomeada para "areaServed"
    "areaServed": {
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
    // ✅ CORREÇÃO 2: Usando a descrição principal que agora inclui os bairros
    "description": mainDescription,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Desentupimento",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desentupimento de Pia"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Desentupimento de Vaso Sanitário"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Desentupimento de Esgoto"
          }
        }
        // ... Adicione outros serviços aqui
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