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

const Campinas = () => {
  const city = "Campinas";
  const phone = "(11) 94010-3334";
  const neighborhoods = [
    "Centro", "Cambuí", "Taquaral", "Jardim Guanabara", 
    "Vila Industrial", "Barão Geraldo", "Jardim das Palmeiras"
  ];

  return (
    <>
      <Helmet>
        <title>Desentupidora 24 Horas em Campinas | Atendimento Rápido</title>
        <meta 
          name="description" 
          content="Desentupidora 24 horas em Campinas. Atendimento rápido, orçamento grátis e garantia de 3 meses. Chegamos em até 30 minutos. Ligue: (11) 94010-3334" 
        />
        <meta name="keywords" content="desentupidora campinas, desentupimento 24h campinas, desentupidora cambuí, hidrojateamento campinas" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Desentupidora 24 Horas em Campinas | Atendimento Rápido" />
        <meta property="og:description" content="Desentupidora 24 horas em Campinas. Atendimento rápido, orçamento grátis e garantia de 3 meses." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://desentupir.onrender.com/campinas" />
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
                    Sua Desentupidora de Confiança em Campinas
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    A Protec oferece atendimento 24 horas em toda a cidade de Campinas. Com equipes posicionadas perto de bairros como Cambuí, Taquaral e Barão Geraldo, garantimos a agilidade que você precisa.
                  </p>
                  <p className="text-muted-foreground">
                    Nossa missão é oferecer um serviço de desentupimento de alta qualidade, com preço justo e garantia, restabelecendo o bem-estar e a tranquilidade em sua casa ou empresa.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1596485154314-7a13c323f5b0?w=500&q=80"
                    alt="Catedral Metropolitana de Campinas"
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

export default Campinas;