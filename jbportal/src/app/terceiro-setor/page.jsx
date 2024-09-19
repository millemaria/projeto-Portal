import Link from "next/link";
import ModelPage from "../../components/ModelPage";
import TerceiroSetor from "./terceirosetor";

export default function Despesas() {
    return (
        <div>
            <ModelPage
                titulo={"TERCEIRO SETOR"}
                subtitulo={
                    <span>
                        <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
                            Início
                        </Link>
                        &nbsp;» <span className="brightness-125">TERCEIRO SETOR</span>
                    </span>
                }>
                <TerceiroSetor />
            </ModelPage>
        </div>

    );
}