import { FaLightbulb } from 'react-icons/fa'; // Ícone de lâmpada
import { FaHeartbeat } from 'react-icons/fa'; // Ícone de saúde

export default function Ppp() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-[100px] mb-[100px] space-y-10 md:space-y-0 md:space-x-16">
      
      {/* PPP de Iluminação Pública */}
      <div className="text-center">
        <a 
          href="https://emlume.com.br/consulta-publica-ppp-iluminacao-publica/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-full focus:outline-none"
        >
          <FaLightbulb className="text-[#344C94] h-16 w-16" />
          <span className="mt-4 text-black font-semibold">PPP DE ILUMINAÇÃO PÚBLICA</span>
        </a>
      </div>
      
      {/* PPP da Saúde */}
      <div className="text-center">
        <a 
          href="https://jaboatao.pe.gov.br/ppp-saude/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-full focus:outline-none"
        >
          <FaHeartbeat className="text-[#344C94] h-16 w-16" />
          <span className="mt-4 text-black font-semibold">PPP DA SAÚDE</span>
        </a>
      </div>

    </div>
  );
}
