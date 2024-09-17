'use client';

import { useState, useRef } from 'react';

export default function Orientacoes() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordions = [
    { 
      year: '2024', 
      content: ` <a href="../../pdf/BOLETIM-CGM-01.24-3.pdf" target="_blank">BOLETIM CGM 001.2024 – Condutas vedadas aos agentes públicos em ano de eleição.<br />
      </a>
      <a href="../../pdf/2.-BOLETIM-CGM-02.24-LICITACOES-FINAL.pdf" target="_blank">BOLETIM CGM 002.2024 – Atualização dos valores das modalidades licitatórias</a>` 
    },
    { 
      year: '2023', 
      content: `BOLETIM CGM Nº 001/2023 – Classificação Despesa TI<br />
      BOLETIM CGM Nº 002/2023 – Transparência Pública: dever do gestor público, direito do cidadão.<br />
      BOLETIM CGM Nº003/2023 – Acúmulo de cargo no serviço municipal.` 
    },
    { 
      year: '2022', 
      content: `BOLETIM CGM Nº 001/2022 – Orientações Gerais sobre Licitação Acordão TCE<br />
      BOLETIM CGM Nº 002/2022 – Vedações em Ano de Eleições<br />
      BOLETIM CGM Nº 003/2022 – Fiscalização de Contratos de Terceirização de Serviços<br />
      BOLETIM CGM Nº 004/2022 – Condutas Vedadas – Ano Eleitoral <br />
      BOLETIM CGM N° 005/2022 – Orçamento Estimativo <br />
      BOLETIM CGM N° 006/2022  – Preferência Pregão Eletrônico<br />
      BOLETIM CGM N° 007/2022  – Controle Interno Processos Licitatórios<br /> 
      BOLETIM CGM N° 008/2022  – Assédio Eleitoral<br />
      BOLETIM CGM N° 009/2022 – PORTARIA 003/2022  – Implantação da Escrituração fiscal digital de retenções<br />
      BOLETIM CGM N° 010/2022  – Implantação Sistema Único e integrado<br />
      BOLETIM CGM N° 011/2022  – Concessão de Diárias e o Princípio da Transparência` 
    },
    { 
      year: '2021', 
      content: `BOLETIM CGM Nº 001/2021 – Atualização cadastro dos órgãos públicos e gestores no TCE.<br />
      BOLETIM CGM Nº 002/2021 – Reequilíbrio econômico-financeiro de contratos.<br />
      BOLETIM CGM Nº 003/2021 – Contratos Imobiliários de locação.<br />
      BOLETIM CGM Nº 004/2021 – Excepcionalidade na Prorrogação dos Contratos de Prestação de Serviços.<br />
      BOLETIM CGM Nº 005/2021 – Dia Nacional de Combate ao Assédio Moral.<br />
      BOLETIM CGM Nº 006/2021 – As atribuições do Controle Interno pela nova Lei de licitações e contratos.<br />
      BOLETIM CGM Nº 007/2021 – Procedimento Administrativo de Aplicação de Penalidade – PAAP<br />
      BOLETIM CGM Nº 008/2021 – Regimento Interno OGM – O papel da Ouvidoria e do Interlocutor<br />
      BOLETIM CGM Nº 009/2021 – Observações sobre abandono de cargo<br />
      BOLETIM CGM Nº 010/2021 – Força de Trabalho para a manutenção do serviço público no período de pandemia<br />
      BOLETIM CGM Nº 011/2021 – Prestação de Contas<br />
      BOLETIM CGM Nº 012/2021 – Cadastro nacional de Empresas Punidas – CNEP e o CEIS<br />
      BOLETIM CGM Nº 013/2021 – TCESP<br />
      BOLETIM CGM Nº 014/2021 – Gestão de Frota` 
    },
    { 
      year: '2020', 
      content: `BOLETIM CGM Nº 001/2020 – Orientações Sobre a Elaboração do Relatório de Pagamento de Shows<br />
      BOLETIM CGM Nº 002/2020 – Compras Corporativas e Sistema de Registro de Preços<br />
      BOLETIM CGM Nº 003/2020 – Orientações Sobre o Funcionamento da Máquina Administrativa no Período de Emergência <br />
      BOLETIM CGM Nº 004/2020 – Prorrogação dos Prazos para Apresentação das Prestações de Contas Anuais de Governo e de Gestão<br />
      BOLETIM CGM Nº 005/2020 – Alerta de Responsabilização Sobre Despesas do Último Ano de Mandato<br />
      BOLETIM CGM Nº 006/2020 – Plano de Ações Intersetoriais, Emergenciais e Estratégicas<br />
      BOLETIM CGM Nº 007/2020 – Realização de Gastos Desnecessários e Contratação de Pessoal <br />
      BOLETIM CGM Nº 008/2020 – Distribuição Gratuita de Bens e Valores em Ano Eleitoral em Estado de Calamidade Pública<br />
      BOLETIM CGM Nº 009/2020 – Sistema de Tramitação de Documentos – STD <br />
      BOLETIM CGM Nº 010/2020 – Fiscalização e Sanções Administrativas por Inexecução Contratual<br />
      BOLETIM CGM Nº 011/2020 – Procedimentos Licitatórios para Aquisição de Bens e Serviços no Enfrentamento Covid-19<br />
      BOLETIM CGM Nº 012/2020 – Prazos Prorrogados para Envio de Informações ao TCE em virtude da Covid-19<br />
      BOLETIM CGM Nº 013/2020 – Recomendação TCE/PGJ Sobre Dispensa e Inexibilidade Referente Aquisição de Insumos no Enfrentamento da Covid-19<br />
      BOLETIM CGM Nº 014/2020 – Decreto Municipal – Suspensão de Contratações e Atos Que Resultem em Aumento da Despesa<br />
      BOLETIM CGM Nº 015/2020 – Transparência nas Contratações Emergenciais para Enfrentamento da Covid-19<br />
      BOLETIM CGM Nº 016/2020 – Suspensão de Realização de Provas de Concursos Públicos<br />
      BOLETIM CGM Nº 017/2020 – Contratação de Pessoal Por Tempo Determinado no Período de Pandemia<br />
      BOLETIM CGM Nº 018/2020 – Proibição de Concessão, a Qualquer Título, de Vantagem, Aumento, Reajuste, ou Adequação de Remuneração<br />
      BOLETIM CGM Nº 019/2020 – Prazos de Notificações de Processos em Andamento no TCE<br />
      BOLETIM CGM Nº 020/2020 – Flexibilização do Isolamento Social<br />
      BOLETIM CGM Nº 021/2020 – Alerta do TCE e MPCO Sobre a Modelagem Eletrônica das Licitações<br />
      BOLETIM CGM Nº 022/2020 – Controle das Dispensas Por Valor Pelos Órgãos e Secretarias<br />
      BOLETIM CGM Nº 023/2020 – Aspectos Sobre a Publicação dos Extratos dos Contratos Administrativos<br />
      BOLETIM CGM Nº 024/2020 – Formalização Tempestiva dos Termos Aditivos dos Contratos Vigentes<br />
      BOLETIM CGM Nº 025/2020 – Novas Datas para Condutas Vedadas aos Agentes Públicos Durante o Período Eleitora<br />
      BOLETIM CGM Nº 026/2020 – Simplificação dos Atos e Procedimentos Administrativos<br />
      BOLETIM CGM Nº 027/2020 – Vedação de Propaganda Antecipada, Extemporânea ou Prematuras <br />
      BOLETIM CGM Nº 028/2020 – Fontes Diversificadas de Pesquisa de Preços para Formação do Orçamento Estimativo dos Processos Licitatórios<br />
      BOLETIM CGM Nº 029/2020 – Contratos Temporários em Tempos de Pandemia<br />
      BOLETIM CGM Nº 030/2020 – Realizações de Licitações em Tempo de Pandemia<br />
      BOLETIM CGM Nº 031/2020 – Execução Indireta de Serviços da Administração Pública<br />
      BOLETIM CGM Nº 032/2020 – Controles Internos Relativos a Obras e Serviços de Engenharia` 
    },
    { 
      year: '2019', 
      content: `BOLETIM CGM Nº 001/2019 – Reajuste Salário Contribuição 2019<br />
      BOLETIM CGM Nº 002/2019 – Obrigação de Aplicação de Sanções Administrativas por Inexecução Contratual<br />
      BOLETIM CGM Nº 003/2019 – Prazos Prescricionais em Inquérito Administrativo Disciplinar<br />
      BOLETIM CGM Nº 004/2019 – Das Responsabilidades das Subdelegações pelos Ordenadores<br />
      BOLETIM CGM Nº 005/2019 – Orientação quanto aos Procedimentos dos Processos de Pagamento Por Indenizações<br />
      BOLETIM CGM Nº 006/2019 – Condutas Vedadas aos Agentes Públicos em Ano de Eleição` 
    },
    { 
      year: '2018', 
      content: `BOLETIM CGM Nº 001/2018 – Procedimento para Desapropriação Amigável <br />
      BOLETIM CGM Nº 002/2018 – Documentação Necessária e Prazos para Prestação de Contas de Governo<br />
      BOLETIM CGM Nº 003/2018 – Documentação Necessária para Prestação de Contas de Gestão 2017<br />
      BOLETIM CGM Nº 004/2018 – Do Atendimento de Demandas do Tribunal de Contas<br />
      BOLETIM CGM Nº 005/2018 – Pesquisas de Preços para Fixação dos Valores de Referência em Procedimentos Licitatórios<br />
      BOLETIM CGM Nº 006/2018 – Ouvidoria do Órgão de Segunda Instância, etc…….<br />
      BOLETIM CGM Nº 007/2018 – Recolhimento Integral e Tempestivo da Contribuição Previdenciária<br />
      BOLETIM CGM Nº 008/2018 – Da Necessidade do Zelo do Patrimônio Público<br />
      BOLETIM CGM Nº 009/2018 – Contratação de Execução de Obras e Prestação de Serviços<br />
      BOLETIM CGM Nº 010/2018 – Responsabilidade da Gestão Contratual<br />
      BOLETIM CGM Nº 011/2018 – Vedação de Servidores Contratarem com a Administração Pública<br />
      BOLETIM CGM Nº 012/2018 – Atribuições e Prerrogativas do Analista de Controle Interno` 
    },
    { 
      year: '2017', 
      content: `BOLETIM CGM Nº 001/2017 – Nepotismo
      BOLETIM CGM Nº 002/2017 – Aditamento de contratos<br />
      BOLETIM CGM Nº 003/2017 – Sindicância<br />
      BOLETIM CGM Nº 004/2017 – Manifestação da Ouvidoria<br />
      BOLETIM CGM Nº 005/2017 – Prazo de acesso a informação<br />
      BOLETIM CGM Nº 006/2017 – Concessão de Diárias e Passagens<br />
      BOLETIM CGM Nº 007/2017 – Contratação Temporária<br />
      BOLETIM CGM Nº 008/2017 – O Papel da Controladoria<br />
      BOLETIM CGM Nº 009/2017 – Exigência de Regularidade Fiscal dos Contratados<br />
      BOLETIM CGM Nº 010/2017 – O Processamento de Restos a Pagar<br />
      BOLETIM CGM Nº 011/2017 – Tramitação de Demandas na Ouvidoria` 
    },
  ];
  
    const additionalAccordions1 = [
      { 
        title: '2024', 
        content: `INSTRUÇÃO NORMATIVA CGM Nº 001/2024 – Documentação necessária para abertura de PAD. <br />
INSTRUÇÃO NORMATIVA CGM Nº 002/2024 – Orientação sobre acúmulo ilegal de cargos públicos.` 
      },
      { 
        title: '2023', 
        content: 'INSTRUÇÃO NORMATIVA CGM Nº 001/2023 – Tratamento de Denúncias' 
      },
      { 
        title: '2022', 
        content: 'INSTRUÇÃO NORMATIVA CGM Nº 001/2022' 
      },
    ];
    

    const additionalAccordions2 = [
      { 
        title: '2024', 
        content: `Guia de Orientação – Acúmulo de Cargos no Serviço Público<br /><br />
        Manual de Gestão de Bens Móveis – 2ª Edição` 
      },
      { 
        title: '2023', 
        content: 'Guia de Orientação para Gestores e Fiscais de Contrato' 
      },
      { 
        title: '2022', 
        content: `Manual Prático Simplificado de Liquidação de Despesa<br />
        Manual Prático do Código de Conduta Funcional`
      },
      { 
        title: '2021', 
        content: `Orientações Sobre o Termo de Ajustes de Contas – TAC<br />
        Manual de Captação de Convênios e outros Repasses`
      },
      { 
        title: '2020', 
        content: `Manual DMS <br />
        Manual NFS-e`
      },
      { 
        title: '2019', 
        content: `Manual Prestação de Contas OSS<br />
        Manual Prático de Processo Administrativo Disciplinar e Sindicância` 
      },
  ];
  

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 mb-10">
      {/* Título Principal */}
      <h1 className="text-center text-4xl text-[#224276] font-bold mb-6">
        BOLETINS INFORMATIVOS
      </h1>

      {/* Acordeões Principais */}
      {accordions.map((accordion, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-bold">
              {accordion.year}
            </span>
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
              <p dangerouslySetInnerHTML={{ __html: accordion.content }}></p>
            </div>
          </div>
        </div>
      ))}

      {/* Novo Título */}
      <h2 className="text-center text-4xl text-[#224276] font-bold mt-10 mb-6">
        INSTRUÇÕES NORMATIVAS
      </h2>

      {/* Acordeões Adicionais 1 */}
      {additionalAccordions1.map((accordion, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={() => toggleAccordion(accordions.length + index)}
          >
            <span className="font-bold">
              {accordion.title}
            </span>
            <span className={`transform transition-transform duration-200 ${openAccordion === accordions.length + index ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={el => contentRefs.current[accordions.length + index] = el}
            style={{
              maxHeight: openAccordion === accordions.length + index ? `${contentRefs.current[accordions.length + index]?.scrollHeight}px` : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
              <p dangerouslySetInnerHTML={{ __html: accordion.content }}></p>
            </div>
          </div>
        </div>
      ))}

      {/* Novo Título */}
      <h2 className="text-center text-4xl text-[#224276] font-bold mt-10 mb-6">
        MANUAIS E CARTILHAS
      </h2>

      {/* Acordeões Adicionais 2 */}
      {additionalAccordions2.map((accordion, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 bg-[#224276] text-white flex justify-between items-center"
            onClick={() => toggleAccordion(additionalAccordions1.length + index + accordions.length)}
          >
            <span className="font-bold">
              {accordion.title}
            </span>
            <span className={`transform transition-transform duration-200 ${openAccordion === additionalAccordions1.length + index + accordions.length ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </button>
          <div
            ref={el => contentRefs.current[additionalAccordions1.length + index + accordions.length] = el}
            style={{
              maxHeight: openAccordion === additionalAccordions1.length + index + accordions.length ? `${contentRefs.current[additionalAccordions1.length + index + accordions.length]?.scrollHeight}px` : '0px',
              transition: 'max-height 0.5s ease',
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-[#213476]">
              <p dangerouslySetInnerHTML={{ __html: accordion.content }}></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
