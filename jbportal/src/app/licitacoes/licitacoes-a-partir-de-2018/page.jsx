'use client';
import ModelPage from "../../../components/ModelPage.jsx"
import Licitacoes2018 from './licitacoes2018.jsx';
import Link from 'next/link';

export default function Licitacoesde2018() {
    return (
      <div>
      <ModelPage
        titulo={"LICITAÇÕES ATÉ 2018"}
        subtitulo={
          <span>
            <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125">Licitações até 2018</span>
          </span>
        }
        >
          <Licitacoes2018 />   
        </ModelPage>
      </div>
    );
  }