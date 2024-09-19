import Link from "next/link";
import ModelPage from "../../components/ModelPage";
import TransferenciasRecebidas from "./transferenciasrecebidas";

export default function Despesas() {
    return (
        <div>
            <ModelPage
                titulo={"TRANSFERÊNCIAS RECEBIDAS - CONVÊNIOS"}
                subtitulo={
                    <span>
                        <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
                            Início
                        </Link>
                        &nbsp;» <span className="brightness-125">TRANSFERÊNCIAS RECEBIDAS - CONVÊNIOS</span>
                    </span>
                }>
                <TransferenciasRecebidas />
            </ModelPage>
        </div>

    );
}