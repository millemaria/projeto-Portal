'use client';

import ModelPage from "../../components/ModelPage"
import Acompanhamento from "./acompanhamento";
import Link from 'next/link';

export default function bens() {
    return (
      <div>
      <ModelPage
        titulo={"ACOMPANHAMENTO DE OBRAS"}
        subtitulo={
          <span>
            <Link href="./" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125">ACOMPANHAMENTO DE OBRAS</span>
          </span>
        }
        >
           <Acompanhamento />   
        </ModelPage>
      </div>
    );
  }