import Menu from "../components/Menu";
import Footer from "../components/Footer";
import BorderTopInvertido from "@/components/BorderTopInvertido";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageSlider from "@/components/ImageSlider";
import { PiTreeStructureFill } from "react-icons/pi";
import { FaUsers, FaBalanceScale, FaScroll, FaBuilding, FaCommentsDollar, FaInfoCircle, FaTrafficLight, FaCalendarAlt, FaMoneyBill, FaCalculator, FaBookReader, FaPencilRuler, FaIdCard, FaHandsHelping, FaNewspaper, FaTree, FaFolderOpen, FaDigitalOcean, FaLock } from "react-icons/fa";
import { BsCurrencyDollar, BsCreditCard, BsFillFileEarmarkCheckFill, BsFillPersonBadgeFill, BsFillInfoCircleFill } from "react-icons/bs";
import { RiHomeHeartFill } from "react-icons/ri";
import { GrDocumentTransfer } from "react-icons/gr";
import { RiGovernmentFill } from "react-icons/ri";
import { FaHandshake, FaCity, FaHelmetSafety, FaMasksTheater, FaHeadset } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoIosAirplane } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { MdFamilyRestroom, MdLocalHospital } from "react-icons/md";
import Link from "next/link";
import BorderTop from "@/components/BorderTop";
import localFont from 'next/font/local';
import FormOpinion from "@/components/FormOpinion";
import './style/menu-home.css';
import './style/open-sans-custom.css';



const bebasNeue = localFont({
  src: '../utils/Bebas_Neue/BebasNeue-Regular.ttf',
  variable: '--font-bebas',
});

const openSans = localFont({
  src: '../utils/open-sans/OpenSans-Regular.ttf',
  variable: '--font-open',
});


const images = [
  'images/slide2.png',
  'images/slide1.png',
];

