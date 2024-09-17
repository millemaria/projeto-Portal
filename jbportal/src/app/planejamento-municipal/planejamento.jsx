'use client';

import { useState, useRef } from 'react';

export default function Planejamento() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const contentRef1 = useRef(null); 
    const contentRef2 = useRef(null); 
  
    const toggleAccordion1 = () => {
      setIsOpen1(!isOpen1);
    };
  
    const toggleAccordion2 = () => {
      setIsOpen2(!isOpen2);
    };
  
    return (
      <div className="w-full max-w-7xl mx-auto mt-10 mb-10">
        {/* Accordion 1 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={toggleAccordion1}
          >
            <span className="font-bold">
              MAPA ESTRATÉGICO
            </span>
            <span className={`transform transition-transform duration-200 ${isOpen1 ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={contentRef1}
            style={{
              maxHeight: isOpen1 ? `${contentRef1.current.scrollHeight}px` : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
              <ul>
                <li><a href="/images/Mapa-Estrategico-Vertical.jpg">MAPA DA ESTRATÉGIA</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Accordion 2 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={toggleAccordion2}
          >
            <span className="font-bold">PLANEJAMENTO ESTRATÉGICO</span>
            <span className={`transform transition-transform duration-200 ${isOpen2 ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={contentRef2}
            style={{
              maxHeight: isOpen2 ? `${contentRef2.current.scrollHeight}px` : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
              <ul>
                <li><a href="../../pdf/Planejamento 2022-2025.pdf">Planejamento 2022-2025</a></li>
                <li><a href="../../pdf/Planejamento 2018-2021.pdf">Planejamento 2018-2021</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-14 ml-4 sm:ml-[30px]">
          {/* Links */}
          <ul className="space-y-4">
            <li>
              <p className="text-[#01223B] text-[16px] sm:text-[18px] ">
              O planejamento governamental do município constitui-se de três instrumentos orçamentários:
              </p>
            </li>
            <li>
              <p className="text-[#01223B] text-[16px] sm:text-[18px] ">
              PPA – PLANO PLURIANUAL
              </p>
            </li>
            <li>
              <p className="text-[#01223B] text-[16px] sm:text-[18px] ">
              LDO – LEI DE DIRETRIZES ORÇAMENTÁRIAS
              </p>
            </li>
            <li>
              <p className="text-[#01223B] text-[16px] sm:text-[18px] ">
              LOA – LEI ORÇAMENTÁRIA ANUAL
              </p>
            </li>
          </ul>
          <div className='mt-[23px] ml-4 sm:ml-[30px]'></div>
          <ul>
            <li>
              <p className="text-[#01223B] text-[16px] sm:text-[18px] ">
              O PPA, Plano Plurianual, é o instrumento de planejamento governamental que aponta as diretrizes, objetivos e metas da administração municipal para quatro anos da gestão, organizando as ações do governo em programas que resultem em bens e serviços à população. <br />
            A LDO, Lei de Diretrizes Orçamentárias, tem como finalidade orientar a elaboração do orçamento, permitindo a ligação entre o planejamento de longo prazo, o PPA, e o de curto prazo, feito através da LOA.<br/>
            A LOA, Lei Orçamentária Anual, é a ferramenta que indica quanto e onde serão investidos os recursos do município durante aquele ano, possibilitando maior transparência e eficiência da gestão pública na prestação de serviços à população.
            Para auxiliar na construção dos documentos de planejamento, é realizada a Consulta Popular #TamoJunto Jaboatão, onde são ouvidas as prioridades da população, turistas e empresas para o desenvolvimento do município.<br/>
            Após a consolidação de todos os documentos (PPA, LDO e LOA), é construído o Mapa da Estratégia, que traduz de forma ilustrativa e simplificada os objetivos e diretrizes da gestão para os próximos quatro anos.
              </p>
            </li>
          </ul>
        </div>
      
        {/* Iframe */}
        <div className="  justify-center mt-10">
          <iframe 
            src="https://transparencia.psalsis.com.br/PortalArquivosPlanejamento"
            width="100%"
            height="1000px"
            className="border-none"
            style={{ maxWidth: '100%', minHeight: '600px' }}
            title="Embedded Content"
          />
        </div>
    </div>
    );
}
