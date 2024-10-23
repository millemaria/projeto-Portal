'use client';

import ModelPage from "../../components/ModelPage"
import TransporteEscolar from "./transporteescolar";

export default function educacao() {
    return (
      <div>
          <ModelPage
          titulo={"TRANSPORTE ESCOLAR"}
          subtitulo={"Início » TRANSPORTE ESCOLAR"}
        >
          <TransporteEscolar />
        </ModelPage>
      </div>
    );
  }