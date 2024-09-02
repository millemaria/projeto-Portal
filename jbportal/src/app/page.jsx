import Menu from "../components/Menu";
import Footer from "../components/Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageSlider from "@/components/ImageSlider";
import { PiTreeStructureFill } from "react-icons/pi";
import { FaUsers, FaBalanceScale, FaScroll, FaBuilding, FaCommentsDollar, FaInfoCircle, FaTrafficLight, FaCalendarAlt} from "react-icons/fa";
import { BsCurrencyDollar,  BsCreditCard, BsFillFileEarmarkCheckFill,  BsFillPersonBadgeFill} from "react-icons/bs";
import { IoIosAirplane } from "react-icons/io";
import Link from "next/link";

const images = [
  'images/slide2.png',
  'images/slide1.png',
];

export default function Home() {
  return (
    <div>
      <Menu />

      <ImageSlider />
      <section className="bg-white py-12">
  <div className="container mx-auto">
    <h2 className="text-center text-blue-800 text-3xl font-bold mb-16">
      INSTITUCIONAL
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-center">
      <Link href="/estrutura-organizacional" className="text-center hover:text-blue-600">
        <PiTreeStructureFill className="text-5xl mx-auto text-blue-900" />
        <p className="text-blue-900">ESTRUTURA ORGANIZACIONAL</p>
      </Link>
      <Link href="/recursos-humanos" className="text-center hover:text-blue-600">
        <FaUsers className="text-5xl mx-auto mb-4 text-blue-900" />
        <p className="text-blue-900">RECURSOS HUMANOS</p>
      </Link>
      <Link href="/legislacao" className="text-center hover:text-blue-600">
        <FaBalanceScale className="text-5xl mx-auto mb-4 text-blue-900" />
        <p className="text-blue-900">LEGISLAÇÃO</p>
      </Link>
      <Link href="/concursos-selecoes" className="text-center hover:text-blue-600">
        <FaScroll className="text-5xl mx-auto mb-4 text-blue-900" />
        <p className="text-blue-900">CONCURSOS E SELEÇÕES</p>
      </Link>
      <Link href="/bens-patrimoniais" className="text-center hover:text-blue-600">
        <FaBuilding className="text-5xl mx-auto mb-4 text-blue-900" />
        <p className="text-blue-900">BENS PATRIMONIAIS</p>
      </Link>
      <Link href="/previdencia-municipal" className="text-center hover:text-blue-600">
        <FaCommentsDollar className="text-5xl mx-auto mb-4 text-blue-900" />
        <p className="text-blue-900">PREVIDÊNCIA MUNICIPAL</p>
      </Link>
      <Link href="/orientacoes-recomendacoes" className="text-center hover:text-blue-600">
        <FaInfoCircle className="text-5xl mx-auto mb-4 text-blue-900" />
        <p className="text-blue-900">ORIENTAÇÕES E RECOMENDAÇÕES</p>
      </Link>
    </div>
  </div>
</section>

{/* Nova Seção */}
<section className="bg-white py-12">
  <div className="container mx-auto">
    <h2 className="text-center text-blue-800 text-3xl font-bold mb-16">
      RECEITAS E DESPESAS
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-center">
      <Link href="/receitas" className="text-center hover:text-blue-600">
        <BsCurrencyDollar className="text-5xl mx-auto text-blue-900" />
        <p className="text-blue-900">RECEITAS</p>
      </Link>
      <Link href="/despesas" className="text-center hover:text-blue-600">
        <BsCreditCard className="text-5xl mx-auto mb-4 text-blue-900" />
        <p className="text-blue-900">DESPESAS</p>
      </Link>
      <Link href="/renuncias-de-receita" className="text-center hover:text-blue-600">
        <BsFillFileEarmarkCheckFill className="text-5xl mx-auto mb-4 text-blue-900" />
        <p className="text-blue-900">RENÚNCIAS DE RECEITA</p>
      </Link>
      <Link href="/pagamento-cronologica" className="text-center hover:text-blue-600">
        <FaCalendarAlt className="text-5xl mx-auto mb-4 text-blue-900" />
        <p className="text-blue-900">PAGAMENTO POR ORDEM CRONOLÓGICA</p>
      </Link>
      <Link href="/retencoes-impostos" className="text-center hover:text-blue-600">
        <BsFillPersonBadgeFill className="text-5xl mx-auto mb-4 text-blue-900" />
        <p className="text-blue-900">RETENÇÕES DE IMPOSTOS</p>
      </Link>
      <Link href="/diarias-e-passagens" className="text-center hover:text-blue-600">
        <IoIosAirplane className="text-5xl mx-auto mb-4 text-blue-900" />
        <p className="text-blue-900">DIÁRIAS E PASSAGENS</p>
      </Link>
      <Link href="/infrações-transito" className="text-center hover:text-blue-600">
        <FaTrafficLight className="text-5xl mx-auto mb-4 text-blue-900" />
        <p className="text-blue-900">RECEITAS E DESPESAS - INFRAÇÕES DE TRÂNSITO</p>
      </Link>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}
