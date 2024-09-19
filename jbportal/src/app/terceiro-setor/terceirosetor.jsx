export default function TerceiroSetor() {
    return (
      <div className="flex flex-col items-center mb-10 bg-white">
        {/* Links como botões */}
        <div className="mt-10 space-y-6 w-full flex flex-col items-center">
          <a 
            href="/terceiro-setor/centro-poliesportivo-comunitario-de-barra-de-jangada-cepec" 
            className="bg-[#10417F] border-2 border-[#fff] text-white text-center py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] max-w-xl w-full transition-all duration-300 hover:bg-white hover:text-[#10417F] hover:border-[#10417F]"
          >
            CENTRO POLIESPORTIVO COMUNITÁRIO DE BARRA DE JANGADA – CEPEC
          </a>
  
          <a 
            href="https://exemplo.com/impacto" 
            className="bg-[#10417F] border-2 border-[#fff] text-white text-center py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] max-w-xl w-full transition-all duration-300 hover:bg-white hover:text-[#10417F] hover:border-[#10417F]"
          >
            INSTITUTO METROPOLITANO DE PROFISSIONALIZAÇÃO, ARTE, CULTURA E OPORTUNIDADES – IMPACTO
          </a>
        </div>
      </div>
    );
}
