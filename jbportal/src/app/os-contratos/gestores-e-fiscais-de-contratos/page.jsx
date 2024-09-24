'use client';
import ModelPage from "../../../components/ModelPage"
import Gestores from "./gestores";
import Link from "next/link";

export default function recursosHumanos() {
  return (
    <div>
      <ModelPage
       titulo={"GESTORES E FISCAIS DE CONTRATOS"}
       subtitulo={
           <span>
             <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
               Início
             </Link>
             &nbsp;»
             <Link href="../recursos-humanos" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
               OS CONTRATOS
             </Link>
             &nbsp;» <span className="brightness-125">GESTORES E FISCAIS DE CONTRATOS</span>
           </span>
         }>
        <Gestores />
      </ModelPage>
    </div>
  );
}