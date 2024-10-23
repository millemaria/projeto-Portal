'use client';

import ModelPage from "../../components/ModelPage"
import Prestacao from "./prestacao";
export default function bens() {
    return (
      <div>
          <ModelPage
          titulo={"PRESTAÇÃO DE CONTAS "}
          subtitulo={"Início » PRESTAÇÃO DE CONTAS "}
        >
          <Prestacao />
        </ModelPage>
      </div>
    );
  }