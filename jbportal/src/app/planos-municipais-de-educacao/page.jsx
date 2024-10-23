'use client';

import ModelPage from "../../components/ModelPage"
import PlanosEducacao from "./planosEducacao";

export default function educacao() {
    return (
      <div>
          <ModelPage
          titulo={"PLANOS MUNICIPAIS DE EDUCAÇÃO"}
          subtitulo={"Início » PLANOS MUNICIPAIS DE EDUCAÇÃO"}
        >
          <PlanosEducacao />
        </ModelPage>
      </div>
    );
  }