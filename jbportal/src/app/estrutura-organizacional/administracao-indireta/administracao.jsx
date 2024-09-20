'use client';

import { useState, useRef } from 'react';

export default function Administracao() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const contentRef1 = useRef(null); 
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);

  const toggleAccordion1 = () => setIsOpen1(!isOpen1);
  const toggleAccordion2 = () => setIsOpen2(!isOpen2);
  const toggleAccordion3 = () => setIsOpen3(!isOpen3);

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto mt-10 mb-10">
        {/* Accordion 1 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={toggleAccordion1}
          >
            <span className="font-bold">Empresa Municipal de Energia e Iluminação Pública do Jaboatão dos Guararapes – EMLUME</span>
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
            <div className="space-y-9 p-4 ">
              <ul>
                <li className='text-[#000000] text-[19px]'><strong>Diretor Presidente</strong></li>
                <li className='text-[#213476] mt-[13px]'><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/07/Paulo-Lages-EMLUME.pdf" className='hover:underline'>PAULO ROBERTO SALES LAGES</a></li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>Endereço</strong></li>
                <li className='mt-[10px]'>Complexo Administrativo – Estrada da Batalha – nº 1280 – Jardim Jordão – Jaboatão dos Guararapes – PE – CEP: 54315-570</li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>Contatos</strong></li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>WhatsApp: </strong> (81) 99232-5280 / (81) 99975-5845</li>
                <li className=' mt-[13px] text-[#000000] text-[17px]'>E-mail: <a href="mailto:contato@emlume.com.br" className='hover:underline text-[#213476]'>contato@emlume.com.br</a></li>
                <li className='mt-[13px]'>Atendimento de segunda a sexta-feira de 08h às 14h.</li>
                <li className='text-[#213476] mt-[13px]'><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/07/Organograma-EMLUME.pdf" className='hover:underline font-bold'>Organograma.</a></li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>Competências e Atribuições:</strong></li>
                <li className='mt-[13px]'>A <strong>EMLUME</strong> (Empresa Municipal de Energia e Iluminação Pública do Jaboatão dos Guararapes), empresa pública municipal, fica funcionalmente vinculada à Secretaria Municipal de Infraestrutura. Ficam mantidos os Conselhos e os Fundos municipais já existentes no âmbito do Poder Público Municipal, e autorizada a inclusão daqueles que venham a ser criados, de acordo com sua legislação específica.</li>
                <li className='mt-[13px]'><strong>2º.</strong> A responsabilidade imediata pela gestão dos fundos municipais, inclusive no que diz respeito à ordenação de despesas, será do secretário municipal ou executivo ao qual for vinculado.</li>
                <li className='mt-[13px]'><strong> 3º.</strong> A participação em Conselhos Municipais poderá ser remunerada, como disposto em regramento específico.</li>
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
            <span className="font-bold">Instituto de Previdência dos Servidores Públicos do Município do Jaboatão dos Guararapes - JaboatãoPrev</span>
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
              <li className='text-[#000000] text-[19px]'><strong>Diretor Presidente</strong></li>
                <li className='text-[#213476] mt-[13px]'><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/06/JaboataoPrev.pdf" className='hover:underline'>LUCILEIDE FERREIRA LOPES</a></li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>Atendimento ao público:</strong></li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>Endereço</strong></li>
                <li className='mt-[10px]'>Rua Waldemar Basgal, nº 576 – Piedade – Jaboatão dos Guararapes – PE – CEP: 54.400-400</li>
                <li className=' mt-[13px] text-[#000000] text-[17px]'><strong>Site: </strong><a href="https://jaboataoprev.jaboatao.pe.gov.br/" className='hover:underline text-[#213476]'>https://jaboataoprev.jaboatao.pe.gov.br/</a></li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>Contatos</strong></li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>Telefone: </strong> (81) 3462-4855 /
                   (81) 3462-4619 / (81) 98743-2326</li>
                <li className=' mt-[13px] text-[#000000] text-[17px]'>E-mail: <a href="mailto:administrativojaboataoprev@jaboatao.pe.gov.br " className='hover:underline text-[#213476]'>administrativojaboataoprev@jaboatao.pe.gov.br </a></li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>Funcionamento:</strong></li>
                <li className='mt-[10px]'>segunda e sexta-feira de 08h às 12h (com agendamento).</li>
                <li className='text-[#213476] mt-[13px]'><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/10/Organograma-JABOATAO-PREV.pdf" className='hover:underline font-bold'>Organograma.</a></li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>Competências e Atribuições:</strong></li>
                <li className='mt-[13px]'>O <strong>Instituto de Previdência dos Servidores Públicos do Município do Jaboatão dos Guararapes</strong> (JABOATÃO-PREV), autarquia com personalidade jurídica de direito público, é funcionalmente vinculado à Secretaria Municipal de Administração, sem prejuízo de sua autonomia administrativa e financeira, observadas as disposições da Lei Municipal n° 108, de 30 de julho de 2001, da Lei Complementar Municipal nº 40, de 17 de agosto de 2021, e da legislação específica de regência.</li>
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
            <span className="font-bold">Companhia Municipal de Agricultura e Abastecimento - COMAB</span>
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
              <li className='text-[#000000] text-[19px]'><strong>Diretor Presidente</strong></li>
                <li className='text-[#213476] mt-[13px]'><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/09/Denis-Oliveira.pdf" className='hover:underline'>Denis Oliveira Silva</a></li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>Atendimento ao público:</strong></li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>Endereço</strong></li>
                <li className='mt-[10px]'>Complexo Administrativo – Estrada da Batalha, nº 1200 – Jardim Jordão – Jaboatão dos Guararapes – PE – CEP: 54.315-570</li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>Contatos</strong></li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>Telefone: </strong>(81) 99213-1465</li>
                <li className=' mt-[13px] text-[#000000] text-[17px]'>E-mail: <a href="mailto:silvaneideednab@gmail.com " className='hover:underline text-[#213476]'>silvaneideednab@gmail.com</a></li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>Funcionamento:</strong></li>
                <li className='mt-[10px]'> das 08:00 às 15:00</li>
                <li className='text-[#213476] mt-[13px]'><a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2022/10/Organograma-JABOATAO-PREV.pdf" className='hover:underline font-bold'>Organograma.</a></li>
                <li className='text-[#000000] mt-[13px] text-[19px]'><strong>Competências e Atribuições:</strong></li>
                <li className='mt-[13px]'>A autarquia municipal  <strong>Companhia Municipal de Agricultura e Abastecimento</strong>(COMAB), integrante da Administração Indireta, fica funcionalmente vinculada à Secretaria Municipal de Desenvolvimento Econômico, Agricultura, Turismo, Cultura e Lazer.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
