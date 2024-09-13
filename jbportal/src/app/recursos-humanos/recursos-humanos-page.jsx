import Image from 'next/image';
import { FaHome, FaUsers } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { PiBookOpenUserBold } from "react-icons/pi";
import { Roboto } from 'next/font/google';

// Declara a fonte Roboto com as variantes que você deseja
const roboto = Roboto({
  weight: ['400', '700'], // Pesos desejados
  subsets: ['latin'], // Subconjuntos de caracteres
});

export default function RecursosHumanos() {
  return (
    <div className={`bg-white py-16 w-full flex justify-center ${roboto.className}`}>
      <div className="flex justify-center space-x-8">
        {/* Botão 1 */}
        <div className="bg-[#002A66] text-white w-[300px] h-[200px] flex flex-col justify-center items-center shadow-lg hover:bg-white hover:text-[#002A66] group transition-all duration-500 ease-in-out">
          <FaUsers className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />
          <span className="mt-4 text-[16px] font-semibold group-hover:opacity-0 transition-opacity duration-500 ease-in-out">SERVIDORES</span>
          <span className="hidden group-hover:block text-[20px] font-semibold transition-opacity duration-500 ease-in-out">SERVIDORES</span>
        </div>

        {/* Botão 2 */}
        <div className="bg-[#002A66] text-white w-[300px] h-[200px] flex flex-col justify-center items-center shadow-lg hover:bg-white hover:text-[#002A66] group transition-all duration-500 ease-in-out">
          <GrDocumentText className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />
          <span className="mt-4 text-[16px] font-semibold group-hover:opacity-0 transition-opacity duration-500 ease-in-out">ESTAGIÁRIOS</span>
          <span className="hidden group-hover:block text-[20px] font-semibold transition-opacity duration-500 ease-in-out">ESTAGIÁRIOS</span>
        </div>

        {/* Botão 3 */}
        <div className="bg-[#002A66] text-white w-[300px] h-[200px] flex flex-col justify-center items-center shadow-lg hover:bg-white hover:text-[#002A66] group transition-all duration-500 ease-in-out">
          <PiBookOpenUserBold className="text-4xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />
          <span className="mt-6 text-[16px] text-center font-semibold group-hover:opacity-0 transition-opacity duration-500 ease-in-out">TERCEIRIZADOS</span>
          <span className="hidden my-[96px]  text-[22px] text-center group-hover:block font-semibold transition-opacity duration-500 ease-in-out">TERCEIRIZADOS</span>
        </div>
      </div>
    </div>
  );
}
