'use client';

import ModelPage from "../../components/ModelPage"
import Ppp from "./ppp";
import Link from 'next/link';

export default function ppp() {
    return (
      <div>
      <ModelPage
        titulo={"PLANO MUNICIPAL DE SANEAMENTO BÁSICO"}
        subtitulo={
          <span>
            <Link href="./" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125">PLANO MUNICIPAL DE SANEAMENTO BÁSICO</span>
          </span>
        }
        >
           <Ppp />   
        </ModelPage>
      </div>
    );
  }