'use client';
import ModelPage from "../../../components/ModelPage"
import CentroPoliesportivo from "./centropoliesportivo";
import Link from "next/link";

export default function centropoliesportivo() {
  return (
    <div>
      <ModelPage
       titulo={"CENTRO POLIESPORTIVO COMUNITÁRIO DE BARRA DE JANGADA – CEPEC"}
       subtitulo={
           <span>
             <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125  transition-all">
               Início
             </Link>
             &nbsp;»
             <Link href="../terceiro-setor" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
               TERCEIRO
             </Link>
             &nbsp;» <span className="brightness-125">CENTRO POLIESPORTIVO COMUNITÁRIO DE BARRA DE JANGADA – CEPEC</span>
           </span>
         }>
        <CentroPoliesportivo />
      </ModelPage>
    </div>
  );
}