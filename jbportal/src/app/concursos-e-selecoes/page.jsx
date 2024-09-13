'use client';
import ModelPage from "../../components/ModelPage"
import Concursos from "./concursos";
// import EstruturaOrganizacional from './estrutura';

export default function concursos() {
  return (
    <div>
        <ModelPage
        titulo={"CONCURSOS E SELEÇÕES"}
        subtitulo={"Íncio » CONCURSOS E SELEÇÕES"}
      >
        <Concursos />  
      </ModelPage>
    </div>
  );
}