'use client';
import ModelPage from "../../components/ModelPage"
import Diarias from "./diarias.jsx";

export default function Diariaspassagens() {
  return (
    <div>
        <ModelPage
        titulo={"RETENÇÕES DE IMPOSTOS"}
        subtitulo={"Início » RETENÇÕES DE IMPOSTOS"}
      >
      <Diarias /> 
      </ModelPage>
    </div>
  );
}