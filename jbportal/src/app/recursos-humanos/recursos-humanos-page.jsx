import Image from 'next/image';
import { FaUserGraduate, FaUsers } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { FaHandsHelping } from "react-icons/fa";
import { Roboto } from 'next/font/google';

// Declara a fonte Roboto com as variantes que você deseja
const roboto = Roboto({
  weight: ['400', '700'], // Pesos desejados
  subsets: ['latin'], // Subconjuntos de caracteres
});

export default function RecursosHumanos() {
  return (
    <div className={`bg-white py-16 w-full ${roboto.className}`}>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8">
        <a href="../recursos-humanos/remuneracao-servidores">
          <div className="bg-[#002A66] text-white w-[90%] sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] hover:text-white group transition-all duration-300 ease-in-out relative">
            <FaUsers className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
            <span className="mt-4 text-[16px] font-semibold text-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out">SERVIDORES</span>
            <span className="hidden group-hover:flex justify-center items-center absolute inset-0 text-[20px] font-semibold transition-opacity duration-500 ease-in-out">SERVIDORES</span>
          </div>
        </a>
        {/* Botão 2 */}
        <a href="../recursos-humanos/estagiario">
          <div className="bg-[#002A66] text-white w-[90%] sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] hover:text-white group transition-all duration-300 ease-in-out relative">
            <FaUserGraduate className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
            <span className="mt-4 text-[16px] font-semibold text-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out">ESTÁGIARIOS</span>
            <span className="hidden group-hover:flex justify-center items-center absolute inset-0 text-[20px] font-semibold transition-opacity duration-500 ease-in-out">ESTÁGIARIOS</span>
          </div>
        </a>
        {/* Botão 3 */}
        <a href="../recursos-humanos/terceirizado">
          <div className="bg-[#002A66] text-white w-[90%] sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] hover:text-white group transition-all duration-300 ease-in-out relative">
            <FaHandsHelping className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
            <span className="mt-4 text-[16px] font-semibold text-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
              TERCEIRIZADOS
            </span>
            <span className="hidden group-hover:flex justify-center items-center absolute inset-0 text-[20px] font-semibold text-center transition-opacity duration-500 ease-in-out">
              TERCEIRIZADOS
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
