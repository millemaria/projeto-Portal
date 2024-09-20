'use client';

import { useState, useRef } from 'react';

export default function CentroPoliesportivo() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const contentRef1 = useRef(null); 
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);

  const toggleAccordion1 = () => setIsOpen1(!isOpen1);
  const toggleAccordion2 = () => setIsOpen2(!isOpen2);
  const toggleAccordion3 = () => setIsOpen3(!isOpen3);
  const toggleAccordion4 = () => setIsOpen4(!isOpen4);

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto mt-10 mb-10 sm:text-[18px] text-[#002A66]">
        <strong>Dados da Organização</strong><br/>
        Rua Ilhéus, 13, Jardim Piedade, Jaboatão dos Guararapes, PE.  <br/>
        CEP. CEP: 54.420-150<br/>
        Telefone: (81) 99401.5938<br/>
        Email: contato@ongimpactope.org
      </div>

      <div className="w-full max-w-7xl mx-auto mt-10 mb-10">
        {/* Accordion 1 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={toggleAccordion1}
          >
            <span className="font-bold">Títulos de Qualificação </span>
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
            <div className="space-y-9 p-4 text-[#213476]">
              <ul>
                <li><a href="../../pdf/CONSELHO_MUNICIPAL_DA_PESSOA_COM_DEFICIENCIA___CEPEC.pdf" className="underline"><strong>Declaração CDJG</strong></a></li>
                <li><a href="../../pdf/CONSELHO_MUNICIPAL_DA_PESSOA_IDOSA___CEPEC-1.pdf" className="underline"><strong>Declaração COMDDIJ</strong></a></li>
                <li><a href="../../pdf/CONSELHO_MUNICIPAL_DE_ASSISTENCIA___CEPEC-1.pdf" className="underline"><strong>Declaração CMAS</strong></a></li>
                <li><a href="../../pdf/CONSELHO_MUNICIPAL_DE_DEFESA_DOS_DIRETOS_DA_CRIANCA_E_DO_ADOLESCENTE___CEPEC-1.pdf" className="underline"><strong>Declaração CMDDCA</strong></a></li>
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
            <span className="font-bold">Instituto Metropolitano de Profissionalização, Arte, Cultura e Oportunidades - IMPACTO - N° 011/2022</span>
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
                <li><a href="../../pdf/Termo-de-Colaboracao-no-006_2022-SAS.pdf" className="underline"><strong>Termo de Colaboração</strong></a></li>
                <li><strong>Prestação de Contas (2023)</strong></li>
                <li><a href="../../pdf/CONSELHO_MUNICIPAL_DA_PESSOA_COM_DEFICIENCIA___CEPEC.pdf" className="underline"><strong>Relatório de Atividades</strong></a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accordion 3 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={toggleAccordion3}
          >
            <span className="font-bold">Centro Poliesportivo Comunitário de Barra de Jangada Nº 008/2022</span>
            <span className={`transform transition-transform duration-200 ${isOpen3 ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={contentRef3}
            style={{
              maxHeight: isOpen3 ? `${contentRef3.current.scrollHeight}px` : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
              <ul>
                <li><a href="../../pdf/Termo-de-Colaboracao-no-006_2022-SAS.pdf" className="underline"><strong>Termo de Colaboração</strong></a></li>
                <li><a href="../../pdf/CONSELHO_MUNICIPAL_DA_PESSOA_COM_DEFICIENCIA___CEPEC.pdf" className="underline"><strong>Prestação de Contas</strong></a></li>
                <li><a href="../../pdf/CONSELHO_MUNICIPAL_DA_PESSOA_COM_DEFICIENCIA___CEPEC.pdf" className="underline"><strong>Relatório de Atividades</strong></a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accordion 4 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={toggleAccordion4}
          >
            <span className="font-bold">Centro Poliesportivo Comunitário de Barra de Jangada Nº 009/2022</span>
            <span className={`transform transition-transform duration-200 ${isOpen4 ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={contentRef4}
            style={{
              maxHeight: isOpen4 ? `${contentRef4.current.scrollHeight}px` : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
              <ul>
                <li><a href="../../pdf/Termo-de-Colaboracao-no-006_2022-SAS.pdf" className="underline"><strong>Termo de Colaboração</strong></a></li>
                <li><a href="../../pdf/CONSELHO_MUNICIPAL_DA_PESSOA_COM_DEFICIENCIA___CEPEC.pdf" className="underline"><strong>Prestação de Contas</strong></a></li>
                <li><a href="../../pdf/CONSELHO_MUNICIPAL_DA_PESSOA_COM_DEFICIENCIA___CEPEC.pdf" className="underline"><strong>Relatório de Atividades</strong></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
