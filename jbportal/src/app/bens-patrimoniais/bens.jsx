'use client';

import { Roboto } from 'next/font/google';
import { LuSofa } from "react-icons/lu";
import { BsHouseCheckFill } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";

// Declara a fonte Roboto com as variantes que você deseja
const roboto = Roboto({
  weight: ['400', '700'], // Pesos desejados
  subsets: ['latin'], // Subconjuntos de caracteres
});

export default function Bens() {
  return (
    <div className={`bg-white py-16 w-full ${roboto.className}`}>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8">
  <a href="https://cloud.psalsis.com.br//PortalMoveis">
    <div className="bg-[#002A66] text-white w-[90%] sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] hover:text-white group transition-all duration-300 ease-in-out relative">
      <LuSofa className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
      <span className="mt-4 text-[16px] font-semibold text-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out">BENS MÓVEIS</span>
      <span className="hidden group-hover:flex justify-center items-center absolute inset-0 text-[20px] font-semibold transition-opacity duration-500 ease-in-out">BENS MÓVEIS</span>
    </div>
</a>
        {/* Botão 2 */}
        <a href="https://cloud.psalsis.com.br//PortalImoveis">
    <div className="bg-[#002A66] text-white w-[90%] sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] hover:text-white group transition-all duration-300 ease-in-out relative">
      < BsHouseCheckFill className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
      <span className="mt-4 text-[16px] font-semibold text-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out">BENS IMÓVEIS</span>
      <span className="hidden group-hover:flex justify-center items-center absolute inset-0 text-[20px] font-semibold transition-opacity duration-500 ease-in-out">BENS IMÓVEIS</span>
    </div>
  </a>
        {/* Botão 3 */}
        <a href="../veiculos">
    <div className="bg-[#002A66] text-white w-[90%] sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] hover:text-white group transition-all duration-300 ease-in-out relative">
      <FaCarSide  className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
      <span className="mt-4 text-[16px] font-semibold text-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
        VEÍCULOS
      </span>
      <span className="hidden group-hover:flex justify-center items-center absolute inset-0 text-[20px] font-semibold text-center transition-opacity duration-500 ease-in-out">
      VEÍCULOS
      </span>
    </div>
  </a>
      </div>
    </div>
  );
}

