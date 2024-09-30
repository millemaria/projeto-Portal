export default function Acompanhamento() {
    return (
      <div>
        <iframe
          src="https://app.powerbi.com/view?r=eyJrIjoiODk0YzVkOTEtNWNiMS00ODgxLWE2NmQtYjhlZjc0MjFhODVkIiwidCI6IjBhYzQxMDk5LTc4ZmQtNGUzYS04ODY2LTQ2N2MxNzkxNGFiOCJ9"
          width="100%"
          height="800px"
          className="border-none"
          style={{ maxWidth: '100%', minHeight: '500px' }}
          title="Embedded Content"
        />
  
        <iframe
          src="https://planstransparencia.jaboatao.pe.gov.br/consulta_mapa_obras_novo/" // Substitua pela URL do segundo iframe
          width="100%"
          height="100px"
          className="border-none"
          style={{ maxWidth: '100%', minHeight: '500px' }}
          title="Embedded Content 2"
        />
      </div>
    );
  }
  