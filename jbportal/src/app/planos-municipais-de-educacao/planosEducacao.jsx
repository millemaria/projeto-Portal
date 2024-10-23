import { useEffect, useState } from 'react';

export default function PlanosEducacao() {
  const [ano, setAno] = useState('');
  const [tipo, setTipo] = useState('');

  const dados = [
    { ano: '2015-2024', tipo: 'Plano Municipal de Educação', link: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/08/1.%2010-PLANO-MUNICIPAL-DE-EDUCACAO-Lei-1203-15_Lei-626-11-1.pdf' },
    { ano: '2017', tipo: 'Relatório de Gestão', link: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/05/SME___RAG_2017.pdf' },
    { ano: '2018', tipo: 'Relatório de Gestão', link: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/05/SME___RAG_2018.pdf' },
    { ano: '2018', tipo: 'Alteração de Metas e Diretrizes', link: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/08/2.-14-de-Dezembro-de-2018-%E2%80%93-XX2.-VIII-%E2%80%93-No-214-%E2%80%93-PME-Plano-Municipal-de-Educacao-2-7.pdf' },
    { ano: '2018', tipo: 'Relatório de resultados COMUDE', link: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/08/4.-COMUDE-2018-JaboatAo-RelatA%C2%B3rio-Final.pdf' },
    { ano: '2019', tipo: 'Relatório de Gestão', link: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/05/SME___RAG_2019.pdf' },
    { ano: '2020', tipo: 'Relatório de Gestão', link: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/05/SME___RAG_2020.pdf' },
    { ano: '2021', tipo: 'Relatório de Gestão', link: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/05/SME___RAG_2021.pdf' },
    { ano: '2021', tipo: 'Relatório de resultados COMUDE', link: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2023/08/3.-COMUDE-2021-Jaboatao-Relatorio-Final-1-1.pdf' },
    { ano: '2022', tipo: 'Relatório de Gestão', link: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/05/SME___RAG_2022.pdf' },
    { ano: '2023', tipo: 'Relatório de Gestão', link: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/05/SME___RAG_2023.pdf' },
    { ano: '2023', tipo: 'Relatório de resultados COMUDE', link: 'https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/03/COMUDE_2023-Jaboatao.pdf' },
  ];

  const filtrarTabela = () => {
    return dados.filter(item => {
      const anoMatch = !ano || item.ano.includes(ano);
      const tipoMatch = !tipo || item.tipo.includes(tipo);
      return anoMatch && tipoMatch;
    });
  };

  const resultadosFiltrados = filtrarTabela();

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="filtro text-center mb-8">
        <label htmlFor="ano" className="label mr-2">Ano:</label>
        <select
          id="ano"
          onChange={(e) => setAno(e.target.value)}
          className="border rounded-md p-2"
          value={ano}
        >
          <option value="">Selecione</option>
          <option value="2015-2024">2015-2024</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>

        <label htmlFor="tipoRelatorio" className="label ml-4 mr-2">Tipo de Relatório:</label>
        <select
          id="tipoRelatorio"
          onChange={(e) => setTipo(e.target.value)}
          className="border rounded-md p-2"
          value={tipo}
        >
          <option value="">Selecione</option>
          <option value="Plano Municipal de Educação">Plano Municipal de Educação</option>
          <option value="Relatório de Gestão">Relatório de Gestão</option>
          <option value="Relatório de resultados COMUDE">Relatório de resultados COMUDE</option>
          <option value="Alteração de Metas e Diretrizes">Alteração de Metas e Diretrizes</option>
        </select>
      </div>

      {/* Tabela de exemplo */}
      <div className="overflow-x-auto">
        <table id="tabela" className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr role="row">
              <th><center>ANO</center></th>
              <th><center>DESCRIÇÃO</center></th>
              <th><center>ANEXO</center></th>
            </tr>
          </thead>
          <tbody>
            {resultadosFiltrados.length > 0 ? (
              resultadosFiltrados.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-4">{item.ano}</td>
                  <td className="border border-gray-300 p-4">{item.tipo}</td>
                  <td className="border border-gray-300 p-4">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined">description</span>
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="border border-gray-300 p-4 text-center">Nenhum resultado encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="text-left text-[20px] mt-8">
        <p>(*) Os Relatórios COMUDE são realizados a cada 02 anos.</p>
        <p>(*) Em virtude da pandemia do COVID-19, não foi possível realizar a COMUDE 2020.</p>
      </div>
      <div className='text-[17px] mt-8'>
            <p>última atualização 15/10/2024</p>
      </div>
    </div>
  );
}
