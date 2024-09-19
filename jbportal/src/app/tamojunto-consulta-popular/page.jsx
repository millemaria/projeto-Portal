import Link from "next/link";
import ModelPage from "../../components/ModelPage";
import Tamojunto from "./tamojunto";

export default function Despesas() {
    return (
        <div>
            <ModelPage
                titulo={"TAMOJUNTO CONSULTA POPULAR"}
                subtitulo={
                    <span>
                        <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
                            Início
                        </Link>
                        &nbsp;» <span className="brightness-125">TAMOJUNTO CONSULTA POPULAR</span>
                    </span>
                }>
                <Tamojunto />
            </ModelPage>
        </div>

    );
}