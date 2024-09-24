'use client';
import ModelPage from "../../../components/ModelPage"
import Emlume from './emlume.jsx';
import Link from 'next/link';

export default function licitacoesemlume() {
    return (
      <div>
      <ModelPage
        titulo={"LICITAÇÕES EMLUME"}
        subtitulo={
          <span>
            <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125">Licitações EMLUME</span>
          </span>
        }
        >
          <Emlume />   
        </ModelPage>
      </div>
    );
  }