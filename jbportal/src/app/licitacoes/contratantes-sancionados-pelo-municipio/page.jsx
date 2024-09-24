'use client';
import ModelPage from "../../../components/ModelPage.jsx"
import Contratantes from './contratantes.jsx';
import Link from 'next/link';

export default function processosaPartirDe2019() {
    return (
      <div>
      <ModelPage
        titulo={"CONTRATANTES SANCIONADOS PELO MUNICIPIO"}
        subtitulo={
          <span>
            <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125">Contratantes sancionados pelo Município</span>
          </span>
        }
        >
          <Contratantes />   
        </ModelPage>
      </div>
    );
  }