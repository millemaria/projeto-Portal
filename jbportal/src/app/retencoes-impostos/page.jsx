'use client';
import ModelPage from "../../components/ModelPage"
import Retencoes from "./retencoes.jsx";

export default function Retencoesimpostos() {
  return (
    <div>
        <ModelPage
        titulo={"RETENÇÕES DE IMPOSTOS"}
        subtitulo={"Início » RETENÇÕES DE IMPOSTOS"}
      >
      <Retencoes /> 
      </ModelPage>
    </div>
  );
}