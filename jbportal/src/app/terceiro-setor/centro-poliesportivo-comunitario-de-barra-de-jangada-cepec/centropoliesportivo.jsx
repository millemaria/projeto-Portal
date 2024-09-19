'use client';

import { useState, useRef } from 'react';

export default function CentroPoliesportivo() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  const contentRef1 = useRef(null); 
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);
  const contentRef5 = useRef(null);
  const contentRef6 = useRef(null);
  const contentRef7 = useRef(null);

  const toggleAccordion1 = () => setIsOpen1(!isOpen1);
  const toggleAccordion2 = () => setIsOpen2(!isOpen2);
  const toggleAccordion3 = () => setIsOpen3(!isOpen3);
  const toggleAccordion4 = () => setIsOpen4(!isOpen4);
  const toggleAccordion5 = () => setIsOpen5(!isOpen5);
  const toggleAccordion6 = () => setIsOpen6(!isOpen6);
  const toggleAccordion7 = () => setIsOpen7(!isOpen7);

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto mt-10 mb-10 sm:text-[18px] text-[#002A66]">
        <strong>Dados da Organização</strong><br/>
        Rua Gilberto Carlos Zarzar, 740, Candeias, Jaboatão dos Guararapes, PE. <br/>
        CEP. 54.440-010<br/>
        Telefone: (81) 3478-8700<br/>
        Email: cepec_bj@hotmail.com
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
            <span className="font-bold">Centro Poliesportivo Comunitário de Barra de Jangada Nº 006/2022</span>
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

        {/* Accordion 5 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={toggleAccordion5}
          >
            <span className="font-bold">Centro Poliesportivo Comunitário de Barra de Jangada Nº 010/2022</span>
            <span className={`transform transition-transform duration-200 ${isOpen5 ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={contentRef5}
            style={{
              maxHeight: isOpen5 ? `${contentRef5.current.scrollHeight}px` : '0px',
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

        {/* Accordion 6 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={toggleAccordion6}
          >
            <span className="font-bold">Centro Poliesportivo Comunitário de Barra de Jangada Nº 014/2018</span>
            <span className={`transform transition-transform duration-200 ${isOpen6 ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={contentRef6}
            style={{
              maxHeight: isOpen6 ? `${contentRef6.current.scrollHeight}px` : '0px',
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

        {/* Accordion 7 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={toggleAccordion7}
          >
            <span className="font-bold">Centro Poliesportivo Comunitário de Barra de Jangada Nº 038/2018</span>
            <span className={`transform transition-transform duration-200 ${isOpen7 ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={contentRef7}
            style={{
              maxHeight: isOpen7 ? `${contentRef7.current.scrollHeight}px` : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
              <ul>
              <li><a href="../../pdf/Termo-de-Colaboracao-no-006_2022-SAS.pdf" className="underline"><strong>Edital de Chamamento Público</strong></a></li>
              <li><a href="../../pdf/CONSELHO_MUNICIPAL_DA_PESSOA_COM_DEFICIENCIA___CEPEC.pdf" className="underline"><strong>Equipe-função</strong></a></li>
              <li><a href="../../pdf/CONSELHO_MUNICIPAL_DA_PESSOA_COM_DEFICIENCIA___CEPEC.pdf" className="underline"><strong>Plano de Trabalho</strong></a></li>
              <li><a href="../../pdf/CONSELHO_MUNICIPAL_DA_PESSOA_COM_DEFICIENCIA___CEPEC.pdf" className="underline"><strong>Solicitação de pagamento -Prestação de Contas</strong></a></li>
              <li><a href="../../pdf/CONSELHO_MUNICIPAL_DA_PESSOA_COM_DEFICIENCIA___CEPEC.pdf" className="underline"><strong>Relátorio de Atividades</strong></a></li>
              <li><a href="../../pdf/CONSELHO_MUNICIPAL_DA_PESSOA_COM_DEFICIENCIA___CEPEC.pdf" className="underline"><strong>Termo de Colaboração</strong></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
