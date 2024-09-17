import Link from "next/link";
import ModelPage from "../../../components/ModelPage";
import RemuneracaoServidoresPage from "./remuneracao-servidores";



export default function RemuneracaoServidores() {
  return (
    <div>
        <ModelPage
        titulo={"Informações Sobre a Remuneração dos Servidores"}
        subtitulo={
            <span>
              <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
                Início
              </Link>
              &nbsp;»
              <Link href="../recursos-humanos" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
                RECURSOS-HUMANOS
              </Link>
              &nbsp;» <span className="brightness-125">Informações Sobre a Remuneração dos Servidores</span>
            </span>
          }>
          <RemuneracaoServidoresPage />
        </ModelPage>
    </div>
    
  );
}