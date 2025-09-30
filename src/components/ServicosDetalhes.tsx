// src/components/ServicosDetalhes.tsx

import React from 'react';

const ServicosDetalhes = () => {
  const externalLink = "https://desentupidoraprotec.com.br/";

  // Função para criar o link
  const createLink = (text: string) => 
    `<a href="${externalLink}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline"><strong>${text}</strong></a>`;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 text-primary">Nossos Serviços em Detalhes</h2>
      <div className="space-y-8">
        
        {/* Desentupimento de Esgoto */}
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-primary">Desentupimento de Esgoto</h3>
          <p 
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: `Nossa ${createLink('empresa de desentupimento de esgoto')} atua em toda a região, oferecendo soluções completas para residências, comércios e indústrias. Se você está enfrentando problemas com ${createLink('cano de esgoto entupido')}, mau cheiro ou lentidão no escoamento, nossa equipe utiliza equipamentos modernos para a ${createLink('desobstrução de esgoto')} de forma rápida e limpa. Realizamos desde a ${createLink('limpeza de caixa de esgoto residencial')} até serviços complexos de hidrojateamento, garantindo um resultado duradouro. Não deixe um ${createLink('esgoto entupido')} causar mais transtornos, chame nossa ${createLink('empresa que desentope esgoto')} e resolva o problema na raiz.`
            }}
          />
        </div>

        {/* Desentupimento de Ralo */}
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-primary">Desentupimento de Ralo</h3>
          <p 
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: `O ${createLink('ralo do banheiro entupido')} é um problema comum que pode causar grandes dores de cabeça. Seja o ${createLink('ralo do chuveiro')} ou da pia, nossa equipe é especializada em ${createLink('desentupir ralo de banheiro')} com agilidade. Utilizamos técnicas que removem a obstrução sem danificar sua tubulação. Se você precisa de uma ${createLink('empresa para desentupir ralo')}, conte conosco para um atendimento de emergência. Atendemos chamados para ${createLink('ralo entupido')} 24 horas por dia.`
            }}
          />
        </div>

        {/* Desentupimento de Pia */}
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-primary">Desentupimento de Pia</h3>
          <p 
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: `Uma ${createLink('pia de cozinha entupida')}, geralmente por acúmulo de gordura, pode parar sua rotina. Oferecemos o serviço de ${createLink('desentupir pia de cozinha')} com máquinas especializadas que trituram e removem os detritos do encanamento. Se você já tentou de tudo e a ${createLink('pia não desentope de jeito nenhum')}, não se arrisque com produtos químicos corrosivos. Chame uma ${createLink('empresa desentupidora de pia')} profissional para resolver com segurança.`
            }}
          />
        </div>

        {/* Desentupimento de Vaso Sanitário */}
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-primary">Desentupimento de Vaso Sanitário</h3>
          <p 
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: `Um ${createLink('vaso sanitário entupido')} exige uma solução rápida e higiênica. Nossa ${createLink('empresa desentupidora de vaso')} utiliza equipamentos profissionais que resolvem o problema sem a necessidade de quebrar pisos ou paredes. Se você precisa de um ${createLink('serviço para desentupir vaso sanitário')}, seja por excesso de papel ou objetos indevidos, conte com nosso atendimento de emergência. Somos especialistas em ${createLink('desentupimento de vaso sanitário')} em residências e empresas, garantindo a normalização do uso em pouco tempo.`
            }}
          />
        </div>

        {/* Limpeza de Caixa de Gordura */}
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-primary">Limpeza de Caixa de Gordura</h3>
          <p 
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: `A ${createLink('limpeza da caixa de gordura')} é essencial para evitar o entupimento de canos da cozinha e o mau cheiro. Oferecemos um ${createLink('serviço de limpeza de caixa de gordura')} completo, removendo todos os resíduos acumulados e realizando o descarte correto. Uma ${createLink('caixa de gordura entupida')} pode atrair pragas e causar problemas sérios na sua tubulação. Contrate uma ${createLink('empresa que limpa caixa de gordura')} e mantenha seu sistema hidráulico funcionando perfeitamente.`
            }}
          />
        </div>

        {/* Limpeza de Fossa e Hidrojateamento */}
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-primary">Limpeza de Fossa e Hidrojateamento</h3>
          <p 
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: `Realizamos o serviço de ${createLink('limpeza de fossa')} com caminhões auto vácuo, fazendo a sucção de todos os dejetos de forma segura e eficiente. Além de ${createLink('desentupir fossa')}, também trabalhamos com ${createLink('hidrojateamento de alta pressão')}, uma técnica poderosa para a desobstrução de tubulações complexas e limpeza pesada de superfícies. Se você busca por ${createLink('limpeza de fossas')} ou um serviço de ${createLink('hidrojateamento')}, nossa equipe possui a tecnologia e a experiência necessárias.`
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default ServicosDetalhes;