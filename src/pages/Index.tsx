import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Header from "@/components/Header";
import ServicosComImagens from "@/components/ServicosComImagens";

const Index = () => {
  const phone = "(11) 94010-3334";
  const whatsappUrl = `https://wa.me/55${phone.replace(/\D/g, '')}`;

  return (
    <>
      <Helmet>
        <title>Desentupidora 24 Horas | Atendimento em SP e Região</title>
        <meta 
          name="description" 
          content="Desentupidora 24 horas em São Paulo, Campinas, Vinhedo e Zona Leste. Atendimento rápido, orçamento grátis e garantia. Ligue: (11) 94010-3334" 
        />
        <meta name="keywords" content="desentupidora 24h, desentupimento são paulo, desentupidora campinas, hidrojateamento" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header city="SP e Região" phone={phone} />
        
        {/* Hero */}
        <header className="gradient-hero text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-sm">
              Desentupidora 24 Horas
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Atendimento rápido e profissional em São Paulo e região
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-service hover:bg-service/90 text-service-foreground shadow-service text-lg px-8 py-6"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-6 w-6" />
                {phone}
              </a>
            </Button>
          </div>
        </header>

        {/* Vantagens */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Por que escolher nossos serviços?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-smooth">
                <div className="bg-service text-service-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Atendimento 24/7</h3>
                <p className="text-muted-foreground">Emergências não esperam horário comercial</p>
              </div>
              
              <div className="text-center bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-smooth">
                <div className="bg-service text-service-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">R$</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Orçamento Grátis</h3>
                <p className="text-muted-foreground">Avaliação sem compromisso</p>
              </div>
              
              <div className="text-center bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-smooth">
                <div className="bg-service text-service-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold">3M</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Garantia de 3 Meses</h3>
                <p className="text-muted-foreground">Segurança total no serviço</p>
              </div>
              
              <div className="text-center bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-smooth">
                <div className="bg-service text-service-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold">30min</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Chegada Rápida</h3>
                <p className="text-muted-foreground">Atendimento em até 30 minutos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <ServicosComImagens />

        {/* Depoimentos */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              O que nossos clientes dizem
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Excelente serviço! Resolveram o problema da minha pia em menos de 1 hora. 
                  Profissionais muito educados e o preço justo."
                </p>
                <div className="flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Maria Silva</p>
                    <p className="text-sm text-muted-foreground">Campinas - SP</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Atendimento 24h funcionou mesmo! Tive problema no domingo à noite e eles 
                  vieram rapidinho. Super recomendo!"
                </p>
                <div className="flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    J
                  </div>
                  <div>
                    <p className="font-semibold text-primary">João Oliveira</p>
                    <p className="text-sm text-muted-foreground">São Paulo - SP</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Fizeram o hidrojateamento sem quebrar nada. Ficou perfeito e ainda deram 
                  garantia de 3 meses. Empresa séria!"
                </p>
                <div className="flex items-center gap-2">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Ana Costa</p>
                    <p className="text-sm text-muted-foreground">Vinhedo - SP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Nós */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                  Sobre Nossa Empresa
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Com mais de 10 anos de experiência, somos especialistas em desentupimento 
                  e limpeza em São Paulo e região. Nossa equipe é treinada nas melhores 
                  técnicas do mercado.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-service text-service-foreground w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-muted-foreground">Mais de 5.000 clientes atendidos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-service text-service-foreground w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-muted-foreground">Equipamentos modernos de hidrojateamento</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-service text-service-foreground w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-muted-foreground">Técnicos certificados e experientes</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-emergency/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary">Atendimento Imediato</h3>
                <p className="text-muted-foreground mb-6">
                  Problemas de entupimento podem causar transtornos sérios. Por isso, 
                  nosso compromisso é chegar até você em no máximo 30 minutos.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-emergency hover:bg-emergency/90 text-emergency-foreground"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Atendimento
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© 2025 Desentupidora. Todos os direitos reservados.</p>
            <p className="text-primary-foreground/80 text-sm mt-2">
              Atendimento 24 horas • Orçamento grátis • Garantia de 3 meses
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
