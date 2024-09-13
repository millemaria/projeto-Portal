'use client';
import ModelPage from "../../components/ModelPage"
import Image from 'next/image';
import RecursosHumanos from './recursos-humanos-page';

export default function recursosHumanos() {
  return (
    <div>
        <ModelPage
        titulo={"RECURSOS HUMANOS"}
        subtitulo={"Íncio » RECURSOS HUMANOS"}
      >
      <RecursosHumanos />
      </ModelPage>
    </div>
  );
}