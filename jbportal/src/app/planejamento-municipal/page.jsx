'use client';

import ModelPage from "../../components/ModelPage"
import Planejamento from "./planejamento";
export default function planejamento() {
    return (
      <div>
          <ModelPage
          titulo={"PLANEJAMENTO MUNICIPAL"}
          subtitulo={"Início » PLANEJAMENTO MUNICIPAL"}
        >
           <Planejamento />
        </ModelPage>
      </div>
    );
  }