export default function Pagamento() {
    return (
        <div className="flex flex-col justify-center items-center p-8">
            <iframe
            src="https://cloud.psalsis.com.br/PortalPagamentoOrdemCronologica"
            width="100%"
            height="880px"
            className="border-none"
            style={{ maxWidth: '100%', minHeight: '500px' }}
            title="Embedded Content"
            /></div>
    );
}