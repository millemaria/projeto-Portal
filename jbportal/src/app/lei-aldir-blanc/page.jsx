import Link from "next/link";
import ModelPage from "../../components/ModelPage";
import Aldirblanc from "./aldirblanc";

export default function Leialdirblanc() {
  return (
    <div>
        <ModelPage 
        titulo={"LEI ALDIR BLANC"}
        subtitulo={
            <span>
              <Link href="/" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
                Início
              </Link>
              &nbsp;» <span className="brightness-125">Lei Aldir Blanc</span>
            </span>
          }>
          <Aldirblanc />
        </ModelPage>
    </div>
    
  );
}