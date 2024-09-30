'use client';

import ModelPage from "@/components/ModelPage";
import UnidadesdeSaude from "./unidadeSaude";
import Link from 'next/link';

export default function bens() {
    return (
      <div>
      <ModelPage
        titulo={"UNIDADES DE SAÚDE"}
        subtitulo={
          <span>
            <Link href="./" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125"> UNIDADES DE SAÚDE</span>
          </span>
        }
        >
           <UnidadesdeSaude/>   
        </ModelPage>
      </div>
    );
  }