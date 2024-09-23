'use client';
import ModelPage from "../../components/ModelPage"
import  Infracoes from './infracoes.jsx';
import Link from 'next/link';

export default function Infracoestransito() {
    return (
      <div>
      <ModelPage
        titulo={"NFRAÇÕES DE TRÂNSITO"}
        subtitulo={
          <span>
            <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125">NFRAÇÕES DE TRÂNSITO</span>
          </span>
        }
        >
          <Infracoes />   
        </ModelPage>
      </div>
    );
  }