'use client';

import Image from 'next/image';
import Menu from "../components/Menu";
import ScrollToTop from '../components/ScrollToTop';
import Footer from './Footer';

export default function Model({ children, caminhoImagem, titulo, subtitulo }) {
  return (
    <div>
      <Menu />
      <div className="relative w-full h-[275px] flex items-end justify-center bg-[#00224E]">
        <Image
          src={caminhoImagem}
          alt="background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />

        <div className="absolute inset-0 "></div>

        <div className="z-10 text-center text-white pb-4">
          <h1 className="text-[41px] font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">{titulo}</h1>
          <p className="text-[14px] ">{subtitulo}</p>
        </div>
      </div>

      {children}
      <ScrollToTop />
      <Footer />
    </div>
  );
}
