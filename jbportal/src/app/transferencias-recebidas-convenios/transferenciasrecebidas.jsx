export default function TransferenciasRecebidas() {
  return (
    <div
      className="flex flex-col justify-center items-center p-8"
      style={{
        background: 'radial-gradient(circle, #42CED6, #003476)',
      }}
    >
      <iframe
        src="https://cloud.psalsis.com.br/PortalTransferenciaUniaoEstado"
        width="75%"
        height="800px"
        className="border-none"
        style={{ maxWidth: '100%', minHeight: '500px' }}
        title="Embedded Content"
      />
      <a
        href="https://discricionarias.transferegov.sistema.gov.br/voluntarias/Principal/Principal.do?Usr=guest&amp;Pwd=guest"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-lg mt-4 underline font-bold"
      >
        Clique aqui para acessar o SICONV
      </a>
    </div>
  );
}
