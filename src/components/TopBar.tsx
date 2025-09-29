import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";

// 1. Definimos a interface para receber a propriedade
interface TopBarProps {
    whatsappNumber?: string; // Propriedade opcional para evitar erros
}

const TopBar = ({ whatsappNumber }: TopBarProps) => {
    // 2. Adicionamos uma verificação para segurança
    if (!whatsappNumber) {
        return null; // Não renderiza nada se o número não for fornecido
    }

    // 3. Usamos a propriedade recebida para criar a URL
    const whatsappUrl = `https://wa.me/55${whatsappNumber.replace(/\D/g, "")}`;

    return (
        <div className="bg-primary text-primary-foreground py-2">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center text-center gap-2 sm:gap-4">
                <p className="text-sm sm:text-base font-medium">
                    Precisando de um Desentupidor? Cobrimos qualquer oferta!
                </p>
                <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full animate-pulse">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="mr-2 h-5 w-5" />
                        <span>Solicite um Orçamento Grátis</span>
                    </a>
                </Button>
            </div>
        </div>
    );
};

export default TopBar;