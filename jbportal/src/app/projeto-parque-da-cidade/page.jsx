import Link from "next/link";
import ModelPage from "../../components/ModelPage";
import Parquedacidade from "./parquedacidade";

export default function Parque() {
    return (
        <div>
            <ModelPage
                titulo={"PARQUE DA CIDADE"}
                subtitulo={
                    <span>
                        <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
                            Início
                        </Link>
                        &nbsp;» <span className="brightness-125">Parque da Cidade</span>
                    </span>
                }>
                <Parquedacidade />
            </ModelPage>
        </div>

    );
}