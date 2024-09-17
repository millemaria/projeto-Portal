'use client';

import ModelPage from "../../components/ModelPage"
import Programas from "./programas";
export default function bens() {
    return (
      <div>
          <ModelPage
          titulo={"PRESTAÇÃO DE CONTAS "}
          subtitulo={"Íncio » PRESTAÇÃO DE CONTAS "}
        >
           <Programas />
        </ModelPage>
      </div>
    );
  }