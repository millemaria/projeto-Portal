import Link from "next/link";
import ModelPage from "../../components/ModelPage";
import Projetosmunicipais from "./projetosmunicipais";

export default function Despesas() {
    return (
        <div>
            <ModelPage
                titulo={"PROJETOS MUNICIPAIS"}
                subtitulo={
                    <span>
                        <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
                            Início
                        </Link>
                        &nbsp;» <span className="brightness-125">PROJETOS MUNICIPAIS</span>
                    </span>
                }>
                <Projetosmunicipais />
            </ModelPage>
        </div>

    );
}