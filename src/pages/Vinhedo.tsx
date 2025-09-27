import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vantagens from "@/components/Vantagens";
import Servicos from "@/components/Servicos";
import ComoFunciona from "@/components/ComoFunciona";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const Vinhedo = () => {
  const city = "Vinhedo";
  const phone = "(11) 94010-3334";
  const neighborhoods = [
    "Centro", "Vila João XXIII", "Pinheirinho", "Jardim Mirante", 
    "Vila Planalto", "Altos de Vinhedo", "Capela"
  ];

  return (
    <>
      <Helmet>
        <title>Desentupidora 24 Horas em Vinhedo | Atendimento Rápido</title>
        <meta 
          name="description" 
          content="Desentupidora 24 horas em Vinhedo. Atendimento rápido, orçamento grátis e garantia de 3 meses. Chegamos em até 30 minutos. Ligue: (11) 94010-3334" 
        />
        <meta name="keywords" content="desentupidora vinhedo, desentupimento 24h vinhedo, desentupidora capela, hidrojateamento vinhedo" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Desentupidora 24 Horas em Vinhedo | Atendimento Rápido" />
        <meta property="og:description" content="Desentupidora 24 horas em Vinhedo. Atendimento rápido, orçamento grátis e garantia de 3 meses." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://desentupimentovinhedo.com.br/vinhedo" />
      </Helmet>

      <div className="bg-background">
        <Header city={city} phone={phone} />
        <main>
          <Hero city={city} phone={phone} />
          
          <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                    Soluções de Desentupimento em Vinhedo
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Atendemos Vinhedo e toda a região com agilidade e a máxima eficiência. Nossas equipes conhecem bem a cidade e estão prontas para chegar rapidamente em bairros como o Centro, Capela e Pinheirinho.
                  </p>
                  <p className="text-muted-foreground">
                    Seja para um entupimento em sua residência ou uma necessidade em seu comércio, conte com a Protec para um serviço limpo, com garantia e o melhor custo-benefício da região.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1599819897118-a736a1e3597c?w=500&q=80"
                    alt="Paisagem de Vinhedo"
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
          <Depoimentos city={city} />
          <Contato phone={phone} />
        </main>
        <Footer city={city} />
        <StructuredData city={city} phone={phone} neighborhoods={neighborhoods} />
      </div>
    </>
  );
};

export default Vinhedo;