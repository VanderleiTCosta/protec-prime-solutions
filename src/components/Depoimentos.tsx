import { Star } from "lucide-react";

interface DepoimentosProps {
  city: string;
}

const Depoimentos = ({ city }: DepoimentosProps) => {
  const depoimentos = [
    {
      nome: "João Silva",
      local: city,
      texto: "Resolvido em menos de 1 hora! Excelente atendimento e preço justo. Recomendo!",
      estrelas: 5
    },
    {
      nome: "Maria Santos",
      local: city,
      texto: "Equipe muito profissional. Chegaram rapidamente e resolveram o problema sem bagunça.",
      estrelas: 5
    },
    {
      nome: "Carlos Oliveira",
      local: city,
      texto: "Atendimento 24 horas funcionou perfeitamente. Problema resolvido de madrugada!",
      estrelas: 5
    }
  ];
  
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          O que nossos clientes dizem
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(depoimento.estrelas)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-service text-service" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-4 italic">
                "{depoimento.texto}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-primary">{depoimento.nome}</p>
                <p className="text-sm text-muted-foreground">{depoimento.local}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;