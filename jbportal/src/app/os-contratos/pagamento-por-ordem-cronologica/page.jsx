'use client';
import ModelPage from "../../../components/ModelPage"
import Pagamento from "./pagamento";
import Link from "next/link";

export default function recursosHumanos() {
  return (
    <div>
      <ModelPage
       titulo={"PAGAMENTO POR ORDEM CRONOLOGICA"}
       subtitulo={
           <span>
             <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
               Início
             </Link>
             &nbsp;»
             <Link href="../recursos-humanos" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
               OS CONTRATOS
             </Link>
             &nbsp;» <span className="brightness-125">PAGAMENTO POR ORDEM CRONOLÓGICA</span>
           </span>
         }>
        <Pagamento />
      </ModelPage>
    </div>
  );
}