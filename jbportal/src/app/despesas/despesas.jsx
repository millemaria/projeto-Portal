export default function DespesasIframe() {
    return (
        <iframe
          src="https://cloud.psalsis.com.br/PortalDespesas"
          width="100%"
          height="800px"
          className="border-none"
          style={{ maxWidth: '100%', minHeight: '500px' }}
          title="Embedded Content"
        />
    );
}