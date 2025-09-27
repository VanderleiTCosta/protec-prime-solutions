import { Phone, Map, FileText, Wrench } from "lucide-react";

const passos = [
  {
    icon: Phone,
    titulo: "1. Contato Imediato",
    descricao: "Você entra em contato pelo telefone ou WhatsApp, 24h por dia.",
  },
  {
    icon: Map,
    titulo: "2. Visita Técnica",
    descricao: "Nossa equipe chega rapidamente ao seu local para avaliar o problema.",
  },
  {
    icon: FileText,
    titulo: "3. Orçamento Grátis",
    descricao: "Apresentamos um orçamento justo e sem compromisso para o serviço.",
  },
  {
    icon: Wrench,
    titulo: "4. Execução do Serviço",
    descricao: "Após a aprovação, realizamos o desentupimento com garantia e eficiência.",
  },
];

const ComoFunciona = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Como Funciona Nosso Atendimento
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Nosso processo é simples, rápido e transparente para resolver seu problema sem dor de cabeça.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {passos.map((passo, index) => (
            <div key={index} className="bg-card p-6 rounded-lg text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center">
                  <passo.icon className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{passo.titulo}</h3>
              <p className="text-muted-foreground">{passo.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;