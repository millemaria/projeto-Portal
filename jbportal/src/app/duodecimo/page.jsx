import Link from "next/link";
import ModelPage from "../../components/ModelPage";
import Duodecimo from "./duodecimo";

export default function Despesas() {
    return (
        <div>
            <ModelPage
                titulo={"DUODÉCIMO"}
                subtitulo={
                    <span>
                        <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
                            Início
                        </Link>
                        &nbsp;» <span className="brightness-125">DUODÉCIMO</span>
                    </span>
                }>
                <Duodecimo />
            </ModelPage>
        </div>

    );
}