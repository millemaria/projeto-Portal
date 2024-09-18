'use client';

import ModelPage from "../../components/ModelPage"
import Lai from "./lai";
import Link from 'next/link';

export default function bens() {
    return (
      <div>
      <ModelPage
        titulo={"APRESENTAÇÃO - LAI"}
        subtitulo={
          <span>
            <Link href="#" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125">APRESENTAÇÃO - LAI</span>
          </span>
        }
        >
           <Lai />   
        </ModelPage>
      </div>
    );
  }