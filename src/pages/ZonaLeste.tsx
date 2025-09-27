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

const ZonaLeste = () => {
  const city = "Zona Leste - SP";
  const phone = "(11) 94010-3334";
  const neighborhoods = [
    "Tatuapé", "Moóca", "Vila Prudente", "Penha", 
    "Itaquera", "Vila Matilde", "Anália Franco", "Vila Formosa"
  ];

  return (
    <>
      <Helmet>
        <title>Desentupidora 24 Horas na Zona Leste SP | Atendimento Rápido</title>
        <meta 
          name="description" 
          content="Desentupidora 24 horas na Zona Leste de São Paulo. Atendimento rápido, orçamento grátis e garantia de 3 meses. Chegamos em até 30 minutos. Ligue: (11) 94010-3334" 
        />
        <meta name="keywords" content="desentupidora zona leste, desentupimento 24h tatuapé, desentupidora moóca, hidrojateamento zona leste" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Desentupidora 24 Horas na Zona Leste SP | Atendimento Rápido" />
        <meta property="og:description" content="Desentupidora 24 horas na Zona Leste de São Paulo. Atendimento rápido, orçamento grátis e garantia de 3 meses." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://desentupimentosaopaulo.com.br/zona-leste" />
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
                    Atendimento Especializado na Zona Leste
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Nossa base na Zona Leste de São Paulo permite um atendimento ágil em bairros como Tatuapé, Moóca e Itaquera. Sabemos que um entupimento não pode esperar e garantimos a chegada rápida da nossa equipe.
                  </p>
                  <p className="text-muted-foreground">
                    Utilizamos equipamentos de ponta para resolver qualquer tipo de obstrução, de residências a grandes comércios, sempre com a qualidade e a garantia que a Protec oferece.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1616439119539-78a3cbf36a4b?w=500&q=80"
                    alt="Ponte Estaiada na Zona Leste de São Paulo"
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

export default ZonaLeste;