interface FooterProps {
  city: string;
  year?: number;
}

const Footer = ({ city, year = 2025 }: FooterProps) => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-4">
            © {year} Desentupidora {city}. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/80 text-sm">
            Atendimento 24 horas • Orçamento grátis • Garantia de 3 meses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;