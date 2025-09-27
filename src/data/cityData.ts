// src/data/cityData.ts

// Importe as imagens que você quer usar para cada cidade
import ImagemSP from '@/assets/hero.png'; 
import ImagemCampinas from '@/assets/desentupidora-veiculo.png'; 
import ImagemVinhedo from '@/assets/desentupidora-veiculo.png';
import ImagemZL from '@/assets/desentupidora-veiculo.png'; 

export const cityData = {
  "sao-paulo": {
    city: "São Paulo",
    phone: "(11) 94010-3334",
    neighborhoods: ["Centro", "Vila Madalena", "Pinheiros", "Moema", "Ipanema", "Vila Olímpia", "Brooklin", "Itaim Bibi"],
    seo: {
      title: "Desentupidora 24 Horas em São Paulo | Atendimento Rápido",
      description: "Desentupidora 24 horas em São Paulo. Atendimento rápido, orçamento grátis e garantia de 3 meses. Chegamos em até 30 minutos. Ligue: (11) 94010-3334",
      keywords: "desentupidora são paulo, desentupimento 24h sp, desentupidora moema, hidrojateamento são paulo",
      canonical: "https://seusite.com.br/sao-paulo"
    },
    about: {
      title: "Especialistas em Desentupimento em São Paulo",
      text1: "Com anos de experiência atendendo a metrópole, entendemos as particularidades de cada bairro de São Paulo. Nossa equipe está distribuída estrategicamente para garantir um tempo de chegada de até 30 minutos em qualquer região.",
      text2: "Seja um entupimento residencial no Itaim Bibi ou uma emergência comercial no Centro, temos a tecnologia e a equipe qualificada para resolver seu problema com a máxima eficiência e profissionalismo, 24 horas por dia.",
      imageUrl: ImagemSP,
      imageAlt: "Avenida Paulista - São Paulo"
    }
  },
  "campinas": {
    city: "Campinas",
    phone: "(11) 94010-3334",
    neighborhoods: ["Centro", "Cambuí", "Taquaral", "Jardim Guanabara", "Vila Industrial", "Barão Geraldo", "Jardim das Palmeiras"],
    seo: {
      title: "Desentupidora 24 Horas em Campinas | Atendimento Rápido",
      description: "Desentupidora 24 horas em Campinas. Atendimento rápido, orçamento grátis e garantia de 3 meses.",
      keywords: "desentupidora campinas, desentupimento 24h campinas, desentupidora cambuí, hidrojateamento campinas",
      canonical: "https://seusite.com.br/campinas"
    },
    about: {
      title: "Sua Desentupidora de Confiança em Campinas",
      text1: "A Protec oferece atendimento 24 horas em toda a cidade de Campinas. Com equipes posicionadas perto de bairros como Cambuí, Taquaral e Barão Geraldo, garantimos a agilidade que você precisa.",
      text2: "Nossa missão é oferecer um serviço de desentupimento de alta qualidade, com preço justo e garantia, restabelecendo o bem-estar e a tranquilidade em sua casa ou empresa.",
      imageUrl: ImagemCampinas,
      imageAlt: "Catedral Metropolitana de Campinas"
    }
  },
  "vinhedo": {
    city: "Vinhedo",
    phone: "(11) 94010-3334",
    neighborhoods: ["Centro", "Vila João XXIII", "Pinheirinho", "Jardim Mirante", "Vila Planalto", "Altos de Vinhedo", "Capela"],
    seo: {
      title: "Desentupidora 24 Horas em Vinhedo | Atendimento Rápido",
      description: "Desentupidora 24 horas em Vinhedo. Atendimento rápido, orçamento grátis e garantia de 3 meses.",
      keywords: "desentupidora vinhedo, desentupimento 24h vinhedo, desentupidora capela, hidrojateamento vinhedo",
      canonical: "https://seusite.com.br/vinhedo"
    },
    about: {
      title: "Soluções de Desentupimento em Vinhedo",
      text1: "Atendemos Vinhedo e toda a região com agilidade e a máxima eficiência. Nossas equipes conhecem bem a cidade e estão prontas para chegar rapidamente em bairros como o Centro, Capela e Pinheirinho.",
      text2: "Seja para um entupimento em sua residência ou uma necessidade em seu comércio, conte com a Protec para um serviço limpo, com garantia e o melhor custo-benefício da região.",
      imageUrl: ImagemVinhedo,
      imageAlt: "Paisagem de Vinhedo"
    }
  },
  "zona-leste": {
    city: "Zona Leste - SP",
    phone: "(11) 94010-3334",
    neighborhoods: ["Tatuapé", "Moóca", "Vila Prudente", "Penha", "Itaquera", "Vila Matilde", "Anália Franco", "Vila Formosa"],
    seo: {
      title: "Desentupidora 24 Horas na Zona Leste SP | Atendimento Rápido",
      description: "Desentupidora 24 horas na Zona Leste de São Paulo. Atendimento rápido, orçamento grátis e garantia de 3 meses.",
      keywords: "desentupidora zona leste, desentupimento 24h tatuapé, desentupidora moóca, hidrojateamento zona leste",
      canonical: "https://seusite.com.br/zona-leste"
    },
    about: {
      title: "Atendimento Especializado na Zona Leste",
      text1: "Nossa base na Zona Leste de São Paulo permite um atendimento ágil em bairros como Tatuapé, Moóca e Itaquera. Sabemos que um entupimento não pode esperar e garantimos a chegada rápida da nossa equipe.",
      text2: "Utilizamos equipamentos de ponta para resolver qualquer tipo de obstrução, de residências a grandes comércios, sempre com a qualidade e a garantia que a Protec oferece.",
      imageUrl: ImagemZL,
      imageAlt: "Ponte Estaiada na Zona Leste de São Paulo"
    }
  }
};

export type CityData = typeof cityData[keyof typeof cityData];