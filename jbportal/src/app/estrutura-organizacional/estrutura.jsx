import Image from 'next/image';
import { FaHome } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { PiBookOpenUserBold } from "react-icons/pi";
import PdfViewer from '@/components/PdfView';


export default function estrutura() {
    return (
      <div className="bg-white py-16 w-full">
            {/* Ícones na parte superior */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8">
  <a href="https://seulink.com">
    <div className="bg-[#002A66] text-white w-[90%] sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] hover:text-white group transition-all duration-300 ease-in-out relative">
      <FaHome className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
      <span className="mt-4 text-[16px] font-semibold text-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out">INSTITUCIONAL</span>
      <span className="hidden group-hover:flex justify-center items-center absolute inset-0 text-[20px] font-semibold transition-opacity duration-500 ease-in-out">INSTITUCIONAL</span>
    </div>
  </a>

  <a href="https://seulink.com">
    <div className="bg-[#002A66] text-white w-[90%] sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] hover:text-white group transition-all duration-300 ease-in-out relative">
      <GrDocumentText className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
      <span className="mt-4 text-[16px] font-semibold text-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out">SECRETARIAS</span>
      <span className="hidden group-hover:flex justify-center items-center absolute inset-0 text-[20px] font-semibold transition-opacity duration-500 ease-in-out">SECRETARIAS</span>
    </div>
  </a>

  <a href="https://seulink.com">
    <div className="bg-[#002A66] text-white w-[90%] sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] hover:text-white group transition-all duration-300 ease-in-out relative">
      <PiBookOpenUserBold className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
      <span className="mt-4 text-[16px] font-semibold text-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
        ADMINISTRAÇÃO<br />INDIRETA
      </span>
      <span className="hidden group-hover:flex justify-center items-center absolute inset-0 text-[20px] font-semibold text-center transition-opacity duration-500 ease-in-out">
        ADMINISTRAÇÃO<br />INDIRETA
      </span>
    </div>
  </a>
</div>
            {/* Visualizador de PDF */}
            <div className='my-20 ml-16 sm:ml-8 lg:ml-16'> {/* Adiciona margem à esquerda */}
              <PdfViewer />
            </div>

            {/* Links abaixo do PDF */}
            <div className="mt-24 ml-4 sm:ml-[250px]">
          {/* Links */}
          <ul className="space-y-4">
            <li>
              <a href="https://your-link.com" className="text-blue-900 text-[18px] sm:text-[20px] hover:underline">
                LEI COMPLEMENTAR Nº 45/2023
              </a>
            </li>
            <li>
              <a href="https://your-link.com" className="text-blue-900 text-[16px] sm:text-[18px] hover:underline">
                Anexo I – Lei Complementar nº 45 Alterado pela Lei 1.564-2023 – TABELA DE CARGOS
              </a>
            </li>
            <li>
              <a href="https://your-link.com" className="text-blue-900 text-[16px] sm:text-[18px] hover:underline">
                Instrução Normativa nº 04 de 19 de Julho de 2023 – Nomenclatura das Secretarias
              </a>
            </li>
          </ul>
        </div>

      </div>
    );
}
