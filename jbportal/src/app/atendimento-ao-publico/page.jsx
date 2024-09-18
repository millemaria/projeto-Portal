'use client';

import ModelPage from "../../components/ModelPage"
import Atendimento from "./atendimento";
import Link from 'next/link';

export default function bens() {
    return (
      <div>
      <ModelPage
        titulo={"ATENDIMENTO AO PÚBLICO"}
        subtitulo={
          <span>
            <Link href="#" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125">ATENDIMENTO AO PÚBLICO</span>
          </span>
        }
        >
           <Atendimento />   
        </ModelPage>
      </div>
    );
  }