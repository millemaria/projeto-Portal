'use client'; 

import { useState, useRef } from 'react';

export default function Auxilio() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const contentRef1 = useRef(null); 
  const contentRef2 = useRef(null);

  const toggleAccordion1 = () => setIsOpen1(!isOpen1);
  const toggleAccordion2 = () => setIsOpen2(!isOpen2);

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto mt-10 mb-10 sm:text-[18px] text-[#002A66]">
      Apresentamos abaixo a relação dos municípios em situação de vulnerabilidade e risco social beneficiados com o Auxilio Moradia, conforme previsto na Lei Municipal nº 343/2009, alterado pela Lei Municipal nº 1525 / 2022 e regulamentada pela Portaria SAS nº 007/2022.
      </div>

      <div className="w-full max-w-[400px] mx-auto mt-10 mb-10">
        {/* Accordion 1 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={toggleAccordion1}
          >
            <span className="font-bold">2024</span>
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
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/02/A.M-JANEIRO-2024.xlsx" className="hover:underline">JANEIRO/2024</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/03/A.M-FEVEREIRO-2024.xlsx" className="hover:underline">FEVEREIRO/2024</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/04/A.M-MARCO-2024.xlsx" className="hover:underline">MARÇO/2024</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/05/A.M-ABRIL-2024.xlsx" className="hover:underline">ABRIL/2024</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/07/A.M-MAIO-2024.xlsx" className="hover:hover:underline">MAIO/2024</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/07/A.M-JUNHO-2024.xlsx" className="hover:underline">JUNHO/2024</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accordion 2 */}
        <div className="border-b  border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={toggleAccordion2}
          >
            <span className="font-bold">2023</span>
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
              <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/07/A.M-JANEIRO-2023.xlsx" className="hover:underline">JANEIRO/2023</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/07/A.M-FEVEREIRO-2023.xlsx" className="hover:underline">FEVEREIRO/2023</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/07/A.M-MARCO-2023.xlsx" className="hover:underline">MARÇO</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/07/A.M.-ABRIL-2023.xlsx" className="hover:underline">ABRIL/2023</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/07/A.M-MAIO-2023.xlsx" className="hover:hover:underline">MAIO/2023</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/07/A.M-JUNHO-2023.xlsx" className="hover:underline">JUNHO/2023</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/08/A.M.-JULHO-2023-1.xlsx" className="hover:underline">JULHO/2023</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/09/A.M.-AGOSTO-2023.xlsx" className="hover:underline">AGOSTO/2023</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/11/A.M-SETEMBRO.xlsx" className="hover:underline">SETEMBRO/2023</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/11/A.M-OUTUBRO.xlsx" className="hover:underline">OUTUBRO/2023</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/12/A.M-NOVEMBRO-2023.xlsx" className="hover:underline">NOVEMBRO/2023</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/12/A.M-DEZEMBRO-2023.xlsx" className="hover:underline">DEZEMBRO/2023</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
