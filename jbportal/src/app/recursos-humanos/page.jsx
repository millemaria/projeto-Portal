'use client';
import ModelPage from "../../components/ModelPage"
import Image from 'next/image';
import RecursosHumanos from './recursos-humanos-page';
import Link from "next/link";

export default function recursosHumanos() {
  return (
    <div>
      <ModelPage
        titulo={"RECURSOS HUMANOS"}
        subtitulo={
          <span>
            <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
            </Link>
            &nbsp;» <span className="brightness-125">RECURSOS HUMANOS</span>
          </span>
        }
      >
        <RecursosHumanos />
      </ModelPage>
    </div>
  );
}