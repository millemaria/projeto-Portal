"use client";
import localFont from 'next/font/local';
import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const openSans = localFont({
  src: '../utils/open-sans/OpenSans-Regular.ttf',
  variable: '--font-open-sans',
});

const Menu = () => {
  const [dropdowns, setDropdowns] = useState({
    institucional: false,
    cidade: false,
    secretarias: false,
    orgaos: false,
    servicos: false,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setDropdowns((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <header>
        <nav>
          <div>
            <link
              href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
              rel="stylesheet"
            />
          </div>
          {/* Top Menu */}
          <div className="top-menu fixed top-0 w-full z-50 bg-[#003470] p-1.5 flex justify-center lg:justify-between">
         <div className="icones flex ml-10 gap-5">
          <a href="https://twitter.com/jaboataoonline" target="_blank" rel="noopener noreferrer">
           <i className="ri-twitter-x-line text-white text-[17px]"></i>
           </a>
           <a href="https://www.facebook.com/PrefeituradoJaboatao" target="_blank" rel="noopener noreferrer">
          <i className="ri-facebook-circle-fill text-white text-[17px]"></i>
           </a>
          <a href="https://www.instagram.com/prefjaboatao/" target="_blank" rel="noopener noreferrer">
          <i className="ri-instagram-line text-white text-[17px]"></i>
          </a>
          <a href="https://www.youtube.com/user/prefeiturajaboatao/videos" target="_blank" rel="noopener noreferrer">
          <i className="ri-youtube-fill text-white text-[17px]"></i>
          </a>
          </div>
            <ul className="menu-topo hidden lg:flex gap-3 mr-11 font-open-sans">
              <li className="nav-topo">
                <a
                  href="#"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Acessibilidade
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Site Oficial
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Diário Oficial
                </a>
              </li>
              <li className="nav-topo">
                <a
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                  href="https://ouvidoria.jaboatao.pe.gov.br/"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Ouvidoria
                </a>
              </li>
              <li className="nav-topo">
                <a
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                  href="https://www.tinus.com.br/csp/JABOATAO/portal/index.csp"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Portal do Contribuinte
                </a>
              </li>
              <li className="nav-topo">
                <a
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Glossário 
                </a>
              </li>
              <li className="nav-topo">
                <a
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Teclas de Atalho
                </a>
              </li>
              <li className="nav-topo">
                <a
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                  href="https://radardatransparencia.atricon.org.br/radar-da-transparencia-publica.html"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Radar da Transparência
                </a>
              </li>
              <li>
                <a href="https://eouve.com.br/#/ouvidoria" className="icone-amarelo">
                  <Image
                    src="/images/iconamarelo.png"
                    alt="foto amarela"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Navbar */}
          <div className="menus">
          <div className="navbar fixed top-[38px] w-full z-40 bg-[#152e5a94] flex justify-between items-center p-[13px] pl-[20px] pr-[10px] border-t border-white">
              <a
                onClick={() => (window.location.href = "/")}
                href="#"
                className="logo pl-7"
              >
                <Image
                  src="/images/logo.png"
                  alt="Logo do Menu"
                  width={749}
                  height={190}
                  className="w-[260px] h-[54px]"
                />
              </a>

              <div className="lg:hidden pr-6">
                <button onClick={toggleMenu} className="text-[#fbfcfd]">
                  <i className="ri-menu-3-line text-[24px]"></i>
                </button>
              </div>

              <ul className="nav-menu hidden lg:flex pr-6 text-[#224276] font-open-sans text-[14px]">
                <li
                  className="nav-item relative"
                  onMouseEnter={() => toggleDropdown("institucional")}
                  onMouseLeave={() => toggleDropdown("institucional")}
                >
                  <a
                    href="#"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                    className="nav-link hover:underline text-[#fbfcfd] hover:decoration-[#13AFF0] hover:text-[#ffff] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#224276] hover:before:z-[-1]"
                  >
                    ESTRUTURA ORGANIZACIONAL
                  </a>
                  {/* {dropdowns.institucional && (
                    <ul className="absolute left-0 w-48 bg-[#2170B5] text-[#ffffff] shadow-lg">
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" style={{ fontFamily: 'Open Sans, sans-serif' }} className="block px-4 py-4">
                          MAPA DA ESTRATÉGIA
                        </a>
                      </li>
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          ESTRUTURA ORGANIZACIONAL
                        </a>
                      </li>
                    </ul>
                  )} */}
                </li>
                <li
                  className="nav-item relative"
                  onMouseEnter={() => toggleDropdown("servicos")}
                  onMouseLeave={() => toggleDropdown("servicos")}
                >
                  <a
                    href="#"
                    className="nav-link hover:underline text-[#fbfcfd] hover:decoration-[#13AFF0] hover:text-[#ffff] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#224276] hover:before:z-[-1]"
                  >
                    SERVIÇOS ✶
                  </a>
                  {dropdowns.servicos && (
                    <ul className="absolute left-0 w-48 bg-[#2170B5] text-[#ffffff] shadow-lg">
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          AVALIAÇÃO DE SERVIÇOS/PESQUISA DE SATISFAÇÃO
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5]  border-t border-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          CARTA DE SERVIÇOS
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5]  border-t border-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          ATENDIMENTO AO PÚBLICO
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5]  border-t border-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          CONSELHO DE USUÁRIOS
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5]    border-t border-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          PERGUNTAS FREQUENTES
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5]  border-t border-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          TAMOJUNTO CONSULTA POPULAR
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5]  border-t border-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          SERVIÇOS ONLINE PARA O CIDADÃO
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className="nav-item relative"
                  onMouseEnter={() => toggleDropdown("secretarias")}
                  onMouseLeave={() => toggleDropdown("secretarias")}
                >
                  <a
                    href="#"
                    className="nav-link hover:underline text-[#fbfcfd] hover:decoration-[#13AFF0] hover:text-[#ffff] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#224276] hover:before:z-[-1]"
                  >
                    A LAI ✶
                  </a>
                  {dropdowns.secretarias && (
                    <ul className="absolute left-0 w-48 bg-[#2170B5] text-[#ffffff] shadow-lg">
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5]  border-t border-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          APRESENTAÇÃO - LAI / ENDEREÇO
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5]  border-t border-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          RELATÓRIO ESTATÍSTICO
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5]  border-t border-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          ROL DE DOCUMENTOS - GRAU DE SIGILO
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5]  border-t border-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          ROL DE INFORMAÇÕES DESCLASSIFICADAS
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5]  border-t border-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          PERGUNTAS FREQUENTES - LAI
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] border-t border-white transition duration-200">
                       <a 
                       href="./pdf/AUTORIDADES-DA-LAI-Atualizado.xlsx" 
                       download 
                       className="block px-4 py-4"
                       >
                       AUTORIDADE DE <br /> MONITORAMENTO: <br /> LORENA VENTURA (81) 99422-5177<br />E-MAIL:
                      OUVIDORIA@JABOATAO.<br /> PE.GOV.BR
                      </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5]  border-t border-white transition duration-200">
                        <a href="https://eouve.com.br/#/sic" className="block px-4 py-4">
                          PEDIDO DE ACESSO À<br/> INFORMAÇÃO
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5]  border-t border-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          REGULAMENTAÇÃO MUNICIPAL
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className="nav-item relative"
                  onMouseEnter={() => toggleDropdown("orgaos")}
                  onMouseLeave={() => toggleDropdown("orgaos")}
                >
                  <a
                    href="#"
                    className="nav-link hover:underline text-[#fbfcfd] hover:decoration-[#13AFF0] hover:text-[#ffff] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#224276] hover:before:z-[-1]"
                  >
                    LGPD ✶
                  </a>
                  {dropdowns.orgaos && (
                     <ul className="absolute left-0 w-48 bg-[#2170B5] text-[#ffffff] shadow-lg">
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          ENCARREGADO: <br /> CAROLINA DE FREITAS PEREIRA <br /> (81) 31349293 <br /> E-MAIL:<br /> CAROLINA.PEREIRA@JAB<br />OATAO.PE.GOV.BR
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5]  border-t border-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          REGULAMENTAÇÃO DE POLÍTICA DE PRIVACIDADE DE DADOS
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5]  border-t border-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                         CONTATO: <br /> (81) 99455-5177 <br /> ATENDIMENTO DE 8H ÀS 14H
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className="nav-item relative"
                  onMouseEnter={() => toggleDropdown("lei")}
                  onMouseLeave={() => toggleDropdown("lei")}
                >
                  <a
                    href="#"
                    className="nav-link hover:underline text-[#fbfcfd] hover:decoration-[#13AFF0] hover:text-[#ffff] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#224276] hover:before:z-[-1]"
                  >
                    LEI 14.129/2021 ✶
                  </a>
                  {dropdowns.lei && (
                     <ul className="absolute left-0 w-48 bg-[#2170B5] text-[#ffffff] shadow-lg">
                     <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                       <a 
                         href="./pdf/LEI-No-14129-31-DE-MAIO-DE-2023-–-XXXII-–-No-102-–-JABOATAO-DOS-GUARARAPES-Diario-Oficial.pdf" 
                         download 
                         className="block px-4 py-4"
                       >
                         REGULAMENTAÇÃO DO <br /> GOVERNO DIGITAL
                       </a>
                     </li>
                   </ul>
                   
                  )}
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link hover:underline text-[#fbfcfd] hover:decoration-[#13AFF0] hover:text-[#ffff] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#224276] hover:before:z-[-1]"
                  >
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link hover:underline text-[#fbfcfd] hover:decoration-[#13AFF0] hover:text-[#ffff] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#224276] hover:before:z-[-1]"
                  >
                    FALE CONOSCO
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link hover:underline text-[#fbfcfd] hover:decoration-[#13AFF0] hover:text-[#ffff] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#224276] hover:before:z-[-1]"
                  >
                    <i className="ri-search-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Fullscreen Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-[#003470dc] text-white flex flex-col items-center justify-center p-8">

              <ul className="text-center mt-10 text-[16px] font-normal">
                <li className="mb-4">
                  <a
                    href="#"
                    onClick={() => toggleDropdown("institucional")}
                    className="flex items-center justify-center"
                  >
                    ESTRUTURA ORGANIZACIONAL
                    
                  </a>
                  {/* {dropdowns.institucional && (
                    <ul className="mt-2 mb-6 text-[16px] leading-3">
                      <li className="mb-3">
                        <a href="#" onClick={toggleMenu}>
                          - MAPA DA ESTRATÉGIA
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" onClick={toggleMenu}>
                          - ESTRUTURA ORGANIZACIONAL
                        </a>
                      </li>
                    </ul>
                  )} */}
                </li>
                <li className="mb-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Evita o comportamento padrão do link
                    toggleDropdown("servicos");
                  }}
                  className="flex items-center justify-center hover:text-gray-400 transition-colors duration-300"
                >
                  SERVIÇOS
                  <FaPlus className="ml-2 text-[14px] text-white" />
                </a>
                <ul
                  className={`mt-2 mb-6 text-[13px] leading-3 overflow-hidden transition-all duration-300 ${dropdowns.servicos ? 'max-h-[500px] ease-in' : 'max-h-0 ease-out'}`}
                >
                  <li className="mb-3">
                    <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                      AVALIAÇÃO DE SERVIÇOS/PESQUISA DE SATISFAÇÃO
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                      CARTA DE SERVIÇOS
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                      ATENDIMENTO AO PÚBLICO
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                      CONSELHO DE USUÁRIOS
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                      PERGUNTAS FREQUENTES
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                      TAMOJUNTO CONSULTA POPULAR
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                      SERVIÇOS ONLINE PARQA O CIDADÃO
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-6">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Evita o comportamento padrão do link
                      toggleDropdown("alai");
                    }}
                    className="flex items-center hover:text-gray-400 transition-colors duration-300 justify-center"
                  >
                    A LAI
                    <FaPlus className="ml-2 text-[14px] hover:text-gray-400 transition-colors duration-300 text-white" />
                  </a>
                  <ul
                    className={`mt-1 mb-6 text-[13px] leading-3 overflow-hidden transition-all duration-300 ${dropdowns.alai ? 'max-h-[500px] ease-in' : 'max-h-0 ease-out'}`}
                  >
                    <li className="mb-3">
                      <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                        APRESENTAÇÃO - LAI / ENDEREÇO
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                        RELATÓRIO ESTATÍSTICO
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                        ROL DE DOCUMENTOS - GRAU DE SIGILO
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                        ROL DE INFORMAÇÕES DESCLASSIFICADAS
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                        PERGUNTAS FREQUENTES - LAI
                      </a>
                    </li>
                    <li className="mb-3 hover:text-gray-400 transition-colors duration-300">
                      <a href="#" onClick={toggleMenu} className="block">
                        AUTORIDADE DE MONITORAMENTO: <br />
                        <span className="mt-3 inline-block">
                          LORENA VENTURA (81) 99422-5177 <br />
                        </span>
                        <span className="mt-3 inline-block">
                          E-MAIL: OUVIDORIA@JABOATAO.PE.GOV.BR
                        </span>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                        PEDIDO DE ACESSO À INFORMAÇÃO
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                        REGULAMENTAÇÃO MUNICIPAL
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mb-6">
                <a
                  href="#"
                  onClick={() => toggleDropdown("lgpd")}
                  className="flex items-center hover:text-gray-400 transition-colors duration-300 justify-center"
                >
                  LGPD
                  <FaPlus className="ml-2 text-[14px] hover:text-gray-400 transition-colors duration-300 text-white" />
                </a>
                <ul
                  className={`mt-1 mb-6 text-[13px] leading-3 overflow-hidden transition-all duration-300 ${dropdowns.lgpd ? 'max-h-[500px] ease-in' : 'max-h-0 ease-out'}`}
                >
                  <li className="mb-3 hover:text-gray-400 transition-colors duration-300">
                    <a href="#" onClick={toggleMenu} className='block'>
                      ENCARREGADO: <br />
                      <span className="mt-3 inline-block">CAROLINA DE FREITAS PEREIRA</span> <br />
                      <span className="mt-3 inline-block">FONE: (81) 3134-9293</span><br />
                      <span className='mt-3 inline-block'>E-MAIL: CAROLINA.PEREIRA@JABOATAO.PE.GOV.BR</span>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                      REGULAMENTAÇÃO DE POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS
                    </a>
                  </li>
                  <li className="mb-3 hover:text-gray-400 transition-colors duration-300">
                    <a href="#" onClick={toggleMenu}>
                      <span className="mt-3 inline-block">CONTATO: </span><br />
                      <span className="mt-3 inline-block">(81) 99422-5177 </span><br />
                      <span className="mt-3 inline-block">ATENDIMENTO DE 8H ÀS 14H</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-6">
              <a
                href=""
                onClick={() => toggleDropdown("lei")}
                className="flex items-center hover:text-gray-400 transition-colors duration-300 justify-center"
              >
                LEI 14.129/2021
                <FaPlus className="ml-2 text-[14px] hover:text-gray-400 transition-colors duration-300 text-white" />
              </a>
              <ul
                className={`mt-2 mb-6 text-[13px] leading-3 overflow-hidden transition-all duration-300 ${dropdowns.lei ? 'max-h-[500px] ease-in' : 'max-h-0 ease-out'}`}
              >
                <li className="mb-3">
                  <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                    REGULAMENTAÇÃO DO GOVERNO DIGITAL
                  </a>
                </li>
              </ul>
            </li>

                <li className="mb-6">
                  <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                    FAQ 
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                    FALE CONOSCO 
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                  ACESSIBILIDADE 
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                    SITE OFICIAL 
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                  DIÁRIO OFICIAL
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                    OUVIDORIA
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                    PORTAL DO CONTRIBUINTE 
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#"  className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                    GLOSSÁRIO 
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                    TECLAS DE ATALHO 
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className='hover:text-gray-400 transition-colors duration-300' onClick={toggleMenu}>
                    RADAR DA TRANSPARÊNCIA 
                  </a>
                </li>
                <li>
                <a href="https://eouve.com.br/#/ouvidoria" className="icone-amarelo flex justify-center items-center">
               <Image
               src="/images/iconamarelo.png"
               alt="foto amarela"
               width={20}
               height={20}
               />
              </a>
              <div className="flex flex-col items-center">
              <input
                type="text"
                placeholder="DIGITE SUA PESQUISA.."
                className="mt-4 px-4 py-2 border-b-2 border-[#F6F5F5] bg-transparent text-white text-center focus:outline-none"
              />
              </div>
              </li>
              </ul>
              <button onClick={toggleMenu} className="mt-3 text-[24px]">
                <i className="ri-close-line"></i>
              </button>
            </div>
            
          )}
        </nav>
      </header>
    </div>
  );
};

export default Menu;