'use client';

import ModelPage from "../../components/ModelPage"
import Saude from "./saude";
import Link from 'next/link';

export default function bens() {
    return (
      <div>
      <ModelPage
        titulo={"SAÚDE"}
        subtitulo={
          <span>
            <Link href="./" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125">SAÚDE</span>
          </span>
        }
        >
           <Saude />   
        </ModelPage>
      </div>
    );
  }