import { MdEditDocument } from "react-icons/md";
import { FaUserCheck, FaMoneyBillAlt } from "react-icons/fa";


export default function Contratos() {
    return (
      <div className="bg-white py-16 w-full">
            {/* Ícones na parte superior */}

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8">
            <a href="./os-contratos/consulta-contratos">
            <div className="bg-[#002A66] text-white w-[90%] sm:w-[300px] h-[350px] mx-auto flex flex-col justify-center items-center shadow-lg hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] hover:text-white group overflow-hidden transition-all duration-500 ease-in-out relative">
                {/* Ícone com transição de opacidade */}
                <MdEditDocument className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
                
                {/* Texto inicial com transição de opacidade */}
                <span className="mt-4 text-[16px] font-semibold text-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                CONTRATOS
                </span>

                {/* Novo texto e frase que aparecem ao hover */}
                <span className="hidden group-hover:flex flex-col justify-center items-center absolute inset-0 text-[20px] font-semibold transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                CONTRATOS
                {/* Frase adicionada */}
                <span className="mt-2 text-[14px] text-center font-normal">
                    Consulta aos contratos celebrados pelo município
                </span>
                </span>
            </div>
            </a>


              <a href="./os-contratos/gestores-e-fiscais-de-contratos">
            <div className="bg-[#002A66] text-white w-[90%] sm:w-[300px] h-[350px] mx-auto flex flex-col justify-center items-center shadow-lg hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] hover:text-white group transition-all duration-300 ease-in-out relative">
                <FaUserCheck className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
                
                {/* Texto inicial com transição de opacidade */}
                <span className="mt-4 text-[16px] font-semibold text-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                GESTORES E FISCAIS DE<br />CONTRATOS
                </span>

                {/* Novo título e frase que aparecem ao hover */}
                <span className="hidden group-hover:flex flex-col justify-center items-center absolute inset-0 text-[20px] font-semibold text-center transition-opacity duration-500 ease-in-out">
                GESTORES E FISCAIS DE<br />CONTRATOS
                {/* Frase adicionada */}
                <span className="mt-2 text-[14px] font-normal">
                    Consulte a relaçaõ dos gestores e fiscais de contratos
                </span>
                </span>
            </div>
            </a>


            <a href="./os-contratos/pagamento-por-ordem-cronologica">
            <div className="bg-[#002A66] text-white w-[90%] sm:w-[300px] h-[350px] mx-auto flex flex-col justify-center items-center shadow-lg hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] hover:text-white group transition-all duration-300 ease-in-out relative">
                <FaMoneyBillAlt className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
                
                {/* Texto inicial com transição de opacidade */}
                <span className="mt-4 text-[16px] font-semibold text-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                PAGAMENTO POR ORDEM CRONOLÓGICA
                </span>

                {/* Novo título e frase que aparecem ao hover */}
                <span className="hidden group-hover:flex flex-col justify-center items-center absolute inset-0 text-[20px] font-semibold text-center transition-opacity duration-500 ease-in-out">
                PAGAMENTO POR ORDEM CRONOLÓGICA
                {/* Frase adicionada */}
                <span className="mt-2 text-[14px] font-normal">
                    Consulte informações sobre o pagamento por Ordem Cronológica
                </span>
                </span>
            </div>
            </a>

            </div>
      </div>
    );
}
