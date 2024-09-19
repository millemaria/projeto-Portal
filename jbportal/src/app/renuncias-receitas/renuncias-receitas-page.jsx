'use client';

import { useState, useRef } from 'react';

export default function RenunciasReceitasPage() {
    const [openAccordion, setOpenAccordion] = useState(null);
    const contentRefs = useRef([]);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const validateLink = (link) => {    
        return link.startsWith('../../pdf/');
    };

    const accordions = [
        {
            title: 'LEGISLAÇÃO',
            content: [
                { text: 'Lei Ordinária n° 1480/2021 – Jaboatão dos Guararapes', link: '../../pdf/Lei-Ordinaria-1480-2021-de-Jaboatao-dos-Guararapes-PE.pdf' },
                { text: 'Lei Ordinária n° 070/2000 – Jaboatão dos Guararapes', link: '../../pdf/Lei-Ordinaria-70-2000-de-Jaboatao-dos-Guararapes-PE.pdf' },
                { text: 'Lei n° 155/1991- Código Tributário Municipal – Jaboatão dos Guararapes', link: '../../pdf/CODIGO.pdf' }
            ]
        },
        {
            title: 'INCENTIVOS FISCAIS PARA PROJETOS CULTURAIS E ESPORTIVOS',
            content: [
                { text: 'O Município de Jaboatão dos Guararapes informa que, até a presente data, não dispõe de incentivos fiscais direcionados a projetos culturais e esportivos.', isParagraph: true, style: { color: 'black' } },
                { text: 'Cartilha de Incentivos Fiscais.', link: '../../pdf/Cartilha-de-Incentivos-Fiscais.pdf' },
                { text: 'Atualizado em: 19/07/2024', isParagraph: true, style: { color: 'black' } }
            ]
        },
        {
            title: 'REQUISITOS PARA DESONERAÇÕES DE IMPOSTOS',
            content: [
                { text: 'Requisito Desoneração de Impostos – IPTU.TLP', link: '../../pdf/Requisito-Desoneracao-de-Impostos-IPTU.TLP.pdf' },
                { text: 'Requisito Desoneração de Impostos – ISS', link: '../../pdf/Requisito-Desoneracao-de-Impostos-ISS.pdf' },
                { text: 'Requisito Desonerações de Impostos – ITBI', link: '../../pdf/Requisito-Desoneracoes-de-Impostos-ITBI.pdf' }
            ]
        },
        {
            title: 'DADOS QUANTITATIVOS SOBRE AS RENÚNCIAS DE RECEITA',
            content: [
                { text: 'Clique aqui para visualizar', link: '../../pdf/Requisito-Desoneracao-de-Impostos-IPTU.TLP.pdf' }
            ]
        },
        {
            title: 'INFORMAÇÕES PORMENORIZADAS DAS RENÚNCIAS DE RECEITA',
            content: [
                { text: 'Clique aqui para visualizar', link: '../../pdf/Requisito-Desoneracao-de-Impostos-IPTU.TLP.pdf' }
            ]
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto mt-10 mb-10">
            {accordions.map((accordion, index) => (
                <div key={index} className="border-b border-gray-200">
                    <button
                        className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="font-bold">{accordion.title}</span>
                        <span className={`transform transition-transform duration-200 ${openAccordion === index ? 'rotate-90' : ''}`}>
                            &#9654;
                        </span>
                    </button>
                    <div
                        ref={el => contentRefs.current[index] = el}
                        style={{
                            maxHeight: openAccordion === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                            transition: 'max-height 0.5s ease',
                        }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 text-[#213476]">
                            {accordion.content.map((item, i) => (
                                item.isParagraph ? (
                                    <p key={i} style={item.style}>{item.text}</p>
                                ) : (
                                    <ul key={i}>
                                        <li>
                                            {validateLink(item.link) ? (
                                                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
                                            ) : (
                                                <span>{item.text} (link inválido)</span>
                                            )}
                                        </li>
                                    </ul>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
