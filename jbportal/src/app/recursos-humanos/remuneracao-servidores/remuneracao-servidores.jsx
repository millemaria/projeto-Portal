export default function RemuneracaoServidoresPage() {
    return (
        <>
            <iframe
                src="https://sarh.jaboatao.pe.gov.br/PORTAL_TRANSPARENCIA-0.0.1-SNAPSHOT/"
                width="100%"
                height="800px"
                className="border-none"
                style={{ maxWidth: '100%', minHeight: '500px' }}
                title="Embedded Content"
            />

            <div className="flex justify-center mt-16">
                <button
                    type="submit"
                    className="bg-[#224276] hover:bg-[#3a5a9e] text-white px-6 py-2 rounded-[5px] font-semibold transform transition-transform duration-300 hover:scale-105"
                >
                    <a href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/08/Carga-Horaria-servidores.xlsx">
                        Consulte a Carga Horária dos Servidores
                    </a>
                </button>
            </div>

            <div className="my-20 px-4 text-sm text-justify max-w-screen-lg mx-auto">
                <h2 className="font-semibold text-lg">CONSIDERAÇÕES IMPORTANTES:</h2>
                <p className="mt-4">As informações sobre o pagamento dos servidores municipais seguem, com as devidas adaptações, o padrão adotado pelo Portal da Transparência da União, atendendo à Lei de Acesso à Informação – LAI. Os dados disponibilizados nas planilhas têm origem no Sistema de Folha de Pagamentos da Secretaria de Planejamento e Gestão – SEPLAG.</p>

                <h3 className="font-semibold mt-4">CPF</h3>
                <p>Com fundamento no art. 5º, XXXIII, da CF/88, o CPF é mostrado parcialmente (apenas seis dos onze dígitos), preservando a privacidade dos servidores.</p>

                <h3 className="font-semibold mt-4">REMUNERAÇÃO</h3>
                <p>O valor total percebido no mês, em espécie, a qualquer título, pelo servidor público, compreendendo todas as vantagens permanentes, as vantagens pessoais incorporadas e as retiráveis. Observação: Para o mês de junho/17 está contemplada 1ª parcela do 13°.</p>

                <h3 className="font-semibold mt-4">DESCONTO DO EXCEDENTE DE REMUNERAÇÃO</h3>
                <p>Valores descontados quando a remuneração mensal excede os tetos remuneratórios, conforme descrito na Constituição e demais normas legais de âmbitos federal e estadual (art. 37, XI, da CF/88).</p>

                <h3 className="font-semibold mt-4">DESCONTOS DE FALTAS E/OU RESTITUIÇÕES AO MUNICÍPIO</h3>
                <p>Corresponde à soma dos valores devolvidos ao erário pelo servidor, como por exemplo: descontos de faltas, vantagens anteriormente pagas a maior, excedentes de ligações telefônicas, multas de trânsito, entre outros.</p>

                <h3 className="font-semibold mt-4">DESCONTOS PREVIDÊNCIA</h3>
                <p>Refere-se aos descontos previdenciários dos contribuintes do Fundo de Previdência Municipal, do INSS, e de outros regimes próprios de previdência social.</p>

                <h3 className="font-semibold mt-4">DESCONTOS IMPOSTO DE RENDA</h3>
                <p>Refere-se aos valores do Imposto de Renda retido na fonte pagadora.</p>

                <h3 className="font-semibold mt-4">TOTAL DE DESCONTOS COMPULSÓRIOS</h3>
                <p>Contempla os descontos compulsórios lançados na folha de pagamentos. Na planilha disponibilizada é igual à soma dos grupos de descontos mencionados anteriormente: Desconto de Excedente de Remuneração, Descontos de Faltas e/ou Restituições ao Estado, Desconto de Previdência Oficial e Total de Descontos de imposto de Renda.</p>

                <h3 className="font-semibold mt-4">VALOR LÍQUIDO (SEM DESCONTOS FACULTATIVOS DO SERVIDOR)</h3>
                <p>Corresponde ao TOTAL DE VANTAGENS subtraídos apenas o TOTAL DE DESCONTOS COMPULSÓRIOS. A fim de preservar a privacidade do servidor, descontos não obrigatórios, facultativos, como empréstimos consignados, pensões e afins, não são deduzidos desse valor.</p>

                <h3 className="font-semibold mt-4">LEIS RELACIONADAS</h3>
                <ul className="list-disc ml-6">
                    <li>LEI COMPLEMENTAR Nº 45/2023 – Dispõe sobre a Estrutura Organizacional da Administração Direta e Indireta do Município.</li>
                    <li>Anexo I – Tabela de Cargos, Símbolos, Quantidades e Vencimentos da Administração Direta e Indireta – Lei Complementar nº 45 Alterado pela Lei 1.564-2023.</li>
                    <li>Anexo II – Quadro de Atribuições Básicas dos Cargos em Comissão da Administração Direta e Indireta.</li>
                    <li>LEI COMPLEMENTAR Nº 49/2023 – Dispõe sobre a Lei Complementar nº 45, 31 de março de 2023, que trata da Estrutura Organizacional da Administração Direta e Indireta do Município.</li>
                    <li>LEI Nº 1600/2024 – Dispõe sobre o reajuste dos Vencimentos Básicos dos Cargos integrantes do quadro de pessoal.</li>
                    <li>Anexo I – Estrutura e Tabela de Vencimento.</li>
                    <li>Anexo II – Remuneração dos Procuradores do Município.</li>
                    <li>Anexo III – Tabela Salarial.</li>
                    <li>Anexo IV – Tabela de Vencimento Auditor Fiscal Tributário.</li>
                    <li>LEI Nº 224/1996 – Estatuto do Servidor Público Municipal.</li>
                </ul>
            </div>
        </>
    );
}
