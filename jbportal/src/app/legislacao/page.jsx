'use client';
import ModelPage from "../../components/ModelPage"
import Legislacao from "./legislacao";
// import EstruturaOrganizacional from './estrutura';

export default function legislacao() {
  return (
    <div>
        <ModelPage
        titulo={"LEGISLAÇÃO"}
        subtitulo={"Íncio » LEGISLAÇÃO"}
      >
       <Legislacao /> 
      </ModelPage>
    </div>
  );
}