import Link from "next/link";
import ModelPage from "../../components/ModelPage";
import TransferenciasRealizadas from "./transferenciasrealizadas";

export default function Despesas() {
    return (
        <div>
            <ModelPage
                titulo={"TRANSFERÊNCIAS REALIZADAS"}
                subtitulo={
                    <span>
                        <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
                            Início
                        </Link>
                        &nbsp;» <span className="brightness-125">TRANSFERÊNCIAS REALIZADAS</span>
                    </span>
                }>
                <TransferenciasRealizadas />
            </ModelPage>
        </div>

    );
}