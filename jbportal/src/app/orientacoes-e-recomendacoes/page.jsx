'use client';
import ModelPage from "../../components/ModelPage"
import Orientacoes from "./orientacoes";

export default function recursosHumanos() {
  return (
    <div>
        <ModelPage
        titulo={"ORIENTAÇÕES E RECOMENDAÇÕES"}
        subtitulo={"Início » ORIENTAÇÕES E RECOMENDAÇÕES"}
      >
      <Orientacoes /> 
      </ModelPage>
    </div>
  );
}