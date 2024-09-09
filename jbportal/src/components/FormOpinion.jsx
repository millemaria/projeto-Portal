import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';

const bebasNeue = localFont({
    src: '../utils/Bebas_Neue/BebasNeue-Regular.ttf',
    variable: '--font-bebas',
});

const openSans = localFont({
    src: '../utils/open-sans/OpenSans-Regular.ttf',
    variable: '--font-open',
  });

const faixaEtariaData = ['Até 29', '30 - 39', '40 - 49', '50 - 59', '60 ou mais'];
const regionalData = ['Regional 01', 'Regional 02', 'Regional 03', 'Regional 04', 'Regional 05', 'Regional 06', 'Regional 07'];
const pesquisaSatisfacaoData = ['Muito Satisfeito', 'Satisfeito', 'Indiferente', 'Insatisfeito', 'Muito Insatisfeito'];

const FormOpinion = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h2 className={`${bebasNeue.variable} text-center text-blue-800 text-6xl font-bebas font-semi-bold mb-16 my-10`}>
                QUAL A SUA OPINIÃO SOBRE O NOSSO PORTAL?
            </h2>

            <form>
                <div className="flex justify-between text-center space-x-8">
                    {/* Regionais */}
                    <div className="flex items-center">
                        <Image
                            src="/images/regionais-1.webp" // Caminho relativo dentro do diretório public
                            alt="Ícone de Regionais"
                            width={90} // Largura da imagem
                            height={90} // Altura da imagem
                            className='mr-4'
                        />
                        <fieldset>
                            <legend className="text-lg text-blue-800 font-semibold">Regionais *</legend>
                            <div className="mt-4 space-y-2 text-left">
                                {regionalData.map((regional) => (
                                    <label key={regional} className="block">
                                        <input
                                            type="radio"
                                            name="regionais"
                                            className="mr-2 text-blue-800 focus:ring-blue-800"
                                            required
                                        />
                                        {regional}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    </div>

                    {/* Faixa Etária */}
                    <div className="flex items-center">
                        <Image
                            src="/images/faixa-etaria.webp" // Caminho relativo dentro do diretório public
                            alt="Ícone de Faixa Etária"
                            width={90} // Largura da imagem
                            height={90} // Altura da imagem
                            className='mr-4'
                        />
                        <fieldset>
                            <legend className="text-lg text-blue-800 font-semibold">Faixa Etária *</legend>
                            <div className="mt-4 space-y-2 text-left">
                                {faixaEtariaData.map((faixa) => (
                                    <label key={faixa} className="block">
                                        <input
                                            type="radio"
                                            name="faixa-etaria"
                                            className="mr-2 text-blue-800 focus:ring-blue-800"
                                            required
                                        />
                                        {faixa}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    </div>

                    {/* Satisfação */}
                    <div className="flex items-center">
                        <Image
                            src="/images/satisfacao.webp" // Caminho relativo dentro do diretório public
                            alt="Ícone de Satisfação"
                            width={90}
                            height={90}
                            className='mr-4'
                        />
                        <fieldset>
                            <legend className={`${openSans.variable} text-lg text-blue-800 font-semibold`}>Satisfação <span className="text-red-600">*</span></legend>
                            <div className="mt-4 space-y-2 text-left">
                                {pesquisaSatisfacaoData.map((satisfaction) => (
                                    <label key={satisfaction} className={`block`}>
                                        <input
                                            type="radio"
                                            name="satisfaction"
                                            className={`${openSans.variable} mr-2 text-blue-800 focus:ring-blue-800`}
                                            required
                                        />
                                        {satisfaction}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="bg-blue-800 text-white px-6 py-2 rounded-full font-semibold">
                        ENVIAR
                    </button>
                </div>
            </form>

            <h2 className="text-center text-blue-800 text-3xl font-bebas font-bold mb-8 mt-16">
                COMO PODEMOS MELHORAR?
            </h2>

            <form>
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Seu nome"
                        className={ `${openSans.variable} border border-blue-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800`}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        className={ `${openSans.variable} border border-blue-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800`}
                    />
                    <textarea
                        placeholder="Mensagem"
                        rows="4"
                        className={ `${openSans.variable} border border-blue-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800`}
                    ></textarea>
                </div>

                <div className="text-center mt-8">
                    <button type="submit" className="bg-blue-800 text-white px-6 py-2 rounded-full font-semibold">
                        ENVIAR
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormOpinion;
