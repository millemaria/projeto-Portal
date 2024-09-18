'use client';
import ModelPage from "../../../components/ModelPage"
import EstagiarioPage from "./estagiario-page";
import Link from "next/link";

export default function recursosHumanos() {
  return (
    <div>
      <ModelPage
       titulo={"ESTAGIÁRIOS"}
       subtitulo={
           <span>
             <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
               Início
             </Link>
             &nbsp;»
             <Link href="../recursos-humanos" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
               RECURSOS-HUMANOS
             </Link>
             &nbsp;» <span className="brightness-125">ESTAGIÁRIOS</span>
           </span>
         }>
        <EstagiarioPage />
      </ModelPage>
    </div>
  );
}