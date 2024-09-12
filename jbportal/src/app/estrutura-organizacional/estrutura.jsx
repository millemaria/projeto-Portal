import Image from 'next/image';
import { FaHome } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { PiBookOpenUserBold } from "react-icons/pi";
export default function estrutura() {
    return (
        <div className="bg-white py-16 w-full flex justify-center">
            <div className="flex justify-center space-x-8">
                {/* Botão 1 */}
{/* Botão 1 */}
<div className="bg-[#002A66] text-white w-[300px] h-[200px] flex flex-col justify-center items-center shadow-lg hover:bg-white hover:text-[#002A66] group transition-all duration-500 ease-in-out">
  <FaHome className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />
  <span className="mt-4 text-[16px] font-semibold group-hover:opacity-0 transition-opacity duration-500 ease-in-out">INSTITUCIONAL</span>
  <span className="hidden group-hover:block text-[20px] font-semibold transition-opacity duration-500 ease-in-out">Frase 1</span>
</div>

{/* Botão 2 */}
<div className="bg-[#002A66] text-white w-[300px] h-[200px] flex flex-col justify-center items-center shadow-lg hover:bg-white hover:text-[#002A66] group transition-all duration-500 ease-in-out">
  <GrDocumentText className="text-5xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />
  <span className="mt-4 text-[16px] font-semibold group-hover:opacity-0 transition-opacity duration-500 ease-in-out">SECRETARIAS</span>
  <span className="hidden group-hover:block text-[20px] font-semibold transition-opacity duration-500 ease-in-out">Frase 2</span>
</div>

{/* Botão 3 */}
<div className="bg-[#002A66] text-white w-[300px] h-[200px] flex flex-col justify-center items-center shadow-lg hover:bg-white hover:text-[#002A66] group transition-all duration-500 ease-in-out">
  <PiBookOpenUserBold className="text-4xl mx-auto text-white group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />
  <span className="mt-6 text-[16px] text-center font-semibold group-hover:opacity-0 transition-opacity duration-500 ease-in-out">ADMINISTRAÇÃO INDIRETA</span>
  <span className="hidden my-[96px]  text-[22px] text-center group-hover:block  font-semibold transition-opacity duration-500 ease-in-out">Frase 3</span>
</div>


            </div>
        </div>
    );
}
