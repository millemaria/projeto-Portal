export default function RelacaodeMedicamentos() {
  return (
    <div>
         <iframe
          src="https://listamedicamentos.jaboatao.pe.gov.br/consulta_tbl_medicamentos/"
          width="100%"
          height="800px"
          className="border-none"
          style={{ maxWidth: '100%', minHeight: '500px' }}
          title="Embedded Content"
        />
    </div>
  );
}