'use client';
import ModelPage from "../../../components/ModelPage"
import Administracao from "./administracao";
import Link from "next/link";

export default function administracao() {
  return (
    <div>
      <ModelPage
       titulo={"ADMINISTRAÇÃO INDIRETA"}
       subtitulo={
           <span>
             <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125  transition-all">
               Início
             </Link>
             &nbsp;»
             <Link href="../estrutura-organizacional" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
               ESTRUTURA ORGANIZACIONAL
             </Link>
             &nbsp;» <span className="brightness-125">ADMINISTRAÇÃO INDIRETA</span>
           </span>
         }>
        <Administracao/>
      </ModelPage>
    </div>
  );
}