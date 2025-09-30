import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faq = () => {
  // O link externo que você forneceu
  const externalLink = "https://desentupidoraprotec.com.br/";

  const faqItems = [
    {
      question: "O que fazer quando o cano de esgoto está entupido?",
      answer:
        `Se for um entupimento leve, você pode tentar jogar água quente. No entanto, evite usar produtos químicos corrosivos, pois eles podem danificar a tubulação. Para entupimentos persistentes, o ideal é chamar uma <a href="${externalLink}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline"><strong>empresa de desentupimento de esgoto</strong></a> profissional para resolver o problema com segurança e eficiência.`,
    },
    {
      question: "Com que frequência devo realizar a limpeza da caixa de gordura?",
      answer:
        `Para residências, recomendamos a <a href="${externalLink}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline"><strong>limpeza da caixa de gordura</strong></a> a cada 6 meses. Em estabelecimentos comerciais como restaurantes, a frequência deve ser mensal. A manutenção preventiva evita o transbordamento, mau cheiro e o entupimento dos canos da cozinha.`,
    },
    {
      question: "Como desentupir o ralo do banheiro de forma segura?",
      answer:
        `Primeiro, tente remover cabelos e resíduos visíveis da superfície do ralo. Uma mistura de bicarbonato de sódio e vinagre pode ajudar a dissolver obstruções de sabão. Se o <a href="${externalLink}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline"><strong>ralo do banheiro continuar entupido</strong></a>, é sinal de um problema mais profundo, sendo necessário contatar um profissional.`,
    },
    {
      question: "Qual a diferença entre desentupimento comum e hidrojateamento?",
      answer:
        `O desentupimento comum utiliza sondas e máquinas rotativas para quebrar a obstrução. Já o <a href="${externalLink}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline"><strong>hidrojateamento</strong></a> é uma limpeza completa da tubulação, feita com jatos de água em altíssima pressão. Ele remove toda a gordura e detritos incrustados nas paredes do cano, sendo a solução mais eficaz e duradoura para entupimentos recorrentes.`,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Dúvidas Frequentes</h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
            <AccordionContent>
              <p dangerouslySetInnerHTML={{ __html: item.answer }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;