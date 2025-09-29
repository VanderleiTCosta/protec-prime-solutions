// src/data/cityData.ts

import ImagemSP from '@/assets/desentupidora.webp';
import ImagemCampinas from '@/assets/desentupidora.webp';
import ImagemVinhedo from '@/assets/desentupidora.webp';
import ImagemZL from '@/assets/desentupidora.webp';

// --- DEFINIÇÃO DOS TIPOS ATUALIZADA ---
interface SeoData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}

// O tipo 'phone' foi substituído por 'whatsappNumber' e 'callNumber'
export interface FullLayoutData {
  layout: "full";
  city: string;
  whatsappNumber: string; // Número para o WhatsApp
  callNumber: string;     // Número para ligação (0800)
  neighborhoods: string[];
  seo: SeoData;
  about: {
    title: string;
    text1: string;
    text2: string;
    imageUrl: string;
    imageAlt: string;
  };
}

export interface SimpleLayoutData {
  layout: "simple";
  city: string;
  whatsappNumber: string;
  callNumber: string;
  price: string;
  seo: SeoData;
  content: string;
}

export type CityData = FullLayoutData | SimpleLayoutData;

// --- DADOS DO SITE ATUALIZADOS ---
export const cityData: Record<string, CityData> = {
  "sao-paulo": {
    layout: "full",
    city: "São Paulo",
    whatsappNumber: "(11) 94010-3334",
    callNumber: "0800 591 9537",
    neighborhoods: ["Centro", "Vila Madalena", "Pinheiros", "Moema", "Ipanema", "Vila Olímpia", "Brooklin", "Itaim Bibi"],
    seo: {
      title: "Desentupidora 24 Horas em São Paulo | Atendimento Rápido",
      description: "Desentupidora 24 horas em São Paulo. Atendimento rápido, orçamento grátis e garantia de 3 meses. Chegamos em até 30 minutos.",
      keywords: "desentupidora são paulo, desentupimento 24h sp, desentupidora moema, hidrojateamento são paulo",
      canonical: "https://seusite.com.br/sao-paulo"
    },
    about: {
      title: "Especialistas em Desentupimento em São Paulo",
      text1: "Com anos de experiência atendendo a metrópole, entendemos as particularidades de cada bairro. Nossa equipe está distribuída estrategicamente para garantir um tempo de chegada de até 30 minutos em qualquer região.",
      text2: "Seja um entupimento residencial ou uma emergência comercial, temos a tecnologia e a equipe qualificada para resolver seu problema com a máxima eficiência.",
      imageUrl: ImagemSP,
      imageAlt: "Avenida Paulista - São Paulo"
    }
  },
  "campinas": {
    layout: "full",
    city: "Campinas",
    whatsappNumber: "(19) 99714-3909",
    callNumber: "0800 591 9537",
    neighborhoods: ["Centro", "Cambuí", "Taquaral", "Jardim Guanabara", "Vila Industrial", "Barão Geraldo"],
    seo: {
      title: "Desentupidora 24 Horas em Campinas | Atendimento Rápido",
      description: "Desentupidora 24 horas em Campinas. Atendimento rápido, orçamento grátis e garantia de 3 meses.",
      keywords: "desentupidora campinas, desentupimento 24h campinas, desentupidora cambuí, hidrojateamento campinas",
      canonical: "https://seusite.com.br/campinas"
    },
    about: {
      title: "Sua Desentupidora de Confiança em Campinas",
      text1: "A Protec oferece atendimento 24 horas em toda a cidade de Campinas. Com equipes posicionadas perto de bairros como Cambuí, Taquaral e Barão Geraldo, garantimos a agilidade que você precisa.",
      text2: "Nossa missão é oferecer um serviço de desentupimento de alta qualidade, com preço justo e garantia, restabelecendo o bem-estar em sua casa ou empresa.",
      imageUrl: ImagemCampinas,
      imageAlt: "Catedral Metropolitana de Campinas"
    }
  },
   "vinhedo": {
    layout: "full",
    city: "Vinhedo",
    whatsappNumber: "(19) 99714-3909",
    callNumber: "0800 591 9537",
    neighborhoods: ["Centro", "Vila João XXIII", "Pinheirinho", "Jardim Mirante", "Capela"],
    seo: {
      title: "Desentupidora 24 Horas em Vinhedo | Atendimento Rápido",
      description: "Desentupidora 24 horas em Vinhedo. Atendimento rápido, orçamento grátis e garantia.",
      keywords: "desentupidora vinhedo, desentupimento 24h vinhedo, desentupidora capela, hidrojateamento vinhedo",
      canonical: "https://seusite.com.br/vinhedo"
    },
    about: {
      title: "Soluções de Desentupimento em Vinhedo",
      text1: "Atendemos Vinhedo e toda a região com agilidade. Nossas equipes conhecem bem a cidade para chegar rapidamente em bairros como o Centro, Capela e Pinheirinho.",
      text2: "Seja para um entupimento em sua residência ou comércio, conte com a Protec para um serviço limpo, com garantia e o melhor custo-benefício.",
      imageUrl: ImagemVinhedo,
      imageAlt: "Paisagem de Vinhedo"
    }
  },
  "zona-leste": {
    layout: "full",
    city: "Zona Leste - SP",
    whatsappNumber: "(11) 94010-3334",
    callNumber: "0800 591 9537",
    neighborhoods: ["Tatuapé", "Moóca", "Vila Prudente", "Penha", "Itaquera", "Vila Matilde", "Anália Franco"],
    seo: {
      title: "Desentupidora 24 Horas na Zona Leste SP | Atendimento Rápido",
      description: "Desentupidora 24 horas na Zona Leste de São Paulo. Atendimento rápido, orçamento grátis e garantia.",
      keywords: "desentupidora zona leste, desentupimento 24h tatuapé, desentupidora moóca, hidrojateamento zona leste",
      canonical: "https://seusite.com.br/zona-leste"
    },
    about: {
      title: "Atendimento Especializado na Zona Leste",
      text1: "Nossa base na Zona Leste de São Paulo permite um atendimento ágil em bairros como Tatuapé, Moóca e Itaquera. Sabemos que um entupimento não pode esperar.",
      text2: "Utilizamos equipamentos de ponta para resolver qualquer tipo de obstrução, de residências a grandes comércios, sempre com a qualidade e a garantia que a Protec oferece.",
      imageUrl: ImagemZL,
      imageAlt: "Ponte Estaiada na Zona Leste de São Paulo"
    }
  },
};