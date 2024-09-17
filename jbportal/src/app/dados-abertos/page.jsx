'use client';

import ModelPage from "../../components/ModelPage"
// import Bens from "./bens";
import Dados from "./dados";
export default function bens() {
    return (
      <div>
          <ModelPage
          titulo={"DADOS ABERTOS"}
          subtitulo={"Íncio » DADOS ABERTOS"}
        >
            <Dados /> 
        </ModelPage>
      </div>
    );
  }