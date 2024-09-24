'use client';
import ModelPage from "../../../components/ModelPage.jsx"
import Planoanual from './planoanual.jsx';
import Link from 'next/link';

export default function planoAnual() {
    return (
      <div>
      <ModelPage
        titulo={"PLANO ANUAL DE CONTRATAÇÕES"}
        subtitulo={
          <span>
            <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125"> PLANO ANUAL DE CONTRATAÇÕES </span>
          </span>
        }
        >
          <Planoanual />   
        </ModelPage>
      </div>
    );
  }