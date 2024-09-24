'use client';
import ModelPage from "../../../components/ModelPage.jsx"
import Avisolicitacao from './avisodelicitacao.jsx';
import Link from 'next/link';

export default function Avisodelicitacao() {
    return (
      <div>
      <ModelPage
        titulo={"AVISO DE LICITAÇÃO"}
        subtitulo={
          <span>
            <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125">AVISO DE LICITAÇÃO</span>
          </span>
        }
        >
          <Avisolicitacao />   
        </ModelPage>
      </div>
    );
  }