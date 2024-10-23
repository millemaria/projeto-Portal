import Link from "next/link";
import ModelPage from "../../components/ModelPage";
import ProjetoOrla from "./ProjetoOrla";

export default function ProjetodaOrla() {
    return (
        <div>
            <ModelPage
                titulo={"PROJETO ORLA"}
                subtitulo={
                    <span>
                        <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
                            Início
                        </Link>
                        &nbsp;» <span className="brightness-125">Projeto Orla</span>
                    </span>
                }>
                <ProjetoOrla />
            </ModelPage>
        </div>

    );
}