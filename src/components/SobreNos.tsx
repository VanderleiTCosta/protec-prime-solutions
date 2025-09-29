import { ShieldCheck, Users, Wrench } from 'lucide-react';
import SobreImage from '@/assets/desentupidora-veiculo.png'; // Imagem de exemplo

const SobreNos = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={SobreImage}
              alt="Equipe da Protec Desentupidora"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Sua Desentupidora de Confiança
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Com mais de uma década de experiência, o Grupo Protec se consolidou como referência em soluções de desentupimento em São Paulo e região. Nossa missão é oferecer um serviço rápido, limpo e com garantia, restabelecendo o bem-estar e a tranquilidade em sua casa ou empresa.
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