import { useState, useRef } from 'react';


export default function TransporteEscolar() {
    const [isOpen, setIsOpen] = useState(Array(8).fill(false));
    
    const contentRefs = Array(8).fill(null).map(() => useRef(null));

    const toggleAccordion = (index) => {
        setIsOpen(prev => {
            const newIsOpen = [...prev];
            newIsOpen[index] = !newIsOpen[index];
            return newIsOpen;
        });
    };

    return (
      <div className="w-full max-w-7xl mx-auto mt-10 mb-10">
        {/* Accordion 1 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={() => toggleAccordion(0)}
          >
            <span className="font-bold">I – Processo licitatório</span>
            <span className={`transform transition-transform duration-200 ${isOpen[0] ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={contentRefs[0]}
            style={{
              maxHeight: isOpen[0] ? `${contentRefs[0].current.scrollHeight}px` : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
              <ul className="list-disc pl-5">
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/04/PROCESSO-LICITATORIO-No-004.2019.pdf">PROCESSO LICITATÓRIO Nº 004.2019</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/10/F-PROPOSTA-DE-PRECO-LOCA-BEM.pdf">PROPOSTA DE PREÇO</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/10/G-TERMO-DE-HOMOLOGACAO-E-ADJUDICACAO-LOCA-BEM.pdf">TERMO DE HOMOLOGAÇÃO E ADJUDICAÇÃO</a></li>
                <li><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/10/A-PE-002.2019-EDITAL-Transporte-Escolar.pdf">EDITAL PE 002.2019</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accordion 2 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={() => toggleAccordion(1)}
          >
            <span className="font-bold">II – Contratos e termos aditivos</span>
            <span className={`transform transition-transform duration-200 ${isOpen[1] ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={contentRefs[1]}
            style={{
              maxHeight: isOpen[1] ? `${contentRefs[1].current.scrollHeight}px` : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
              <ul className="list-disc pl-5">
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/07/CONTRATO-No-063-2022-SME-ASSINADO-CSL.pdfK'>Contrato Nº 063/2022</a></li>
              </ul>
              <p className="font-bold mt-[13px]">
              Locabem
              </p>
              <ul className="list-disc pl-5 mt-4">
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/07/CONTRATO_No_056_2019_-_SME_EMPRESA_LOCA_BEM_202012171026151381.pdf'>Contrato Nº 056/2019</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/07/1o_TERMO_ADITIVO_AO_CONTRATO_No_056_2019_-_LOCA_BEM_202012171026304480863.pdf'>1º Termo Aditivo ao Contrato – Nº 56/2019</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/07/2%EF%BE%B0_termo_aditivo_ao_Contrato_no_056_2019_SME_Loca_bem_20200506.pdf'>2º Termos Aditivo ao Contrato – Nº 56/2019ﾠ</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/07/3o_TERMO_ADITIVO_AO_CONTRATO_No_056_2019_-_SME_LOCA_BEM__20200.pdf'>3º Termos Aditivo ao Contrato – Nº 56/2019ﾠ</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/07/4o-TERMO-ADITIVO-AO-CONTRATO-No-056_2019-SME..pdf'>4º Termos Aditivo ao Contrato – Nº 56/2019ﾠ</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/07/5o-TERMO-ADITIVO-AO-CONTRATO-No-056_2019-SME-LOCA-BEM-ARRENDA.pdf'>5º Termos Aditivo ao Contrato – Nº 56/2019ﾠ</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/07/6o-TERMO-ADITIVO-AO-CONTRATO-No-056_2019-SME-LOCA-BEM-ARRE.pdf'>6º Termos Aditivo ao Contrato – Nº 56/2019ﾠ</a></li>
              </ul>
              <p className="font-bold mt-[13px]">
              Prime Combustíveis
              </p>
              <ul className="list-disc pl-5 mt-4">
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/08/Contrato-No-073_2022.pdf'>Contrato Nº 73/2022</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/08/1o-TA-ASS-PRIMEassinado-1-1.pdf'>1º Termo Aditivo ao Contrato Nº 073/2022</a></li>
              </ul>
              <p className="font-bold mt-[13px]">
                Prime Manutenção
                </p>
              <ul className="list-disc pl-5 mt-4">
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/08/Contrato-No093_2022.pdf'>Contrato Nº 93/2022</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/08/1o-TA-ASS-PRIME-1-1.pdf'>1º Termo Aditivo ao Contrato – Nº 093/2022</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/08/2o-TA-ASS-PRIME-3-1.pdf'>2º Termo Aditivo ao Contrato – Nº 093/2022</a></li>
              </ul>
              <p className="font-bold mt-[13px]">
              TOPPUS (Top Service)             
                </p>
                <ul className="list-disc pl-5 mt-4">
                  <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/08/CONTRATO-No-081-2023-SME-ASSINADO-1.pdf'>Contrato N° 81/2023</a></li>
                  <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/04/CONTRATO-N%C2%B0-30.2017.pdf'>Contrato Nº 30/2017</a></li>
                  <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/04/1%C2%B0-TERMO-ADITIVO-DO-CONTRATO-N%C2%B0-30.2017.pdf'>1º Termo Aditivo ao Contrato – Nº 30/2017</a></li>
                  <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/04/2%C2%B0-TERMO-ADITIVO-DO-CONTRATO-N%C2%B0-30.2017.pdf'>2º Termo Aditivo ao Contrato – Nº 30/2017</a></li>
                  <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/04/3%C2%B0-TERMO-ADITIVO-DO-CONTRATO-N%C2%B0-30.2017.pdf'>3º Termo Aditivo ao Contrato – Nº 30/2017</a></li>
                  <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/04/4%C2%B0-TERMO-ADITIVO-DO-CONTRATO-N%C2%B0-30.2017.pdf'>4º Termo Aditivo ao Contrato – Nº 30/2017</a></li>
                  <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/04/5%C2%B0-TERMO-ADITIVO-DO-CONTRATO-N%C2%B0-30.2017.pdf'>5º Termo Aditivo ao Contrato – Nº 30/2017</a></li>
                  <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/04/6%C2%B0-TERMO-ADITIVO-DO-CONTRATO-N%C2%B0-30.2017.pdf'>6º Termo Aditivo ao Contrato – Nº 30/2017</a></li>
                </ul>
            </div>
          </div>
        </div>
        
        {/* Accordion 3 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={() => toggleAccordion(2)}
          >
            <span className="font-bold">III – Anexos - Registro de Fornecedor/Planilhas Orçamentárias das Rotas</span>
            <span className={`transform transition-transform duration-200 ${isOpen[2] ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={contentRefs[2]}
            style={{
              maxHeight: isOpen[2] ? `${contentRefs[2].current.scrollHeight}px` : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
              <ul>
                <li><a href="https://jaboatao.pe.gov.br/servicos-de-educacao/"></a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accordion 4 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={() => toggleAccordion(3)}
          >
            <span className="font-bold">IV – Rotas georreferenciadas</span>
            <span className={`transform transition-transform duration-200 ${isOpen[3] ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={contentRefs[3]}
            style={{
              maxHeight: isOpen[3] ? `${contentRefs[3].current.scrollHeight}px` : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
              <ul >
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/08/Mapas_Rotas_TER_jaboat%C3%A3o_2022.pdf'>Mapas das Rotas (PDF)</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accordion 5 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={() => toggleAccordion(4)}
          >
            <span className="font-bold">V – Boletins de medição, notas fiscais e comprovantes de pagamento</span>
            <span className={`transform transition-transform duration-200 ${isOpen[4] ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={contentRefs[4]}
            style={{
              maxHeight: isOpen[4] ? `${contentRefs[4].current.scrollHeight}px` : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
                <p className="font-bold">Locabem</p>
              <ul className='mt-2'>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/01/12-DEZEMBRO.pdf'>Dezembro 2023</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/01/11-NOVEMBRO.pdf'>Novembro 2023</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/01/10-OUTUBRO.pdf'>Outubro 2023</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/01/LOCABEM-SETEMBRO.pdf'>Setembro 2023</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/08/7-JULHO.pdf'>Julho 2023</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/01/06-JUNHO.pdf'>Junho 2023 </a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/01/05-MAIO_compressed.pdf'>Maio 2023</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/01/4-ABRIL_compressed.pdf'>Abril 2023</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/01/3-MARCO_compressed.pdf'>Março 2023</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/01/2-FEVEREIRO.pdf'>Fevereiro 2023</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/01/Processo-Locabem-08.22.pdf'>Agosto 2022</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/01/Processo-Locabem-07.22.pdf'>Julho 2022</a></li>
              </ul>
              <p className="font-bold mt-4">Toppus</p>
              <ul className='mt-2'>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/04/Processo-Topbus-08.22.pdf'>Agosto 2022</a></li>
                <li><a href='https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/04/Processo-Topbus07.22.pdf'>Julho 2022</a></li>
                </ul>
            </div>
          </div>
        </div>

        {/* Accordion 6 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={() => toggleAccordion(5)}
          >
            <span className="font-bold">EVENTOS EDUCATIVOS</span>
            <span className={`transform transition-transform duration-200 ${isOpen[5] ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={contentRefs[5]}
            style={{
              maxHeight: isOpen[5] ? `${contentRefs[5].current.scrollHeight}px` : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
              <ul>
                <li><a href='example'>Veja os próximos eventos educativos</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accordion 7 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={() => toggleAccordion(6)}
          >
            <span className="font-bold">INICIATIVAS DE INTEGRAÇÃO</span>
            <span className={`transform transition-transform duration-200 ${isOpen[6] ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={contentRefs[6]}
            style={{
              maxHeight: isOpen[6] ? `${contentRefs[6].current.scrollHeight}px` : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
              <ul>
                <li><a href='example'>Informações sobre as iniciativas de integração</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accordion 8 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={() => toggleAccordion(7)}
          >
            <span className="font-bold">AVALIAÇÕES E RESULTADOS</span>
            <span className={`transform transition-transform duration-200 ${isOpen[7] ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={contentRefs[7]}
            style={{
              maxHeight: isOpen[7] ? `${contentRefs[7].current.scrollHeight}px` : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
              <ul>
                <li><a href='example'>Resultados das avaliações educacionais</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
