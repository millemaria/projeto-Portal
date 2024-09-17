'use client';

import ModelPage from "../../components/ModelPage"
import Planejamento from "./planejamento";
export default function planejamento() {
    return (
      <div>
          <ModelPage
          titulo={"PLANEJAMENTO MUNICIPAL"}
          subtitulo={"Íncio » PLANEJAMENTO MUNICIPAL"}
        >
           <Planejamento />
        </ModelPage>
      </div>
    );
  }