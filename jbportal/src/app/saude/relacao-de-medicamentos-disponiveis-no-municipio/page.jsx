'use client';

import ModelPage from "@/components/ModelPage";
import RelacaodeMedicamentos from "./relacaodeMedicamentos";
import Link from 'next/link';

export default function bens() {
    return (
      <div>
      <ModelPage
        titulo={"RELAÇÃO DE MEDICAMENTOS DISPONÍVEIS NO MUNICÍPIO"}
        subtitulo={
          <span>
            <Link href="./" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125">RELACÃO DE MEDICAMENTOS DISPONÍVEIS NO MUNICÍPIO</span>
          </span>
        }
        >
           <RelacaodeMedicamentos />   
        </ModelPage>
      </div>
    );
  }