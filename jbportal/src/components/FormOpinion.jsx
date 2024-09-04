import React from 'react';

import localFont from 'next/font/local';

const bebasNeue = localFont({
  src: '../utils/Bebas_Neue/BebasNeue-Regular.ttf',
  variable: '--font-bebas',
});

const FormOpinion = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className={`${bebasNeue.variable} text-center text-blue-800 text-6xl font-bebas font-semi-bold mb-16 my-10`}>
        QUAL A SUA OPINIÃO SOBRE O NOSSO PORTAL?
      </h2>
      
      <form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Regionais */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg className="h-16 w-16 text-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.32 4.68a5.5 5.5 0 00-7.78 0L3 10.22l8 8 8-8-5.68-5.54z" />
              </svg>
            </div>
            <fieldset>
              <legend className="text-lg text-blue-800 font-semibold">Regionais *</legend>
              <div className="mt-4 space-y-2">
                {['Regional 01', 'Regional 02', 'Regional 03', 'Regional 04', 'Regional 05', 'Regional 06', 'Regional 07'].map((regional) => (
                  <label key={regional} className="block">
                    <input type="radio" name="regional" className="mr-2" required />
                    {regional}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Faixa Etária */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg className="h-16 w-16 text-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A9 9 0 119.88 7.32m-.868 1.763A3.001 3.001 0 109 16.242a3.001 3.001 0 001.002-7.16" />
              </svg>
            </div>
            <fieldset>
              <legend className="text-lg text-blue-800 font-semibold">Faixa Etária *</legend>
              <div className="mt-4 space-y-2">
                {['Até 29', '30 - 39', '40 - 49', '50 - 59', '60 ou mais'].map((ageGroup) => (
                  <label key={ageGroup} className="block">
                    <input type="radio" name="ageGroup" className="mr-2" required />
                    {ageGroup}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Satisfação */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <svg className="h-16 w-16 text-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11h6m-3-4h.01M4.5 4h15a1.5 1.5 0 011.415 2.01l-6.724 11.76a1.5 1.5 0 01-2.586 0L3.085 6.01A1.5 1.5 0 014.5 4z" />
              </svg>
            </div>
            <fieldset>
              <legend className="text-lg text-blue-800 font-semibold">Satisfação *</legend>
              <div className="mt-4 space-y-2">
                {['Muito Satisfeito', 'Satisfeito', 'Indiferente', 'Insatisfeito', 'Muito Insatisfeito'].map((satisfaction) => (
                  <label key={satisfaction} className="block">
                    <input type="radio" name="satisfaction" className="mr-2" required />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <input type="text" placeholder="Seu nome" className="border border-blue-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800" />
          <input type="email" placeholder="E-mail" className="border border-blue-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800" />
          <textarea placeholder="Mensagem" rows="4" className="border border-blue-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"></textarea>
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
