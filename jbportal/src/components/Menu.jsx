import Image from "next/image";

const menu = () => {
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

          <div className="top-menu fixed top-0 w-full z-1000 bg-[#003470] p-1.5 flex justify-between">
            <div className="icones ml-10 flex gap-5">
              <i className="ri-twitter-x-line text-white text-[17px]"></i>
              <i className="ri-facebook-circle-fill text-white text-[17px]"></i>
              <i className="ri-instagram-line text-white text-[17px]"></i>
              <i className="ri-youtube-fill text-white text-[17px]"></i>
            </div>
            <ul className="menu-topo flex gap-3 mr-11 font-open-sans">
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
              <li>
                <a href="#" className="icone-amarelo">
                  <Image
                    src="/images/iconamarelo.png"
                    alt="foto amalera"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="menus">
            <div className="navbar fixed top-[38px] w-full z-999 bg-[#1E4B7C] flex justify-between items-center p-[13px] pl-[20px] pr-[10px]">
              <a href="#" className="logo pl-7">
                <Image
                  src="/images/logo.png"
                  alt="Logo do Menu"
                  width={749}
                  height={200}
                  className="w-[210px] h-auto"
                />
              </a>
              <ul className="nav-menu list-none flex pr-6 md:flex text-[#224276] font-open-sans text-[14px]">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#d4d4d47c] hover:before:z-[-1]"
                  >
                    INSTITUCIONAL
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#d4d4d47c] hover:before:z-[-1]"
                  >
                    A CIDADE
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#d4d4d47c] hover:before:z-[-1]"
                  >
                    SECRETARIAS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#d4d4d47c] hover:before:z-[-1]"
                  >
                    ÓRGÃOS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#d4d4d47c] hover:before:z-[-1]"
                  >
                    SERVIÇOS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#d4d4d47c] hover:before:z-[-1]"
                  >
                    ACESSIBILIDADE
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#d4d4d47c] hover:before:z-[-1]"
                  >
                    <i className="ri-search-line"></i>
                  </a>
                </li>
              </ul>
              <div className="hamburguer md:hidden flex flex-col gap-1.5">
                <span className="bar w-full h-0.5 bg-black"></span>
                <span className="bar w-full h-0.5 bg-black"></span>
                <span className="bar w-full h-0.5 bg-black"></span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default menu;