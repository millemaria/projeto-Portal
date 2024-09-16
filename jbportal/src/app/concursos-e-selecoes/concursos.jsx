'use client';

import { useState, useRef } from 'react';

export default function Concursos() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const contentRef1 = useRef(null); // Referência para o conteúdo do primeiro acordeon
  const contentRef2 = useRef(null); // Referência para o conteúdo do segundo acordeon

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
            QUANTITATIVOS/VAGAS PREENCHIDAS - CONCURSOS E SELEÇÕES SIMPLIFICADAS
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
              <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/08/QUANTITATIVOS-VAGAS-CONCURSOS-4.xlsx">Quantitativos/vagas - Concursos </a></li>
              <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/08/QUANTITATIVOS-VAGAS-SELECOES-SIMPLIFICADAS-4.xlsx">Quantitativos/vagas - Seleções Simplificadas</a></li>
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
          <span className="font-bold">VALIDADE DOS CONCURSOS/SELEÇÕES</span>
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
              <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/08/VALIDADE-SELECAO-E-CONCURSOS-1.xlsx">Validade - Concursos e Seleções Simplificadas</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* iframe fora dos acordeões */}
      <div className="p-4 mt-6">
        <iframe
          src="https://planstransparencia.jaboatao.pe.gov.br/tbl_selecoes_concursos/"
          width="100%"
          height="800px"
          className="border-none"
          style={{ maxWidth: '100%', minHeight: '500px' }}
          title="Embedded Content"
        />
      </div>
    </div>
  );
}
