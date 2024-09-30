'use client';

import { useState, useRef } from 'react';

export default function Saude() {
  // Estados para os 10 acordeons
  const [isOpen, setIsOpen] = useState(Array(10).fill(false));
  const contentRefs = useRef(Array(10).fill(null)); // Referências para os conteúdos dos acordeons

  const toggleAccordion = (index) => {
    setIsOpen((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };

  // Conteúdo de cada acordeon com links e texto adicional
  const accordionContents = [
    {
      title: 'COVID-19',
      links: [
        { text: 'Portal COVID', href: 'https://jaboataoemacao.jaboatao.pe.gov.br/covid19/' },
        { text: 'Boletim Epidemiológico', href: 'https://jaboataoemacao.jaboatao.pe.gov.br/boletim-epidemiologico/' },
        { text: 'Vacinômetro', href: 'https://jaboataoemacao.jaboatao.pe.gov.br/vacinometro/' },
        { text: 'Plano Municipal de Vacinação', href: 'https://jaboataoemacao.jaboatao.pe.gov.br/plano-municipal-de-vacinacao/' }
      ]
    },
    {
      title: 'RELAÇÃO DOS MEDICAMENTOS',
      links: [
        { text: 'Clique aqui para visualizar a relação dos medicamentos', href: '../../saude/relacao-de-medicamentos-disponiveis-no-municipio' }
      ],
      additionalText: `
        1. LISTA DE MEDICAMENTOS FORNECIDOS PELO SUS ÂMBITO MUNICIPAL:
        O Componente Básico da Assistência Farmacêutica (CBAF), que tem financiamento tripartite (União, Estado e Município), a aquisição é de responsabilidade do Município. O município de Jaboatão dos Guararapes disponibiliza para a população adstrita ao seu território os medicamentos do componente básico previstos na Remume (Relação Municipal de Medicamentos Essenciais), que foram padronizados tomando como parâmetro a RENAME (Relação Nacional de Medicamentos Essenciais).

        2. INFORMAÇÕES DE COMO OBTER MEDICAMENTOS DE ALTO CUSTO NO ÂMBITO ESTADUAL:
        O Componente Especializado da Assistência Farmacêutica (CEAF) no âmbito do Ministério da Saúde e a Relação Estadual do Componente Especializado (RECE) buscam garantir, no âmbito do SUS, a integralidade do tratamento medicamentoso, com patologias de maior complexidade e custo mais elevado. Os critérios para acesso a esses medicamentos são encontrados nos PCDTs (Protocolos Clínicos e Diretrizes Terapêuticas – MS), que podem ser acessados nos sites: https://www.gov.br/conitec/pt-br e http://farmacia.saude.pe.gov.br. Para fornecimento dos medicamentos do componente especializado mais conhecido como Alto Custo, o farmacêutico avalia se os pacientes estão enquadrados nos critérios estabelecidos nos Protocolos Clínicos e Diretrizes Terapêuticas (PCDT) publicados pelo Ministério da Saúde, ou pelos Protocolos Clínicos da SES PE. Para o tratamento indicado, os pacientes são orientados a procurar a farmácia do Estado de Pernambuco, localizada na Rua Osvaldo Cruz, 401-449 – Soledade, Recife – PE, 50050-220.
      `
    },
    {
      title: 'RELAÇÃO DAS UNIDADES DE SAÚDE',
      links: [
        { text: 'Clique aqui para visualizar a relação das unidades de saúde', href: '../../saude/unidades-de-saude' }
      ]
    },
    {
      title: 'RELAÇÃO DOS PROFISSIONAIS LOTADOS POR UNIDADE',
      links: [
        { text: 'Clique aqui para visualizar a relação dos profissionais lotados por unidade', href: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/09/BANCO-DE-DADOS-CGM-ATUALIZADO-SETEMBRO.2024.xlsx' }
      ],
      additionalLink: {
        text: '(*) A relação de profissionais é atualizada mensalmente.',
        href: 'https://portaldatransparencia.jaboatao.pe.gov.br/relacao-dos-profissionais-lotados-por-unidade/'
      }
    },
    {
        title: 'CARTAS DE SERVIÇO DA SAÚDE',
        links: [
          { text: 'Clique aqui para visualizar as cartas de serviço da saúde', href: 'https://jaboatao.pe.gov.br/servicos-de-saude/' }
        ]
      },
    {
        title: 'PLANOS MUNCIPAIS DE SAÚDE',
        links: [
          { text: 'Clique aqui para visualizar os planos municipais de saúde', href: 'https://jaboatao.pe.gov.br/servicos-de-saude/' }
        ]
      },
    {
        title: 'RELATÓRIO ANUAL DE GESTÃO',
        links: [
          { text: 'Clique aqui para visualizar o relatório anual de gestão', href: 'https://jaboatao.pe.gov.br/servicos-de-saude/' }
        ]
      },
      {
        title: 'ORGANIZAÇÕES SOCIAIS DE SAÚDE',
        links: [
          { text: 'Centro de Parto Normal (S3)', href: 'https://jaboataoemacao.jaboatao.pe.gov.br/covid19/' },
          { text: 'UPA –  Eduardo Campos – Sotave (S3 Gestão)', href: 'https://jaboataoemacao.jaboatao.pe.gov.br/boletim-epidemiologico/' },
          { text: 'UPA – Eduardo Campos – Sotave (ACENI)', href: 'https://jaboataoemacao.jaboatao.pe.gov.br/vacinometro/' },
          { text: 'CTTC – Instituto Humanize', href: 'https://jaboataoemacao.jaboatao.pe.gov.br/plano-municipal-de-vacinacao/' }
        ]
      },
      {
        title: 'PROGRAMAÇÃO ANUAL DE SAÚDE',
        links: [
          { text: 'Clique aqui para visualizar a programação anual de saúde', href: 'https://jaboatao.pe.gov.br/servicos-de-saude/' }
        ]
      },
      {
        title: 'CALENDÁRIO VACINAL',
        links: [
          { text: 'Calendário Vacinal – Adolescente', href: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/04/Calendario-Vacinal-Adolescente.pdf' },
          { text: 'Calendário Vacinal – Adulto e idoso', href: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/04/Calendario-Vacinal-Adulto-e-idoso.pdf' },
          { text: 'Calendário Vacinal – Crianças', href: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/04/Calendario-Vacinal-Criancas.pdf' },
          { text: 'Calendário Vacinal – Gestantes', href: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/04/Calendario-Vacinal-Gestantes.pdf' }
        ]
      }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mt-12 mb-10">
      {accordionContents.map((accordion, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-bold">{accordion.title}</span>
            <span
              className={`transform transition-transform duration-200 ${
                isOpen[index] ? 'rotate-90' : ''
              }`}
            >
              &#9654;
            </span>
          </button>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            style={{
              maxHeight: isOpen[index]
                ? `${contentRefs.current[index].scrollHeight}px`
                : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
              <ul className={`${index === 0 ? 'list-disc ml-5 space-y-2' : ''}`}>
                {accordion.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${index === 0 ? 'hover:underline' : ''}`}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
              {/* Verificar e renderizar o additionalLink */}
              {accordion.additionalLink && (
                <div className="mt-4">
                  <a
                    href={accordion.additionalLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    {accordion.additionalLink.text}
                  </a>
                </div>
              )}
              {/* Verificar e renderizar o additionalText */}
              {accordion.additionalText && (
                <p className="mt-4 text-black whitespace-pre-line">
                  {accordion.additionalText}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Texto centralizado com divisor */}
      <div className="text-center mt-12">
        <h2 className="text-3xl text-[#224276] font-bold">MAPA DAS UNIDADES DE SAÚDE</h2>
        <div className="border-b-4  border-[#224276] mt-2 w-[100px] mx-auto"></div>
        <div className="mt-6">
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1ORcftMNYjkSyf8TbVk2kFJSvDXDW7sU&ehbc=2E312F&ll=-8.084017064954624%2C-35.19164005089151&z=10"
          width="100%"
          height="800px"
          className="border-none"
          style={{ maxWidth: '100%', minHeight: '500px' }}
          title="Embedded Content"
        />
        </div>
      </div>
    </div>
  );
}
