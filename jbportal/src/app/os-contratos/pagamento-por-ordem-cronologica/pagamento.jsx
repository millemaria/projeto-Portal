export default function Pagamento() {
  return (
    <div>
        <iframe
      src="https://cloud.psalsis.com.br/PortalPagamentoOrdemCronologica"
      width="100%"
      height="800px"
      className="border-none"
      style={{ maxWidth: '100%', minHeight: '500px' }}
      title="Embedded Content"
    />
    </div>
  );
}