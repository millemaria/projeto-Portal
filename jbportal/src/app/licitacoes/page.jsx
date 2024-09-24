'use client';
import ModelPage from "../../components/ModelPage"
import Licitacoes from './licitacoes.jsx';
import Link from 'next/link';

export default function licitacao() {
    return (
      <div>
      <ModelPage
        titulo={"LICITAÇÕES"}
        subtitulo={
          <span>
            <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125">Licitações</span>
          </span>
        }
        >
          <Licitacoes />   
        </ModelPage>
      </div>
    );
  }