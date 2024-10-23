'use client';

import ModelPage from "../../components/ModelPage"
import Programas from "./programas";
export default function bens() {
    return (
      <div>
          <ModelPage
          titulo={"PROGRAMAS E ACÕES"}
          subtitulo={"Íncio » PROGRAMAS E ACÕES"}
        >
          <Programas />
        </ModelPage>
      </div>
    );
  }