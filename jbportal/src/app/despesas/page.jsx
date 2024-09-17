import Link from "next/link";
import ModelPage from "../../components/ModelPage";
import DespesasIframe from "./despesas";

export default function Despesas() {
    return (
        <div>
            <ModelPage
                titulo={"DESPESAS"}
                subtitulo={
                    <span>
                        <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
                            Início
                        </Link>
                        &nbsp;» <span className="brightness-125">DESPESAS</span>
                    </span>
                }>
                <DespesasIframe />
            </ModelPage>
        </div>

    );
}