'use client';
import ModelPage from "../../components/ModelPage"
import EstruturaOrganizacional from './estrutura';
import Link from 'next/link';

export default function estrutura() {
  return (
    <div>
  <ModelPage
    titulo={"ESTRUTURA ORGANIZACIONAL"}
    subtitulo={
      <span>
        <Link href="/" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
          Início
        </Link>
        &nbsp;» <span className="brightness-125">ESTRUTURA ORGANIZACIONAL</span>
      </span>
    }
  >
    <EstruturaOrganizacional />
  </ModelPage>
</div>
  );
}