import React from 'react';
import localFont from 'next/font/local'
import Image from "next/image";


const Footer = () => {
  return (
    <div>
      <footer className="footer-principal">
        <div className="footer">
          <div className="footer-column1">
          <h3 className="footer-title opensanshebrewcondensed-bold">MAPA DO SITE</h3> 
            <h4 className="footer-border"></h4>
            <ul className="footer-list opensanshebrewcondensed-regular text-base">
              <li><a href="http://example.com/mapa-estrategia">A LAI</a></li>
              <li><a href="http://example.com/portal-transparencia">RECEITAS</a></li>
              <li><a href="http://example.com/estrutura-organizacional">DESPESAS</a></li>
              <li><a href="http://example.com/galeria-elogios">LICITAÇÕES</a></li>
              <li><a href="http://example.com/cidadao">RECURSOS</a></li>
              <li><a href="http://example.com/cartas-servico">PREVIDÊNCIA MUNICIPAL</a></li>
              <li><a href="http://example.com/empresa">CONTRATOS</a></li>
              <li><a href="http://example.com/servidor">TRANSFERÊNCIAS REALIZADAS</a></li>
              <li><a href="http://example.com/turista">TRANSFERÊNCIAS REALIZADAS/CONVÊNIOS</a></li>
              <li><a href="http://example.com/ppp-saude">EMENDAS PARLAMENTARES</a></li>
              <li><a href="http://example.com/mapa-escolas-municipais">TERCEIRO</a></li>
              <li><a href="http://example.com/mapa-unidades-saude">SETOR</a></li>
              <li><a href="http://example.com/mapa-bares-restaurantes">DUODÉCIMO</a></li>
              <li><a href="http://example.com/mapa-mercados-publicos">PLANEJAMENTO MUNICIPAL</a></li>
              <li><a href="http://example.com/mapa-unidades-cras-creas">PRESTAÇÃO DE CONTAS</a></li>
              <li><a href="http://example.com/mapa-unidades-cras-creas">PROGRAMAS E AÇÕES</a></li>
              <li><a href="http://example.com/mapa-unidades-cras-creas">PROJETOS MUNICIPAIS</a></li>
              <li><a href="http://example.com/mapa-unidades-cras-creas">SAÚDE</a></li>
              <li><a href="http://example.com/mapa-unidades-cras-creas">ACOMPANHAMENTO DE OBRAS</a></li>
              <li><a href="http://example.com/mapa-unidades-cras-creas">LEI PAULO GUSTAVO</a></li>
              <li><a href="http://example.com/mapa-unidades-cras-creas">LEI ALDIR BLANC</a></li>
              <li><a href="http://example.com/mapa-unidades-cras-creas">DADOS ABERTOS</a></li>
              <li><a href="http://example.com/mapa-unidades-cras-creas">LGPD</a></li>
              <li><a href="http://example.com/mapa-unidades-cras-creas">OUVIDORIA</a></li>
              <li><a href="http://example.com/mapa-unidades-cras-creas">ACESSO À INFORMAÇÃO - SIC</a></li>
            </ul>
          </div>

          <div className="footer-column2">
            <h3 className="footer-title opensanshebrewcondensed-bold">SITES RELACIONADOS</h3>
            <h4 className="footer-border"></h4>
            <ul className="footer-list opensanshebrewcondensed-regular text-base">
              <li>
                <a href="https://amorpor.jaboatao.pe.gov.br/">AMOR JABOATÃO</a>
              </li>
              <li>
                <a href="https://bemestaranimal.jaboatao.pe.gov.br/">
                  BEM ESTAR ANIMAL
                </a>
              </li>
              <li>
                <a href="https://conselhodeusuarios.jaboatao.pe.gov.br/">
                  CONSELHO DE USUÁRIOS
                </a>
              </li>
              <li>
                <a href="https://deolhonaconsulta.jaboatao.pe.gov.br/">
                  DE OLHO NA CONSULTA
                </a>
              </li>
              <li>
                <a href="http://example.com/diario-oficial">DIÁRIO OFICIAL</a>
              </li>
              <li>
                <a href="https://educacao.jaboatao.pe.gov.br/">EDUCAÇÃO</a>
              </li>
              <li>
                <a href="https://economiacriativa.jaboatao.pe.gov.br/">
                  ECONOMIA CRIATIVA
                </a>
              </li>
              <li>
                <a href="https://emlume.com.br/">EMLUME</a>
              </li>
              <li>
                <a href="https://estacaobemestar.jaboatao.pe.gov.br/">
                  ESTAÇÃO BEM ESTAR
                </a>
              </li>
              <li>
                <a href="https://jaboataoemacao.jaboatao.pe.gov.br/">
                  JABOATÃO EM AÇÃO
                </a>
              </li>
              <li>
                <a href="https://jaboataoprev.jaboatao.pe.gov.br/">JABOATAOPREV</a>
              </li>
              <li>
                <a href="https://semam.jaboatao.pe.gov.br/">MEIO AMBIENTE</a>
              </li>
              <li>
                <a href="http://example.com/oficial">OFICIAL</a>
              </li>
              <li>
                <a href="https://ouvidoria.jaboatao.pe.gov.br/">OUVIDORIA</a>
              </li>
              <li>
                <a href="https://www.tinus.com.br/csp/JABOATAO/portal/index.csp">
                  PORTAL DO CONTRIBUINTE
                </a>
              </li>
              <li>
                <a href="http://example.com/portal-transparencia">
                  PORTAL DA TRANSPARÊNCIA
                </a>
              </li>
              <li>
                <a href="https://procon.jaboatao.pe.gov.br/">PROCON</a>
              </li>
              <li>
                <a href="https://servidor.jaboatao.pe.gov.br/">SERVIDOR</a>
              </li>
              <li>
                <a href="https://trabalho.jaboatao.pe.gov.br/">TRABALHO</a>
              </li>
              <li>
                <a href="https://viver.jaboatao.pe.gov.br/">VIVER</a>
              </li>
            </ul>
          </div>

          <div className="footer-column3">
            <h3 className="footer-title opensanshebrewcondensed-bold text-xl">OUVIDORIA</h3>
            <h4 className="footer-border"></h4>
            <p className='opensanshebrewcondensed-regular text-base'>OUVIDORIA GERAL: 0800 081 8999/</p>
            <p className='opensanshebrewcondensed-regular text-base'>(81) 9.9422-5177</p>
            <p className='opensanshebrewcondensed-regular text-base'>ATENDIMENTO DE SEGUNDA A SEXTA-FEIRA, DAS 8H ÀS 14H</p>
            <p className='opensanshebrewcondensed-regular text-base'>E-MAIL: ouvidoria@jaboatao.pe.gov.br</p>

            <h3 className="footer-title opensanshebrewcondensed-bold text-xl">ACESSIBILIDADE</h3>
            <h4 className="footer-border"></h4>
            <ul className="footer-list">
              <li>
                <a href="http://example.com/informacoes" className='opensanshebrewcondensed-regular text-base'>INFORMAÇÕES</a>
              </li>
              <li>
                <a href="http://example.com/informacoes" className='opensanshebrewcondensed-regular text-base'>TECLAS DE ATALHO</a>
              </li>
            </ul>

            <h3 className="footer-title opensanshebrewcondensed-bold text-xl">NAVEGABILIDADE</h3>
            <h4 className="footer-border"></h4>

            <ul className="footer-list">
              <li>
                <a href="http://example.com/glossario" className='opensanshebrewcondensed-regular text-base'>GLOSSÁRIO</a>
              </li>
              <li>
                <a href="http://example.com/glossario" className='opensanshebrewcondensed-regular text-base'>MAPA DO SITE</a>
              </li>
            </ul>
            <h3 className="footer-title opensanshebrewcondensed-bold text-xl">ACOMPANHE-NOS</h3>
            <h4 className="footer-border"></h4>
            <div className="icones-footer space-x-4">
  <a
    href="https://twitter.com/jaboataoonline"
    className="group flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-colors duration-300 hover:bg-white"
  >
    <i className="ri-twitter-x-line text-2xl text-white transition-colors duration-300 group-hover:text-blue-900"></i>
  </a>
  <a
    href="https://www.facebook.com/PrefeituradoJaboatao"
    className="group flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-colors duration-300 hover:bg-white"
  >
    <i className="ri-facebook-circle-fill text-2xl text-white transition-colors duration-300 group-hover:text-blue-900"></i>
  </a>
  <a
    href="https://www.instagram.com/prefjaboatao/"
    className="group flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-colors duration-300 hover:bg-white"
  >
    <i className="ri-instagram-line text-2xl text-white transition-colors duration-300 group-hover:text-blue-900"></i>
  </a>
  <a
    href="https://www.youtube.com/user/prefeiturajaboatao/videos"
    className="group flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-colors duration-300 hover:bg-white"
  >
    <i className="ri-youtube-fill text-2xl text-white transition-colors duration-300 group-hover:text-blue-900"></i>
  </a>
            </div>

          </div>
        </div>

        <div className="parte-branca">
          <div className="logo-f">
            <Image
              src="/images/logofooter.png"
              alt="Logo do footer"
              width={200}
              height={100}
            />
          </div>
          <div className="details1">
            <p>
              <strong>Palácio da Batalha</strong>
              <br />
              Av. Barreto de Menezes, 1648 – Prazeres –<br />
              Jaboatão dos Guararapes – PE, CEP 54.310-310
            </p>
          </div>
          <div className="details2">
            <p>
              <strong>Complexo Administrativo</strong>
              <br />
              Estr. da Batalha, 1200 – Jardim Jordão,
              <br />
              Jaboatão dos Guararapes – PE, CEP 54315-570
            </p>
          </div>
        </div>

        <div className="credits">
          Desenvolvido por: Secretaria Executiva de Governo Digital | SEGD
        </div>
      </footer>
    </div>
  );
};

export default Footer;