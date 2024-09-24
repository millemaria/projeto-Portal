import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";

export default function licitacoes() {
return(
    <div className="flex flex-wrap sm:flex-row justify-center gap-[20px] my-[50px] mx-[10px]">
    
        {/* PROCESSOS CONCLUÍDOS EMLUME */}
        <a href="../licitacoes/licitacoes-emlume" target="_blank">
            <div className="bg-[#002A66] text-white w-full sm:w-[550px] h-[300px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
            <IoDocumentText className="text-6xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                PROCESSOS CONCLUÍDOS EMLUME
            </h3>
            <div className="flex flex-col absolute inset-0 items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-4">
                <h2 className="text-lg">PROCESSOS CONCLUÍDOS EMLUME</h2><br/>
                <p className="text-sm">Apresenta os Processos licitórios concluídos pela EMLUME</p>
            </div>
            </div>
        </a> 

        {/* PROCESSOS DE LICITAÇÕES À PARTIR DE 2019 */}
        <a href="#" target="_blank">
            <div className="bg-[#002A66] text-white w-full sm:w-[550px] h-[300px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
            <IoDocumentText className="text-6xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                PROCESSOS DE LICITAÇÕES À PARTIR DE 2019
            </h3>
            <div className="flex flex-col absolute inset-0 items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-4">
                <h2 className="text-lg">PROCESSOS DE LICITAÇÕES À PARTIR DE 2019</h2><br/>
                <p className="text-sm">Apresenta todos os processos licitatórios concluídos a partir do ano de 2019.</p>
            </div>
            </div>
        </a>

        {/* CONTRATANTES SANCIONADOS PELO MUNICÍPIO */}
        <a href="#" target="_blank">
            <div className="bg-[#002A66] text-white w-full sm:w-[550px] h-[300px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
            <IoDocumentText className="text-6xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                CONTRATANTES SANCIONADOS PELO MUNICÍPIO
            </h3>
            <div className="flex flex-col absolute inset-0 items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-4">
                <h2 className="text-lg">CONTRATANTES SANCIONADOS PELO MUNICÍPIO</h2><br/>
                <p className="text-sm">Relação de Contratados/Licitantes sancionados pelo Município.</p>
            </div>
            </div>
        </a>
    
    
        {/* PLANO ANUAL DE CONTRATAÇÕES */}
        <a href="#" target="_blank">
        <div className="bg-[#002A66] text-white w-full sm:w-[550px] h-[300px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
            <IoDocumentText className="text-6xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
            PLANO ANUAL DE CONTRATAÇÕES
            </h3>
            <div className="flex flex-col absolute inset-0 items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-4">
            <h2 className="text-lg">PLANO ANUAL DE CONTRATAÇÕES</h2>
            </div>
        </div>
        </a>

        {/* PROCESSOS DE LICITAÇÕES CONCLUÍDOS ATÉ 2018 */}
        <a href="#" target="_blank">
        <div className="bg-[#002A66] text-white w-full sm:w-[550px] h-[300px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
            <IoDocumentText className="text-6xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
            PROCESSOS DE LICITAÇÕES CONCLUÍDOS ATÉ 2018
            </h3>
            <div className="flex flex-col absolute inset-0 items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-4">
            <h2 className="text-lg">PROCESSOS DE LICITAÇÕES CONCLUÍDOS ATÉ 2018</h2><br/>
            <p className="text-sm">Apresenta todos os processos licitatórios concluídos até o ano de 2018.</p>
            </div>
        </div>
        </a>

        {/* AVISO DE LICITAÇÕES */}
        <a href="#" target="_blank">
        <div className="bg-[#002A66] text-white w-full sm:w-[550px] h-[300px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
            <IoDocumentText className="text-6xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
            AVISO DE LICITAÇÕES
            </h3>
            <div className="flex flex-col absolute inset-0 items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-4">
            <h2 className="text-lg">AVISO DE LICITAÇÕES</h2>
            </div>
        </div>
        </a>


    </div>
        
);
}
