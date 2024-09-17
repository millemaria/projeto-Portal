export default function ReceitasIframe() {
    return (
        <iframe
          src="https://cloud.psalsis.com.br/portalreceitas"
          width="100%"
          height="800px"
          className="border-none"
          style={{ maxWidth: '100%', minHeight: '500px' }}
          title="Embedded Content"
        />
    );
}