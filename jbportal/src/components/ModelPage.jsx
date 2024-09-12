'use client';

import Image from 'next/image';
import Menu from "../components/Menu";
import ScrollToTop from '../components/ScrollToTop';
import Footer from './Footer';

export default function Model({ children, caminhoImagem, titulo, subtitulo }) {
  return (
    <div>
        <Menu />
        <div className="relative w-full h-[250px] flex items-end justify-center bg-[#00224E]">
          {/* Imagem de fundo */}
          <Image
            src={caminhoImagem}
            alt="background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          {/* Camada de sobreposição para escurecer a imagem */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          {/* Conteúdo sobre a imagem */}
          <div className="z-10 text-center text-white pb-4">
            <h1 className="text-[41px] font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">{titulo}</h1>
            {/* Aumenta o título */}
            <p className="text-[14px]">{subtitulo}</p>
          </div>
        </div>

        {children}

        <ScrollToTop />
        <Footer />
    </div>
  );
}
