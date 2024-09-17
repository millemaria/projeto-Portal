import Link from "next/link";
import ModelPage from "../../components/ModelPage";
import ReceitasIframe from "./receitas";

export default function Receitas() {
  return (
    <div>
        <ModelPage 
        titulo={"RECEITAS"}
        subtitulo={
            <span>
              <Link href="/" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
                Início
              </Link>
              &nbsp;» <span className="brightness-125">RECEITAS</span>
            </span>
          }>
          <ReceitasIframe />
        </ModelPage>
    </div>
    
  );
}