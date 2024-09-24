'use client';
import ModelPage from "../../../components/ModelPage"
import Consulta from "./consulta";
import Link from "next/link";

export default function recursosHumanos() {
  return (
    <div>
      <ModelPage
       titulo={"CONSULTA CONTRATOS"}
       subtitulo={
           <span>
             <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
               Início
             </Link>
             &nbsp;»
             <Link href="../recursos-humanos" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
               OS CONTRATOS
             </Link>
             &nbsp;» <span className="brightness-125">CONSULTA CONTRATOS</span>
           </span>
         }>
        <Consulta />
      </ModelPage>
    </div>
  );
}