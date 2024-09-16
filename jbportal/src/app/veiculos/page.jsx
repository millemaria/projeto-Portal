'use client';

import ModelPage from "../../components/ModelPage"
import Veiculos from "./veiculos";


export default function bens() {
    return (
      <div>
          <ModelPage
          titulo={"VEÍCULOS"}
          subtitulo={"Íncio » VEÍCULOS"}
        >
           <Veiculos />   
        </ModelPage>
      </div>
    );
  }