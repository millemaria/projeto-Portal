'use client';
import ModelPage from "../../../components/ModelPage"
import Link from "next/link";
import TerceirizadoPage from "./terceirizado-page";

export default function Terceirizado() {
  return (
    <div>
      <ModelPage
       titulo={"TERCEIRIZADOS"}
       subtitulo={
           <span>
             <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
               Início
             </Link>
             &nbsp;»
             <Link href="../recursos-humanos" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
               RECURSOS-HUMANOS
             </Link>
             &nbsp;» <span className="brightness-125">TERCEIRIZADOS</span>
           </span>
         }>
        <TerceirizadoPage />
      </ModelPage>
    </div>
  );
}