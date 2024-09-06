"use client";
import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

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
              <i className="ri-twitter-x-line text-white text-[17px]"></i>
              <i className="ri-facebook-circle-fill text-white text-[17px]"></i>
              <i className="ri-instagram-line text-white text-[17px]"></i>
              <i className="ri-youtube-fill text-white text-[17px]"></i>
            </div>
            <ul className="menu-topo hidden lg:flex gap-3 mr-11 font-open-sans">
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Acessibilidade
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Site Oficial
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Diário Oficial
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Ouvidoria
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Portal do Contribuinte
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Glossário 
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Teclas de Atalho
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  Radar da Transparência
                </a>
              </li>
              <li>
                <a href="#" className="icone-amarelo">
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
                  className="w-[255px] h-[65px]"
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
                    className="nav-link hover:underline text-[#fbfcfd] hover:decoration-[#13AFF0] hover:text-[#ffff] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#224276] hover:before:z-[-1]"
                  >
                    ESTRUTURA ORGANIZACIONAL
                  </a>
                  {dropdowns.institucional && (
                    <ul className="absolute left-0 w-48 bg-[#2170B5] text-[#ffffff] shadow-lg">
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          MAPA DA ESTRATÉGIA
                        </a>
                      </li>
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          ESTRUTURA ORGANIZACIONAL
                        </a>
                      </li>
                    </ul>
                  )}
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
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          CARTA DE SERVIÇOS
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          ATENDIMENTO AO PÚBLICO
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          CONSELHO DE USUÁRIOS
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          PERGUNTAS FREQUENTES
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          TAMOJUNTO CONSULTA POPULAR
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
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
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          APRESENTAÇÃO - LAI / ENDEREÇO
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          RELATÓRIO ESTATÍSTICO
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          ROL DE DOCUMENTOS - GRAU DE SIGILO
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          ROL DE INFORMAÇÕES DESCLASSIFICADAS
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          PERGUNTAS FREQUENTES - LAI
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          AUTORIDADE DE <br /> MONITORAMENTO: <br /> LORENA VENTURA (81) 99422-5177<br />E-MAIL:
                          OUVIDORIA@JABOATAO.<br /> PE.GOV.BR
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
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          REGULAMENTAÇÃO DE POLÍTICA DE PRIVACIDADE DE DADOS
                        </a>
                      </li>
                      <li className="hover:bg-[#F6F5F5] hover:text-[#2170B5] transition duration-200">
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
                        <a href="#" className="block px-4 py-4">
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
              <div className="icones flex gap-5 mb-10">
                <i className="ri-twitter-x-line text-white text-[24px]"></i>
                <i className="ri-facebook-circle-fill text-white text-[24px]"></i>
                <i className="ri-instagram-line text-white text-[24px]"></i>
                <i className="ri-youtube-fill text-white text-[24px]"></i>
              </div>
              <ul className="text-center text-[24px] font-bold">
                <li className="mb-6">
                  <a
                    href="#"
                    onClick={() => toggleDropdown("institucional")}
                    className="flex items-center justify-center"
                  >
                    INSTITUCIONAL
                    <FaPlus className="ml-2 text-[14px] text-white" />
                  </a>
                  {dropdowns.institucional && (
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
                  )}
                </li>
                <li className="mb-6">
                  <a
                    href="#"
                    onClick={() => toggleDropdown("cidade")}
                    className="flex items-center justify-center"
                  >
                    A CIDADE
                    <FaPlus className="ml-2 text-[14px] text-white" />
                  </a>
                  {dropdowns.cidade && (
                    <ul className="mt-2 mb-6 text-[16px] leading-3">
                      <li className="mb-3">
                        <a href="#" onClick={toggleMenu}>
                          - Submenu 1
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" onClick={toggleMenu}>
                          - Submenu 2
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" onClick={toggleMenu}>
                          - Submenu 3
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="mb-6">
                  <a
                    href="#"
                    onClick={() => toggleDropdown("secretarias")}
                    className="flex items-center justify-center"
                  >
                    SECRETARIAS
                    <FaPlus className="ml-2 text-[14px] text-white" />
                  </a>
                  {dropdowns.secretarias && (
                    <ul className="mt-2 mb-6 text-[16px] leading-3">
                      <li className="mb-3">
                        <a href="#" onClick={toggleMenu}>
                          - Submenu 1
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" onClick={toggleMenu}>
                          - Submenu 2
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" onClick={toggleMenu}>
                          - Submenu 3
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="mb-6">
                  <a
                    href="#"
                    onClick={() => toggleDropdown("orgaos")}
                    className="flex items-center justify-center"
                  >
                    ÓRGÃOS
                    <FaPlus className="ml-2 text-[14px] text-white" />
                  </a>
                  {dropdowns.orgaos && (
                    <ul className="mt-2 mb-6 text-[16px] leading-3">
                      <li className="mb-3">
                        <a href="#" onClick={toggleMenu}>
                          - Submenu 1
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" onClick={toggleMenu}>
                          - Submenu 2
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" onClick={toggleMenu}>
                          - Submenu 3
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="mb-6">
                  <a
                    href="#"
                    onClick={() => toggleDropdown("servicos")}
                    className="flex items-center justify-center"
                  >
                    SERVIÇOS
                    <FaPlus className="ml-2 text-[14px] text-white" />
                  </a>
                  {dropdowns.servicos && (
                    <ul className="mt-2 mb-6 text-[16px] leading-3">
                      <li className="mb-3">
                        <a href="#" onClick={toggleMenu}>
                          - Submenu 1
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" onClick={toggleMenu}>
                          - Submenu 2
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" onClick={toggleMenu}>
                          - Submenu 3
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="mb-6">
                  <a href="#" onClick={toggleMenu}>
                    ACESSIBILIDADE
                  </a>
                </li>
              </ul>
              <button onClick={toggleMenu} className="mt-10 text-[24px]">
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