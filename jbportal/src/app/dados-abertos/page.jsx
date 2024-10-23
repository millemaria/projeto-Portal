'use client';

import ModelPage from "../../components/ModelPage"
// import Bens from "./bens";
import Dados from "./dados";
export default function bens() {
    return (
      <div>
          <ModelPage
          titulo={"DADOS ABERTOS"}
          subtitulo={"Início » DADOS ABERTOS"}
        >
            <Dados /> 
        </ModelPage>
      </div>
    );
  }