'use client';
import ModelPage from "../../../components/ModelPage"
import Instituto from "./instituto";
import Link from "next/link";

export default function centropoliesportivo() {
  return (
    <div>
      <ModelPage
        titulo={
          <>
            INSTITUTO METROPOLITANO DE PROFISSIONALIZAÇÃO,
            ARTE, CULTURA E OPORTUNIDADES<br />-IMPACTO
          </>
        }
        subtitulo={
          <span>
            <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125  transition-all">
              Início
            </Link>
            &nbsp;»
            <Link href="../terceiro-setor" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              TERCEIRO SETOR
            </Link>
            &nbsp;» <span className="brightness-125">INSTITUTO METROPOLITANO DE PROFISSIONALIZAÇÃO, ARTE, CULTURA E OPORTUNIDADES-IMPACTO</span>
          </span>
        }>
        <Instituto />
      </ModelPage>
    </div>
  );
}
