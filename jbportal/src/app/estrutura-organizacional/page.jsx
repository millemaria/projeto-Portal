'use client';
import ModelPage from "../../components/ModelPage"
import Image from 'next/image';
import EstruturaOrganizacional from './estrutura';

export default function estrutura() {
  return (
    <div>
        <ModelPage
        titulo={"ESTRUTURA ORGANIZACIONAL"}
        subtitulo={"Íncio » ESTRUTURA ORGANIZACIONAL"}
      >
      <EstruturaOrganizacional />
      </ModelPage>
    </div>
  );
}