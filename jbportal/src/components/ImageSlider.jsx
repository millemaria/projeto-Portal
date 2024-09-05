'use client';

import '../app/style/menu-home.css'; 
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsBuildings, BsCashStack, BsFileText, BsPeople, BsBarChart, BsEye, BsDatabase, BsSearch, BsInfoCircle } from "react-icons/bs";
import BorderTop from './BorderTop';
import localFont from 'next/font/local';

const roboto = localFont({
  src: '../utils/Roboto/Roboto-Regular.ttf',
  variable: '--font-roboto',
});

const DynamicSlider = dynamic(() => import('react-slick'), {
  ssr: false,
});

export default function ImageSlider() {
  const settings = {
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
    
    <div className="carousel-container  relative my-">
      <DynamicSlider {...settings}>

        <div className="relative h-4">
          <img src="/images/carta.png" alt="Slide 1" />
          <div className="absolute inset-0 bg-[#000] opacity-20"></div>
        </div>
        <div className="relative h-4">
          <img src="/images/ouro.png" alt="Slide 2" />
          <div className="absolute inset-0 bg-[#000] opacity-20"></div>
        </div>
        <div className="relative h-4">
          <img src="/images/saibatudo.png" alt="Slide 3" />
          <div className="absolute inset-0 bg-[#000] opacity-20"></div>
        </div>
        <div>
          <img src="/images/homepor.png" alt="Slide 4" />
          <div className="absolute inset-0 bg-[#000] opacity-20"></div>
        </div>

      </DynamicSlider>
      <div className="container-menu h-full flex items-center">
        <section className="menu-home absolute mt-[-235px] left-0 w-full h-auto flex flex-wrap justify-around items-center p-4 bg-opacity-75 z-10">
          <a href="#institucional" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:-translate-y-2 sm:pr-2 md:pr-4 lg:pr-6">
            <BsBuildings className="text-6xl text-white" />
            <p className={`${roboto.variable} mt-1 text-xs text-white text-center`}>INSTITUCIONAL</p>
          </a>
          <a href="#receitas" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:-translate-y-2 sm:pr-2 md:pr-4 lg:pr-6">
            <BsCashStack className="text-6xl text-white" />
            <p className={`${roboto.variable} mt-1 text-xs text-white text-center`}>RECEITAS<br />E DESPESAS</p>
          </a>
          <a href="#licitacoes" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:-translate-y-2 sm:pr-2 md:pr-4 lg:pr-6">
            <BsFileText className="text-6xl text-white" />
            <p className={`${roboto.variable} mt-1 text-xs text-white text-center`}>LICITAÇÕES<br />E CONTRATOS</p>
          </a>
          <a href="#convenios" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:-translate-y-2 sm:pr-2 md:pr-4 lg:pr-6">
            <BsPeople className="text-6xl text-white" />
            <p className={`${roboto.variable} mt-1 text-xs text-white text-center`}>CONVÊNIOS,<br />EMENDAS E OUTROS REPASSES</p>
          </a>
          <a href="#planejamento" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:-translate-y-2 sm:pr-2 md:pr-4 lg:pr-6">
            <BsBarChart className="text-6xl text-white" />
            <p className={`${roboto.variable} mt-1 text-xs text-white text-center`}>PLANEJAMENTO<br />E GESTÃO FISCAL</p>
          </a>
          <a href="#transparencia" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:-translate-y-2 sm:pr-2 md:pr-4 lg:pr-6">
            <BsEye className="text-6xl text-white" />
            <p className={`${roboto.variable} mt-1 text-xs text-white text-center`}>MAIS<br />TRANSPARÊNCIA</p>
          </a>
          <a href="#governanca" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:-translate-y-2 sm:pr-2 md:pr-4 lg:pr-6">
            <BsDatabase className="text-6xl text-white" />
            <p className={`${roboto.variable} mt-1 text-xs text-white text-center`}>GOVERNANÇA DE DADOS<br />E TRANSPARÊNCIA</p>
          </a>
          <a href="#pesquisa" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:-translate-y-2 sm:pr-2 md:pr-4 lg:pr-6">
            <BsSearch className="text-6xl text-white" />
            <p className={`${roboto.variable} mt-1 text-xs text-white text-center`}>PESQUISA DE<br />SATISFAÇÃO</p>
          </a>
          <a href="#sic" className="flex flex-col items-center m-2 border-r border-white pr-4 transition-transform transform hover:-translate-y-2 sm:pr-2 md:pr-4 lg:pr-6">
            <BsInfoCircle className="text-6xl text-white" />
            <p className={`${roboto.variable} mt-1 text-xs text-white text-center`}>SIC</p>
          </a>
          <a href="#radar" className="flex flex-col items-center m-2 transition-transform transform hover:-translate-y-2">
            <img src="/images/radar.svg" alt="Radar" className="w-35 h-14" />
            <p className={`${roboto.variable} mt-1 text-xs text-white text-center`}>Radar da Transparência Pública</p>
          </a>
        </section>
      </div>

      <BorderTop />
    </div>

  );
}
