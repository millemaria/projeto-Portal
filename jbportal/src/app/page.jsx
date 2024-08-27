import Image from "next/image";
import Menu from "../components/Menu";
import Footer from "../components/Footer";


const images = [
  'images/slide2.png',
  'images/slide1.png',
];


export default function Home() {
  return (
    <div>
      <Menu />

      <main>
        <div className="text-center w-full h-screen overflow-hidden flex justify-center items-center">
          <div className="absolute inset-0 w-full h-full z-[-1] flex">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 opacity-100"
              style={{ backgroundImage: "url('slide2.png')" }}
            > 
            </div>
          </div>

          <div>
            <div className="flex flex-wrap font-roboto justify-center gap-2 grid grid-cols-4 ">
              <button
                className="bg-[#003476] text-white py-4 px-8 my-6 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none"
                id="cidadao"
              >
                CIDADÃO
              </button>

              <button
                className="bg-[#003476] text-white py-4 px-8 my-6 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none"
                id="empresa"
              >
                EMPRESA
              </button>

              <button
                className="bg-[#003476] text-white py-4 px-8 my-6 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none"
                id="servidor"
              >
                SERVIDOR
              </button>

              <button
                className="bg-[#003476] text-white py-4 px-8 my-6 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none"
                id="turista"
              >
                TURISTA
              </button>
            </div>



            <div className="flex flex-wrap font-roboto justify-center gap-4">
              <button
                className="bg-[#003476] text-white py-4 px-20 my-6 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none"
                id="portal"
              >
                PORTAL DA TRANSPARÊNCIA
              </button>

              <button
                className="bg-[#003476] text-white py-4 px-20 my-6 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none"
                id="carta"
              >
                CARTA DE SERVIÇOS
              </button>

              <button
                className="bg-[#003476] text-white py-4 px-20 my-6 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none"
                id="ppp"
              >
                PPP - SAÚDE
              </button>
            </div>
          </div>
        </div>

        <div className="mapas border-t border-[#FFC719] bg-[#003470]">
          <h1 className="text-white font-montserrat font-semibold text-4xl flex justify-center p-20">
            MAPAS
          </h1>
          <div className="relative overflow-hidden my-8">
            <svg className="absolute inset-0 w-full h-24" viewBox="0 0 1440 320" fill="#003470">
              <path d="M0,64L30,101.3C60,139,120,213,180,229.3C240,245,300,203,360,186.7C420,171,480,181,540,197.3C600,213,660,235,720,229.3C780,224,840,192,900,165.3C960,139,1020,117,1080,96C1140,75,1200,53,1260,80C1320,107,1380,181,1410,213.3L1440,256V0H1410C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
            </svg>
          </div>
        </div>

        <div className="mapas-cartaz mt-40 mb-40 flex items-center justify-center">
          <a href="https://example.com/mapescola" className="relative flex-1 transition-transform duration-500 hover:rotate-y-180">
            <div
              className=" h-[410px] bg-cover bg-center"
              style={{ backgroundImage: "url('images/mapescola.jpg')" }}
            ></div>
            <div className="absolute inset-0 h-[410px] flex items-center justify-center bg-[#003470] text-white text-xl font-bold opacity-0 transition-opacity duration-500 hover:opacity-100">
              MAPA ESCOLA
            </div>
          </a>

          <a href="https://example.com/mapsaude" className="relative flex-1 transition-transform duration-500 hover:rotate-y-180">
            <div
              className=" h-[410px] bg-cover bg-center"
              style={{ backgroundImage: "url('images/mapsaude.jpg')" }}
            ></div>
            <div className="absolute inset-0 h-[410px] flex items-center justify-center bg-[#003470] text-white text-xl font-bold opacity-0 transition-opacity duration-500 hover:opacity-100">
              MAPA SAÚDE
            </div>
          </a>

          <a href="https://example.com/maprestaurante" className="relative flex-1 transition-transform duration-500 hover:rotate-y-180">
            <div
              className=" h-[410px] bg-cover bg-center"
              style={{ backgroundImage: "url('images/maprestaurante.jpg')" }}
            ></div>
            <div className="absolute inset-0 h-[410px] flex items-center justify-center bg-[#003470] text-white text-xl font-bold opacity-0 transition-opacity duration-500 hover:opacity-100">
              MAPA RESTAURANTE
            </div>
          </a>

          <a href="https://example.com/mapmercado" className="relative flex-1 transition-transform duration-500 hover:rotate-y-180">
            <div
              className=" h-[410px] bg-cover bg-center"
              style={{ backgroundImage: "url('images/mapmercado.jpg')" }}
            ></div>
            <div className="absolute inset-0 h-[410px] flex items-center justify-center bg-[#003470] text-white text-xl font-bold opacity-0 transition-opacity duration-500 hover:opacity-100">
              MAPA MERCADO
            </div>
          </a>

          <a href="https://example.com/mapcras" className="relative flex-1 transition-transform duration-500 hover:rotate-y-180">
            <div
              className=" h-[410px] bg-cover bg-center"
              style={{ backgroundImage: "url('images/mapcras.jpg')" }}
            ></div>
            <div className="absolute inset-0 h-[410px] flex items-center justify-center bg-[#003470] text-white text-xl font-bold opacity-0 transition-opacity duration-500 hover:opacity-100">
              MAPA CRAS
            </div>
          </a>
        </div>
      </main>

      <Footer/>
    </div>
  );
}