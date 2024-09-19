'use client';
import ModelPage from "../../components/ModelPage"
import Link from "next/link";
import RenunciasReceitasPage from "./renuncias-receitas-page";

export default function RenunciasReceitas() {
  return (
    <div>
      <ModelPage
       titulo={"RENÚNCIAS DE RECEITAS"}
       subtitulo={
           <span>
             <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
               Início
             </Link>
             &nbsp;» <span className="brightness-125">RENÚNCIAS DE RECEITAS</span>
           </span>
         }>
        <RenunciasReceitasPage />
      </ModelPage>
    </div>
  );
}