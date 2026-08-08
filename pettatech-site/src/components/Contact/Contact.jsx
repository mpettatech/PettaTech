import { MessageCircle, Mail } from "lucide-react";

// --- Personalize aqui ---
const WHATSAPP_NUMBER = "5511911543874"; // formato: DDI + DDD + número, sem espaços/símbolos
const WHATSAPP_MESSAGE = "Olá! Vim pelo site da PettaTech e gostaria de saber mais.";
const EMAIL = "pettatech@outlook.com.br";
// ------------------------

export default function Contato() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;
  const emailLink = `mailto:${EMAIL}`;

  return (
    <section
      id="contato"
      className="w-full bg-gray-50 py-20 px-6 flex flex-col items-center text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Fale com a gente
      </h2>
      <p className="text-gray-600 max-w-md mb-10">
        Escolha o canal que preferir e responderemos o mais rápido possível.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition-colors text-white font-medium px-6 py-3 rounded-full shadow-sm"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>

        <a
          href={emailLink}
          className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 transition-colors text-white font-medium px-6 py-3 rounded-full shadow-sm"
        >
          <Mail size={20} />
          {EMAIL}
        </a>
      </div>
    </section>
  );
}
