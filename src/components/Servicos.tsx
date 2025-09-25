import { Droplets, Home, Trash2, Building, Utensils } from "lucide-react";

const servicos = [
  {
    icon: Utensils,
    title: "Desentupimento de Pia",
    description: "Cozinha e banheiro desentupidos rapidamente"
  },
  {
    icon: Home,
    title: "Desentupimento de Vaso",
    description: "Solução rápida para vasos sanitários"
  },
  {
    icon: Droplets,
    title: "Desentupimento de Ralo",
    description: "Ralos de banheiro, cozinha e área de serviço"
  },
  {
    icon: Building,
    title: "Desentupimento de Esgoto",
    description: "Limpeza completa da rede de esgoto"
  },
  {
    icon: Trash2,
    title: "Limpeza de Caixa de Gordura",
    description: "Manutenção preventiva e corretiva"
  }
];

const Servicos = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Nossos Serviços
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-smooth border-l-4 border-l-emergency"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emergency text-emergency-foreground w-12 h-12 rounded-full flex items-center justify-center">
                  <servico.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {servico.title}
                </h3>
              </div>
              <p className="text-muted-foreground">
                {servico.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;