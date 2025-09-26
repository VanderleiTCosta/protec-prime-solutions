import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vantagens from "@/components/Vantagens";
import Servicos from "@/components/Servicos";
import Atendimento from "@/components/Atendimento";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import imgAvenidaPaulista from "@/assets/desentupidora-veiculo.png";

const SaoPaulo = () => {
  const city = "São Paulo";
  const phone = "(11) 94010-3334";
  const neighborhoods = [
    "Centro", "Vila Madalena", "Pinheiros", "Moema", 
    "Ipanema", "Vila Olímpia", "Brooklin", "Itaim Bibi"
  ];

  return (
    <>
      <Helmet>
        <title>Desentupidora 24 Horas em São Paulo | Atendimento Rápido</title>
        <meta 
          name="description" 
          content="Desentupidora 24 horas em São Paulo. Atendimento rápido, orçamento grátis e garantia de 3 meses. Chegamos em até 30 minutos. Ligue: (11) 94010-3334" 
        />
        <meta name="keywords" content="desentupidora são paulo, desentupimento 24h sp, desentupidora moema, hidrojateamento são paulo" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Desentupidora 24 Horas em São Paulo | Atendimento Rápido" />
        <meta property="og:description" content="Desentupidora 24 horas em São Paulo. Atendimento rápido, orçamento grátis e garantia de 3 meses." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://desentupimentosaopaulo.com.br/sao-paulo" />
      </Helmet>

      <Header city={city} phone={phone} />
      <Hero city={city} phone={phone} neighborhoods={neighborhoods} />
      
      {/* Seção Sobre a Cidade */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Especialistas em Desentupimento em São Paulo
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Com anos de experiência atendendo a metrópole, entendemos as particularidades de cada bairro de São Paulo. Nossa equipe está distribuída estrategicamente para garantir um tempo de chegada de até 30 minutos em qualquer região.
              </p>
              <p className="text-muted-foreground">
                Seja um entupimento residencial no Itaim Bibi ou uma emergência comercial no Centro, temos a tecnologia e a equipe qualificada para resolver seu problema com a máxima eficiência e profissionalismo, 24 horas por dia.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={imgAvenidaPaulista}
                alt="Avenida Paulista - São Paulo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Vantagens />
      <Servicos />
      <Atendimento city={city} phone={phone} />
      <Depoimentos city={city} />
      <Contato phone={phone} />
      <Footer city={city} />
      <StructuredData city={city} phone={phone} neighborhoods={neighborhoods} />
    </>
  );
};

export default SaoPaulo;