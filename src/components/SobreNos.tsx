import { useParams } from 'react-router-dom';
import { cityData, FullLayoutData } from '@/data/cityData';
import { ShieldCheck, Users, Wrench } from 'lucide-react';

const SobreNos = () => {
  // Pega o ID da cidade pela URL (ex: "sao-paulo")
  const { cityId } = useParams<{ cityId: string }>();

  // Validação para garantir que cityId existe
  if (!cityId || !(cityId in cityData)) {
    // Pode retornar um componente de erro ou null se preferir
    return null;
  }
  
  const data = cityData[cityId] as FullLayoutData;

  // Se não houver dados 'about' para a cidade, não renderiza nada
  if (!data.about) {
    return null;
  }

  // Puxa os dados dinâmicos da seção "about"
  const { title, text1, text2, imageUrl, imageAlt } = data.about;

  return (
    <section id="sobre-nos" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={imageUrl}  
              alt={imageAlt}   
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {text1}
            </p>
            <p className="text-muted-foreground mb-6">
              {text2}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Equipe Qualificada</h3>
                  <p className="text-muted-foreground">Nossos técnicos são treinados e certificados para resolver qualquer desafio.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Wrench className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Tecnologia de Ponta</h3>
                  <p className="text-muted-foreground">Utilizamos equipamentos modernos que evitam quebras e garantem a eficiência.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Garantia e Segurança</h3>
                  <p className="text-muted-foreground">Oferecemos garantia em todos os nossos serviços, com total transparência.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;