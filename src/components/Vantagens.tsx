import { Clock, DollarSign, Shield, Wrench } from "lucide-react";

const vantagens = [
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description: "Emergências não esperam horário comercial"
  },
  {
    icon: DollarSign,
    title: "Orçamento Grátis",
    description: "Avaliação sem compromisso"
  },
  {
    icon: Shield,
    title: "Garantia de 3 Meses",
    description: "Segurança total no serviço"
  },
  {
    icon: Wrench,
    title: "Sem Quebra-Quebra",
    description: "Técnicas modernas de desentupimento"
  }
];

const Vantagens = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Por que escolher nossos serviços?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vantagens.map((vantagem, index) => (
            <div 
              key={index}
              className="text-center bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-smooth"
            >
              <div className="bg-service text-service-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <vantagem.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {vantagem.title}
              </h3>
              <p className="text-muted-foreground">
                {vantagem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vantagens;