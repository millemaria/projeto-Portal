export default function EstagiarioPage() {
    return (
        <>
            <p className="mt-8 mb-4 mx-auto font-bold text-[18px] max-w-[90%] text-center leading-relaxed" style={{ fontFamily: 'Roboto' }}>
                Obs: Em virtude da mudança da prestadora de serviço que administra os contratos dos estagiários, não foi possível incluir informações <br />
                referentes às datas de início e término dos estágios ocorridos no período de 2020-2022.
            </p>

            <iframe
                src="https://planstransparencia.jaboatao.pe.gov.br/consulta_estagiarios"
                width="100%"
                height="800px"
                className="border-none"
                style={{ maxWidth: '100%', minHeight: '500px' }}
                title="Embedded Content"
            />

            <p className="mt-8 mb-4 mx-auto font-bold text-[18px] max-w-[90%] text-left leading-relaxed" style={{ color: '#377BB5', fontFamily: 'Roboto' }}>
                Os dados acima são atualizados mensalmente.
            </p>
        </>
    );
}
