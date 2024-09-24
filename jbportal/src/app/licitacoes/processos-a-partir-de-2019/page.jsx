'use client';
import ModelPage from "../../../components/ModelPage.jsx"
import Processos2019 from './processos2019.jsx';
import Link from 'next/link';

export default function processosaPartirDe2019() {
    return (
      <div>
      <ModelPage
        titulo={"PROCESSOS À PARTIR DE 2019"}
        subtitulo={
          <span>
            <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125"> Processos à partir de 2019</span>
          </span>
        }
        >
          <Processos2019 />   
        </ModelPage>
      </div>
    );
  }