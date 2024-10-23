import { useState, useRef } from 'react';

export const metadata = {
    title: "EDUCAÇÃO - Portal Transparência",
};

export default function Educacao() {
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
      <div className="w-full max-w-7xl mx-auto mt-10 mb-10">
        {/* Accordion 1 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={toggleAccordion1}
          >
            <span className="font-bold">PLANOS MUNICIPAIS E RELÁTORIOS</span>
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
                <li><a href="/planos-municipais-de-educacao">Clique aqui para visualizar</a></li>
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
            <span className="font-bold">INFORMAÇÕES SOBRE CRECHE MUNICIPAL</span>
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
              <ul className="list-disc pl-5">
                <li><a href='https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fportaldatransparencia.jaboatao.pe.gov.br%2Fwp-content%2Fuploads%2F2024%2F09%2FCapacidade-e-matriculados-creches-05.09.xlsx&wdOrigin=BROWSELINK'>Capacidade/Matriculados</a></li>
                <li><a href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fportaldatransparencia.jaboatao.pe.gov.br%2Fwp-content%2Fuploads%2F2024%2F09%2FDemanda-reprimida-creches-05.09.xlsx&wdOrigin=BROWSELINK">Lista de espera</a></li>
              </ul>
              <p className="font-bold mt-2">
              O município adota o critério de ordem de chegada como priorização de acesso às creches.
              </p>
            </div>
          </div>
        </div>
        
        {/* Accordion 3 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={toggleAccordion3}
          >
            <span className="font-bold">CARTAS DE SERVIÇO DA EDUCAÇÃO</span>
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
                <li><a href="https://jaboatao.pe.gov.br/servicos-de-educacao/">Serviços de Educação</a></li>
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
            <span className="font-bold">TRANSPORTE ESCOLAR</span>
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
              <ul className="list-disc pl-5">
                <li><a href='example'>Acesse as informações de Transporte Escolar</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/02/LEI-No-1526.2022-TRANSPORTE-ESCOLAR.pdf'>Lei nº 1526/2022 de 12 de Agosto de 2022 – Regulamenta o Serviço de Transporte Escolar Público no município.</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Frase centralizada */}
        <div className="text-center my-10">
          <p className="text-lg text-[#213476]">Clique Aqui para acessar endereço detalhado das escolas do Município</p>
        </div>

        {/* iFrame */}
        <div className="flex justify-center mb-10">
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1yYoqtHL_NTm8nQkFePQAwrYlg4iX1f4&amp;ehbc=2E312F&amp;noprof=1"
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
