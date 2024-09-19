import Link from "next/link";
import ModelPage from "../../components/ModelPage";
import Emendas from "./emendas";

export default function Despesas() {
    return (
        <div>
            <ModelPage
                titulo={"EMENDAS PARLAMENTARES"}
                subtitulo={
                    <span>
                        <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
                            Início
                        </Link>
                        &nbsp;» <span className="brightness-125">EMENDAS PARLAMENTARES</span>
                    </span>
                }>
                <Emendas />
            </ModelPage>
        </div>

    );
}