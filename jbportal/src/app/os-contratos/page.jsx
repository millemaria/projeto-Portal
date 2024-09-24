'use client';

import ModelPage from "../../components/ModelPage"
import Contratos from "./contratos";
import Link from 'next/link';

export default function Plano() {
    return (
      <div>
      <ModelPage
        titulo={"OS CONTRATOS"}
        subtitulo={
          <span>
            <Link href="./" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125">OS CONTRATOS</span>
          </span>
        }
        >
           <Contratos />   
        </ModelPage>
      </div>
    );
  }