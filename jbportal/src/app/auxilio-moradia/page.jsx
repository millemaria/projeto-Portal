'use client';

import ModelPage from "../../components/ModelPage"
import Auxilio from "./auxilio";
import Link from 'next/link';

export default function bens() {
    return (
      <div>
      <ModelPage
        titulo={"AUXÍLIO MORADIA"}
        subtitulo={
          <span>
            <Link href="./" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125">AUXÍLIO MORADIA</span>
          </span>
        }
        >
           <Auxilio />   
        </ModelPage>
      </div>
    );
  }