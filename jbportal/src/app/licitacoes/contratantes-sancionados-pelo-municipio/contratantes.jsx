export default function Processos() {
    return (
      <div className="flex flex-col justify-center items-center bg-[#a7c8fd] p-12">
  
      <h1 className="bg-[#003476] text-white font-bold py-3 px-10 rounded-xl border-2 border-white mb-10">NÃO FOI SANCIONADO NENHUM CONTRATANTE EM 2024!</h1>

      <iframe
          src="https://planstransparencia.jaboatao.pe.gov.br/consulta_contratantes"
          width="100%"
          height="700px"
          className="border-none"
          style={{ maxWidth: '100%', minHeight: '500px' }}
          title="Embedded Content"
        />

      </div>
    );
  }
  