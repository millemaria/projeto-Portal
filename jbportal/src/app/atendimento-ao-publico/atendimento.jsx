'use client';

import { useState, useRef } from 'react';

export default function Planejamento() {
  // Estados para os 6 acordeons
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  // Referências para os conteúdos dos 6 acordeons
  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);
  const contentRef5 = useRef(null);
  const contentRef6 = useRef(null);

  // Funções de toggle para os 6 acordeons
  const toggleAccordion1 = () => setIsOpen1(!isOpen1);
  const toggleAccordion2 = () => setIsOpen2(!isOpen2);
  const toggleAccordion3 = () => setIsOpen3(!isOpen3);
  const toggleAccordion4 = () => setIsOpen4(!isOpen4);
  const toggleAccordion5 = () => setIsOpen5(!isOpen5);
  const toggleAccordion6 = () => setIsOpen6(!isOpen6);

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 mb-10">
      {/* Accordion 1 */}
      <div className="border-b border-gray-200">
        <button
          className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
          onClick={toggleAccordion1}
        >
          <span className="font-bold">Ouvidorias</span>
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
              <li className='text-[19px] font-bold'>Ouvidoria Geral do Município</li>
              <li className='mt-4 text-[17px]'><strong>Endereço:</strong> Palácio da Batalha Av. Barreto de Menezes, 1648 – Prazeres – Jaboatão dos Guararapes – CEP: 54310-310</li>
              <li className='mt-4 text-[17px]'><strong>Fone:</strong> 0800 081 8899 / (81) 99422 – 5177 </li>
              <li className="mt-4 text-[17px]">
            <strong>Email: </strong>
            <a href="mailto:ouvidoria@jaboatao.pe.gov.br" className="text-blue-600 hover:underline">
            ouvidoria@jaboatao.pe.gov.br
            </a>
            </li>
              <li className="mt-4 text-[17px]">
            <strong>Site: </strong>
            <a href=" https://ouvidoria.jaboatao.pe.gov.br/ " className="text-blue-600 hover:underline">
            https://ouvidoria.jaboatao.pe.gov.br/  
            </a>
            </li>
            <li className='mt-4 text-[17px]'><strong>Funcionamento:</strong> Das 08h às 14h.</li>

            <li className='mt-10 text-[19px] font-bold'>Ouvidoria SUS</li>
            <li className='mt-4 text-[17px]'><strong>Endereço:</strong> Palácio da Batalha Av. Barreto de Menezes, 1648 – Prazeres – Jaboatão dos Guararapes – CEP: 54310-310</li>
            <li className='mt-4 text-[17px]'><strong>Fone:</strong>(81) 9 9975-4361 </li>
            <li className='mt-4 text-[17px]'><strong>Funcionamento:</strong> Das 08h às 14h.</li>

            <li className='mt-10 text-[19px] font-bold'>Ouvidoria Guarda</li>
            <li className='mt-4 text-[17px]'><strong>Endereço:</strong> Rua Zelindo Marante, nº 20 Piedade.</li>
            <li className='mt-4 text-[17px]'><strong>Fone:</strong>(81) 99476-3655 </li>
            <li className='mt-4 text-[17px]'><strong>Funcionamento:</strong> Das 08h às 14h.</li>
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
          <span className="font-bold">PROCON</span>
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
          <div className="p-4 mb-0 text-[#213476]">
            <ul>
            <li className='mt-4 text-[17px]'><strong>Endereço:</strong> Palácio da Batalha Av. Barreto de Menezes, 1648 – Prazeres – Jaboatão dos Guararapes – CEP: 54310-310</li>
            <li className='mt-4 text-[17px]'><strong>Fone:</strong><br/> 0800 281 6970 (Dúvidas)</li>
            <li className='mt-4 text-[17px]'> 3476.2912 (Denúncias)</li>
            <li className='mt-4 text-[17px]'>81 99937.3511 (WhatsApp para atendimento de dúvidas)</li>
            <li className='mt-4 text-[17px]'>81 99939.0887 (WhatsApp para atendimento exclusivo para agendamento de atendimentos)</li>
            <li className='mt-4 text-[17px]'>81 7323-7953 (WhatsApp para denúncias de fiscalização)</li>
            <li className="mt-4 text-[17px]">
            <strong>Email: </strong>
            <a href="mailto: procon@jaboatao.pe.gov.br" className="text-blue-600 hover:underline">
            procon@jaboatao.pe.gov.br
            </a>
            </li>
            <li className='mt-4 text-[17px]'><strong>Funcionamento:</strong> de segunda a sexta das 08h às 14h.</li>
            <table className="mt-10 min-w-full text-left">
            <thead>
                <tr>
                <th className="border-b-2 text-black border-gray-300 p-4">Núcleo</th>
                <th className="border-b-2 text-black border-gray-300 p-4">Endereço</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border-b p-4 text-black font-bold">Procon municipal de Jaboatão dos Guararapes – SEDE</td>
                <td className="border-b text-black p-4">AV. Barreto de Menezes, 1648 – Prazeres, CEP – 54.310-310.</td>
                </tr>
                <tr>
                <td className="border-b text-black p-4">Regional 1 – Jaboatão centro</td>
                <td className="border-b text-black p-4">AV. Barão de Lucena, S/N, Antiga Sede da Prefeitura.</td>
                </tr>
                <tr>
                <td className="border-b text-black p-4">Regional 2 – Cavaleiro</td>
                <td className="border-b text-black p-4">Praça Severina Rita Coelho, 20, Cavaleiro.</td>
                </tr>
                <tr>
                <td className="border-b text-black p-4">Regional 3 – Curado</td>
                <td className="border-b text-black p-4">
                    Rua 02(dois), S/N, Curado IV, Jaboatão dos Guararapes – PE, CEP – 54.270-010,
                    Ponto de Referência: Em frente ao Bloco 19.
                </td>
                </tr>
                <tr>
                <td className="border-b text-black p-4">Regional 4 – Muribeca</td>
                <td className="border-b text-black p-4">Rodovia Empresário João Santos Filho, Eixo Integração, 3033, Muribeca.</td>
                </tr>
                <tr>
                <td className="border-b text-black p-4">Regional 5 – Praias</td>
                <td className="border-b text-black p-4">AV. Presidente Kennedy, 578, Piedade.</td>
                </tr>
            </tbody>
            </table>
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
          <span className="font-bold">DEFESA CIVIL</span>
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
            <li className='mt-4 text-[17px]'><strong>Endereço:</strong> Rua Almirante Antônio Farias,686 – Piedade, Jaboatão dos Guararapes – PE – CEP: 54.400-320</li>
            <li className='mt-4 text-[17px]'><strong>Fone:</strong><br/> 0800 281 2099</li>
            <li className='mt-4 text-[17px]'> (81) 3476-3698</li>
            <li className='mt-4 text-[17px]'>(81) 99195-6655</li>
            <li className='mt-4 text-[17px]'><strong>Funcionamento:</strong> de segunda a sexta das 08h às 14h.</li>
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
          <span className="font-bold">MOBILIDADE</span>
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
            <li className='mt-4 text-[17px]'><strong>Endereço:</strong> Rua Zelindo Marafante, 20 – Piedade, Jaboatão dos Guararapes – PE – CEP: 54.400-370</li>
            <li className='mt-4 text-[17px]'><strong>Fone:</strong> (81) 99476-3655</li>
            <li className="mt-4 text-[17px]">
            <strong>Email: </strong>
            <a href="mailto: gabsemop.pmjg@gmail.com" className="text-blue-600 hover:underline">
            gabsemop.pmjg@gmail.com
            </a>
            </li>
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
          <span className="font-bold">ORIENTAÇÃO JURÍDICA, CÂMARA PRIVADA DE CONCILIAÇÃO</span>
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
            <li className='mt-4 text-[17px]'><strong>Endereço:</strong> Rua Arão Lins de Andrade, 866 – Prazeres, Jaboatão dos Guararapes – PE – CEP: 54.310-335</li>
            <li className='mt-4 text-[17px]'><strong>Fone:</strong><br/> (81) 3476-3478</li>
            <li className='mt-4 text-[17px]'> (81) 99997-6420 (WhatsApp)</li>
            <li className="mt-4 text-[17px]">
            <strong>Email: </strong>
            <a href="mailto: orientacaojuridicajg@hotmail.com" className="text-blue-600 hover:underline">
            orientacaojuridicajg@hotmail.com
            </a>
            </li>
            <li className='mt-4 text-[17px]'><strong>Funcionamento:</strong> Das 08h às 14h</li>
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
          <span className="font-bold">ATENDIMENTO AO CONTRIBUINTE</span>
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
            <li className='mt-4 text-[17px]'><strong>Endereço:</strong> Palácio da Batalha – Av. Gal Barreto de Menezes, nº 1648, Prazeres, Jaboatão dos Guararapes – PE, CEP: 54.330-900</li>
            <li className='mt-4 text-[17px]'><strong>Fone:</strong><br/> 0800 281 1925 </li>
            <li className='mt-4 text-[17px]'> (81) 3476-1721</li>
            <li className='mt-4 text-[17px]'><strong>Funcionamento:</strong> de segunda a sexta das 08h às 14h</li>
            <li className="mt-4 text-[17px]">
            <a 
                href="https://www.tinus.com.br/csp/JABOATAO/portal/index.csp?" 
                className="text-blue-900 hover:underline font-bold"
                target="_blank"
                rel="noopener noreferrer"
            >
               Portal do Contribuinte: clique para acessar.

            </a>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
