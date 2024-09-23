'use client';
import ModelPage from "../../components/ModelPage"
import Pagamento from "./pagamento";

export default function recursosHumanos() {
  return (
    <div>
        <ModelPage
        titulo={"PAGAMENTO POR ORDEM CRONOLÓGICA"}
        subtitulo={"Íncio » Pagamento por Ordem Cronológica"}
      >
      <Pagamento /> 
      </ModelPage>
    </div>
  );
}