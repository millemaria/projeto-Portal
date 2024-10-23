'use client';

import ModelPage from "../../components/ModelPage"
import Bens from "./bens";
export default function bens() {
    return (
      <div>
          <ModelPage
          titulo={"BENS PATRIMONIAIS"}
          subtitulo={"Início » BENS PATRIMONIAIS"}
        >
           <Bens />   
        </ModelPage>
      </div>
    );
  }