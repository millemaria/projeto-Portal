import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
;

const bebasNeue = localFont({
    src: '../utils/Bebas_Neue/BebasNeue-Regular.ttf',
    variable: '--font-bebas',
});

const openSans = localFont({
    src: '../utils/open-sans/OpenSans-Regular.ttf',
    variable: '--font-open',
});

const faixaEtariaData = ['Até 29', '30 - 39', '40 - 49', '50 - 59', '60 ou mais'];

// Aplica toUpperCase a cada elemento do array
const regionalData = ['Regional 01', 'Regional 02', 'Regional 03', 'Regional 04', 'Regional 05', 'Regional 06', 'Regional 07'].map(regional => regional.toUpperCase());

const pesquisaSatisfacaoData = ['Muito Satisfeito', 'Satisfeito', 'Indiferente', 'Insatisfeito', 'Muito Insatisfeito'].map(satisfacao => satisfacao.toUpperCase());


const FormOpinion = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            < h2 className={`${bebasNeue.variable} text-center text-blue-800 text-6xl font-bebas font-semi-bold mb-16 my-10`}>
                QUAL A SUA OPINIÃO SOBRE O NOSSO PORTAL?
            </h2>
            <form>
            <div className="flex flex-col md:flex-row justify-between text-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Regionais */}
            <div className="flex items-start w-full md:w-1/3">
                <Image
                    src="/images/regionais-1.png" 
                    alt="Ícone de Regionais"
                    width={150} // Alterado para 150
                    height={150}
                    className='mr-4'
                />
                <fieldset className="flex-1">
                <legend className="text-lg open-sans-custom-form font-semibold">Regionais <span className="text-red-600">*</span></legend>
                <div className="mt-4 open-sans-custom-input-radio text-left">
                    {regionalData.map((regional, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <input
                        type="radio"
                        name="regional"
                        className="focus:ring-blue-800 shrink-0"
                        required
                        />
                        <label className="whitespace-nowrap">{regional}</label>
                    </div>
                    ))}
                </div>
                </fieldset>

            </div>

            {/* Faixa Etária */}
            <div className="flex items-start w-full md:w-1/3">
                <Image
                    src="/images/faixa-etaria.webp"
                    alt="Ícone de Faixa Etária"
                    width={150} // Alterado para 150
                    height={150}
                    className='mr-4'
                />
                <fieldset className="flex-1">
                    <legend className="text-lg open-sans-custom-form font-semibold">Faixa Etária <span className="text-red-600">*</span></legend>
                    <div className="mt-4 space-y-2 open-sans-custom-input-radio text-left">
                        {faixaEtariaData.map((faixa, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="faixa_etaria"
                                    className="focus:ring-blue-800 shrink-0"
                                    required
                                />
                                <label className="whitespace-nowrap">{faixa}</label>
                            </div>
                        ))}
                    </div>
                </fieldset>
            </div>

            {/* Satisfação */}
            <div className="flex items-start w-full md:w-1/3">
                <Image
                    src="/images/satisfacao.webp"
                    alt="Ícone de Satisfação"
                    width={150} // Alterado para 150
                    height={150}
                    className='mr-4'
                />
                <fieldset className="flex-1">
                    <legend className="text-lg open-sans-custom-form font-semibold mr-6">Satisfação <span className="text-red-600">*</span></legend>
                    <div className="mt-4 space-y-2 open-sans-custom-input-radio text-left">
                        {pesquisaSatisfacaoData.map((satisfaction, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="satisfacao"
                                    className="focus:ring-blue-800 shrink-0"
                                    required
                                />
                                <label className="whitespace-nowrap">{satisfaction}</label>
                            </div>
                        ))}
                    </div>
                </fieldset>
            </div>
        </div>


                <div className="flex justify-center mt-16">
                    <button type="submit" className="bg-blue-600 border-2 border-white hover:bg-blue-800 hover:border-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] text-white px-6 py-2 rounded-full font-semibold">
                        ENVIAR
                    </button>
                </div>
            </form>

            <h2 className={`${bebasNeue.variable} text-center text-[#00469f] text-[55px] font-bebas font-semi-bold mb-8 mt-16`}>
            
                COMO PODEMOS MELHORAR?
            </h2>

            <form>
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Seu nome"
                        className={`${openSans.variable} border border-blue-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800`}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        className={`${openSans.variable} border border-blue-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800`}
                    />
                    <textarea
                        placeholder="Mensagem"
                        rows="4"
                        className={`${openSans.variable} border border-blue-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800`}
                    ></textarea>
                </div>

                <div className="text-center mt-8">
                    <button type="submit" className="bg-blue-600 border-2 border-white hover:bg-blue-800 hover:border-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] text-white px-6 py-2 rounded-full font-semibold">
                        ENVIAR
                    </button>
                </div>
            </form>
        </div>
        
    );
};

export default FormOpinion;