export default function Home() {
  return (
    <div>
      <Menu />
      <ImageSlider />

      <section id="institucional" className="bg-white py-12">
        <div className="container mx-auto onClick={() => handleScroll('targetSection')}">
          <h2 className={`${bebasNeue.variable} text-center text-blue-800 text-6xl font-bebas font-semi-bold mb-16 my-10`}>
            INSTITUCIONAL
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-center mb-8">
            <Link href="/estrutura-organizacional" className="text-center hover:text-blue-600">
              <PiTreeStructureFill className="text-6xl mx-auto text-blue-900" />
              <p className= "open-sans-custom">ESTRUTURA ORGANIZACIONAL</p>
            </Link>
            <Link href="/recursos-humanos" className="text-center">
              <FaUsers className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">RECURSOS HUMANOS</p>
            </Link>
            <Link href="/legislacao" className="text-center hover:text-blue-600">
              <FaBalanceScale className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">LEGISLAÇÃO</p>
            </Link>
            <Link href="/concursos-selecoes" className="text-center hover:text-blue-600">
              <FaScroll className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">CONCURSOS E SELEÇÕES</p>
            </Link>
            <Link href="/bens-patrimoniais" className="text-center hover:text-blue-600">
              <FaBuilding className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">BENS PATRIMONIAIS</p>
            </Link>
            <Link href="/previdencia-municipal" className="text-center hover:text-blue-600">
              <FaCommentsDollar className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">PREVIDÊNCIA MUNICIPAL</p>
            </Link>
            <Link href="/orientacoes-recomendacoes" className="text-center hover:text-blue-600">
              <FaInfoCircle className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">ORIENTAÇÕES E RECOMENDAÇÕES</p>
            </Link>
          </div>
        </div>
      </section>
      <BorderTop />
      {/* Receitas  */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className={`${bebasNeue.variable} text-center text-blue-800 text-6xl font-bebas font-semi-bold mb-16 my-10`}>
            RECEITAS E DESPESAS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-center mb-8">
            <Link href="/receitas" className="text-center hover:text-blue-600">
              <BsCurrencyDollar className="text-6xl mx-auto text-blue-900" />
              <p className="open-sans-custom">RECEITAS</p>
            </Link>
            <Link href="/despesas" className="text-center hover:text-blue-600">
              <BsCreditCard className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">DESPESAS</p>
            </Link>
            <Link href="/renuncias-de-receita" className="text-center hover:text-blue-600">
              <BsFillFileEarmarkCheckFill className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">RENÚNCIAS DE RECEITA</p>
            </Link>
            <Link href="/pagamento-cronologica" className="text-center hover:text-blue-600">
              <FaCalendarAlt className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">PAGAMENTO POR ORDEM CRONOLÓGICA</p>
            </Link>
            <Link href="/retencoes-impostos" className="text-center hover:text-blue-600">
              <BsFillPersonBadgeFill className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">RETENÇÕES DE IMPOSTOS</p>
            </Link>
            <Link href="/diarias-e-passagens" className="text-center hover:text-blue-600">
              <IoIosAirplane className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">DIÁRIAS E PASSAGENS</p>
            </Link>
            <Link href="/infrações-transito" className="text-center hover:text-blue-600">
              <FaTrafficLight className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">RECEITAS E DESPESAS - INFRAÇÕES DE TRÂNSITO</p>
            </Link>
          </div>
        </div>
      </section>
      <BorderTop />
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className={`${bebasNeue.variable} text-center text-blue-800 text-6xl font-bebas font-semi-bold mb-16 my-10`}>
            LICITAÇÕES E CONTRATOS
          </h2>
          <div className="flex justify-center space-x-16  mb-8">
            <Link href="/licitaçoes" className="text-center hover:text-blue-600">
              <GiTakeMyMoney className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">LICITAÇÕES</p>
            </Link>
            <Link href="/cONTRATOS" className="text-center hover:text-blue-600">
              <BsCreditCard className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">CONTRATOS</p>
            </Link>
          </div>
        </div>
      </section>
      <BorderTop />
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className={`${bebasNeue.variable} text-center text-blue-800 text-6xl font-bebas font-semi-bold mb-16 my-10`}>
            CONVÊNIOS | EMENDAS | OUTROS REPASSES
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center  mb-8">
            <Link href="/renuncias-de-receita" className="text-center hover:text-blue-600">
              <FaHandshake className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">TRANSFERÊNCIAS <br />REALIZADAS / TERMOS DE PARCERIA</p>
            </Link>
            <Link href="/pagamento-cronologica" className="text-center hover:text-blue-600">
              <GrDocumentTransfer className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">TRANSFERÊNCIAS< br /> RECEBIDAS/CONVÊNIOS</p>
            </Link>
            <Link href="/retencoes-impostos" className="text-center hover:text-blue-600">
              <RiGovernmentFill className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">EMENDAS<br /> PARLAMENTARES</p>
            </Link>
            <Link href="/diarias-e-passagens" className="text-center hover:text-blue-600">
              <TbWorld className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">TERCEIRO<br /> SETOR</p>
            </Link>
            <Link href="/infrações-transito" className="text-center hover:text-blue-600">
              <FaMoneyBill className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">DUODÉCIMO</p>
            </Link>
          </div>
        </div>
      </section>
      <BorderTop />

      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className={`${bebasNeue.variable} text-center text-blue-800 text-6xl font-bebas font-semi-bold mb-16 my-10`}>
           PLANEJAMENTO E GESTÃO FISCAL
          </h2>
          <div className="flex justify-center space-x-16  mb-8">
            <Link href="/licitaçoes" className="text-center hover:text-blue-600">
              <FaCity className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">PLANEJAMENTO MUNICPAL</p>
            </Link>
            <Link href="/cONTRATOS" className="text-center hover:text-blue-600">
              <FaCalculator className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">PRESTAÇÃO DE CONTAS</p>
            </Link>
            <Link href="/cONTRATOS" className="text-center hover:text-blue-600">
              <MdFamilyRestroom className="text-6xl mx-auto mb-1 text-blue-900" />
              <p className="open-sans-custom">PROGRAMAS E AÇÕES</p>
            </Link>
          </div>
        </div>
      </section>

      <BorderTop />
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${bebasNeue.variable} text-center text-blue-800 text-6xl font-bebas font-semi-bold mb-16 my-10`}>MAIS TRANSPARÊNCIA</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center  mb-8">
            <Link href="/projetos-municipais">
              <div>
                <FaBookReader className="text-blue-900 text-6xl mx-auto mb-2" />
                <p className="open-sans-custom">PROJETOS MUNICIPAIS</p>
              </div>
            </Link>
            <Link href="/saude">
              <div>
                <MdLocalHospital className="text-blue-900 text-6xl mx-auto mb-2" />
                <p className="open-sans-custom">SAÚDE</p>
              </div>
            </Link>
            <Link href="/educacao">
              <div>
                <FaPencilRuler className="text-blue-900 text-6xl mx-auto mb-2" />
                <p className="open-sans-custom">EDUCAÇÃO</p>
              </div>
            </Link>
            <Link href="/acompanhamento-de-obras">
              <div>
                <FaHelmetSafety className="text-blue-900 text-6xl mx-auto mb-2" />
                <p className="open-sans-custom">ACOMPANHAMENTO DE OBRAS</p>
              </div>
            </Link>
            <Link href="/conselhos-municipais">
              <div>
                <FaIdCard className="text-blue-900 text-6xl mx-auto mb-2" />
                <p className="open-sans-custom">CONSELHOS MUNICIPAIS</p>
              </div>
            </Link>
            <Link href="/ppp">
              <div>
                <FaHandsHelping className="text-blue-900 text-6xl mx-auto mb-2" />
                <p className="open-sans-custom">PPP - PARCERIAS PÚBLICO-PRIVADA</p>
              </div>
            </Link>
            <Link href="/auxilio-moradia">
              <div>
                <RiHomeHeartFill className="text-blue-900 text-6xl mx-auto mb-2" />
                <p className="open-sans-custom">AUXÍLIO MORADIA</p>
              </div>
            </Link>
            <Link href="/lei-paulo-gustavo">
              <div>
                <FaMasksTheater className="text-blue-900 text-6xl mx-auto mb-2" />
                <p className="open-sans-custom">LEI PAULO GUSTAVO</p>
              </div>
            </Link>
            <Link href="/lei-aldir-blanc">
              <div>
                <FaNewspaper className="text-blue-900 text-6xl mx-auto mb-2" />
                <p className="open-sans-custom">LEI ALDIR BLANC</p>
              </div>
            </Link>
            <Link href="/fundo-municipal-meio-ambiente">
              <div>
                <FaTree className="text-blue-900 text-6xl mx-auto mb-2" />
                <p className="open-sans-custom">FUNDO MUNICIPAL DE MEIO AMBIENTE</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <BorderTop />
        <section className="bg-white py-12">
          <div className="container mx-auto">
            <h2 className={`${bebasNeue.variable} text-center text-blue-800 text-6xl font-bebas font-semi-bold mb-16 my-10`}>
              GOVERNANÇA DE DADOS E TRANSPARÊNCIA
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  text-center  mb-8">
              <Link href="/renuncias-de-receita" className="text-center hover:text-blue-600">
                <FaFolderOpen className="text-6xl mx-auto mb-1 text-blue-900" />
                <p className="open-sans-custom">DADOS<br /> ABERTOS</p>
              </Link>
              <Link href="/pagamento-cronologica" className="text-center hover:text-blue-600">
                <FaDigitalOcean className="text-6xl mx-auto mb-1 text-blue-900" />
                <p className="open-sans-custom">GOVERNO< br />DIGITAL</p>
              </Link>
              <Link href="/retencoes-impostos" className="text-center hover:text-blue-600">
                <FaLock className="text-6xl mx-auto mb-1 text-blue-900" />
                <p className="open-sans-custom">LGPD</p>
              </Link>
              <Link href="/diarias-e-passagens" className="text-center hover:text-blue-600">
                <FaHeadset className="text-6xl mx-auto mb-1 text-blue-900" />
                <p className="open-sans-custom">OUVIDORIA</p>
              </Link>
              <Link href="/diarias-e-passagens" className="text-center hover:text-blue-600">
                <BsFillInfoCircleFill className="text-6xl mx-auto mb-1 text-blue-900" />
                <p className="open-sans-custom">ACESSO À <br /> INFORMAÇÃO - SIC</p>
              </Link>
            </div>
          </div>
        </section>
      <BorderTop />
      <FormOpinion />
      <BorderTopInvertido />
      <Footer />
    </div>
  );
}
