'use client';

import ModelPage from "../../components/ModelPage"
import Planejamento from "./planejamento";
export default function bens() {
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