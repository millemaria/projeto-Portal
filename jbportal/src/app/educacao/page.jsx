'use client';

import ModelPage from "../../components/ModelPage"
import Educacao from "./educacao";

export default function educacao() {
    return (
      <div>
          <ModelPage
          titulo={"EDUCAÇÃO"}
          subtitulo={"Início » EDUCAÇÃO"}
        >
          <Educacao />
        </ModelPage>
      </div>
    );
  }