'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsBuildings, BsCashStack, BsFileText, BsPeople, BsBarChart, BsEye, BsDatabase, BsSearch, BsInfoCircle } from "react-icons/bs";




const DynamicSlider = dynamic(() => import('react-slick'), {
  ssr: false,
});

export default function ImageSlider() {
  const settings = {
    doots: true,
    infinite: true,
    speed: 950,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,

  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
      <div className="carousel-container  relative mb-10">
        <DynamicSlider {...settings}>
        
          <div className="relative h-4">
            <img src="/images/carta.png" alt="Slide 1" />
            <div className="absolute inset-0 bg-[#000] opacity-20"></div>
          </div>
          <div>
            <img src="/images/ouro.png" alt="Slide 2" />
          </div>
          <div>
            <img src="/images/saibatudo.png" alt="Slide 3" />
          </div>
          <div>
            <img src="/images/homepor.png" alt="Slide 4" />
          </div>
        
        </DynamicSlider>
        <section className="absolute top-80 left-0 w-full h-full flex justify-around items-center p-4 bg-opacity-75 z-10">
  <a href="#institucional" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:translate-y-[-10px]">
    <BsBuildings className="text-6xl text-white" />
    <p className="mt-1 text-xs text-white text-center">INSTITUCIONAL</p>
  </a>
  <a href="#receitas" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:translate-y-[-5px]">
    <BsCashStack className="text-5xl text-white" />
    <p className="mt-1 text-xs text-white text-center">RECEITAS<br />E DESPESAS</p>
  </a>
  <a href="#licitacoes" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:translate-y-[-10px]">
    <BsFileText className="text-6xl text-white" />
    <p className="mt-1 text-xs text-white text-center">LICITAÇÕES<br />E CONTRATOS</p>
  </a>
  <a href="#convenios" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:translate-y-[-10px]">
    <BsPeople className="text-6xl text-white" />
    <p className="mt-1 text-xs text-white text-center w-full max-w-xs">CONVÊNIOS,<br />EMENDAS E OUTROS REPASSES</p>
  </a>
  <a href="#planejamento" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:translate-y-[-10px]">
    <BsBarChart className="text-6xl text-white" />
    <p className="mt-1 text-xs text-white text-center w-full max-w-xs">PLANEJAMENTO<br />E GESTÃO FISCAL</p>
  </a>
  <a href="#transparencia" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:translate-y-[-10px]">
    <BsEye className="text-6xl text-white" />
    <p className="mt-1 text-xs text-white text-center w-full max-w-xs">MAIS<br />TRANSPARÊNCIA</p>
  </a>
  <a href="#governanca" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:translate-y-[-10px]">
    <BsDatabase className="text-6xl text-white" />
    <p className="mt-1 text-xs text-white text-center w-full max-w-xs">GOVERNANÇA DE DADOS<br />E TRANSPARÊNCIA</p>
  </a>
  <a href="#pesquisa" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:translate-y-[-10px]">
    <BsSearch className="text-6xl text-white" />
    <p className="mt-1 text-xs text-white text-center w-full max-w-xs">PESQUISA DE<br />SATISFAÇÃO</p>
  </a>
  <a href="#sic" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:translate-y-[-10px]">
    <BsInfoCircle className="text-6xl text-white" />
    <p className="mt-1 text-xs text-white text-center">SIC</p>
  </a>
  <a href="#radar" className="flex flex-col items-center m-2 transition-transform transform hover:translate-y-[-10px]">
    <img src="/images/radar.svg" alt="Radar" className="w-25 h-12" />
    <p className="mt-1 text-xs text-white text-center w-full max-w-xs">Radar da Transparência Pública</p>
  </a>
</section>

    

      </div>

  );
}
