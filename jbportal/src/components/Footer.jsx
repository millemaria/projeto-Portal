import Image from "next/image";

const footer = () => {
  return (
    <div>
      <footer className="footer-principal">
        <div className="footer">
          <div className="footer-column1">
            <h3 className="footer-title">MAPA DO SITE</h3>
            <h4 className="footer-border"></h4>
            <ul className="footer-list">
              <li>MAPA DA ESTRATÉGIA</li>
              <li>PORTAL DA TRANSPARÊNCIA</li>
              <li>ESTRUTURA ORGANIZACIONAL</li>
              <li>GALERIA DE ELOGIOS</li>
              <li>CIDADÃO</li>
              <li>CARTAS DE SERVIÇO</li>
              <li>EMPRESA</li>
              <li>SERVIDOR</li>
              <li>TURISTA</li>
              <li>PPP-SAUDE</li>
              <li>MAPA DAS ESCOLAS MUNICIPAIS</li>
              <li>MAPA DAS UNIDADES DE SAÚDE POR REGIONAIS</li>
              <li>MAPA DOS BARES E RESTAURANTES</li>
              <li>MAPA DOS MERCADOS PÚBLICOS</li>
              <li>MAPA DAS UNIDADES DO CRAS E CREAS MUNICIPAIS</li>
            </ul>
          </div>

          <div className="footer-column2">
            <h3 className="footer-title">SITES RELACIONADOS</h3>
            <h4 className="footer-border"></h4>
            <ul className="footer-list">
              <li>AMOR JABOATÃO</li>
              <li>BEM ESTAR ANIMAL</li>
              <li>CONSELHO DE USUÁRIOS</li>
              <li>DE OLHO NA CONSULTA</li>
              <li>DIÁRIO OFICIAL</li>
              <li>EDUCAÇÃO</li>
              <li>ECONOMIA CRIATIVA</li>
              <li>EMLUME</li>
              <li>ESTAÇÃO BEM ESTAR</li>
              <li>JABOATÃO EM AÇÃO</li>
              <li>JABOATAOPREV</li>
              <li>MEIO AMBIENTE</li>
              <li>OFICIAL</li>
              <li>OUVIDORIA</li>
              <li>PORTAL DO CONTRIBUINTE</li>
              <li>PORTAL DA TRANSPARÊNCIA</li>
              <li>PROCON</li>
              <li>SERVIDOR</li>
              <li>TRABALHO</li>
              <li>VIVER</li>
            </ul>
          </div>

          <div className="footer-column3">
            <h3 className="footer-title">OUVIDORIA</h3>
            <h4 className="footer-border"></h4>
            <p>OUVIDORIA GERAL: 0800 081 8999</p>
            <p>(81) 9.9422-5177</p>
            <p>ATENDIMENTO DE SEGUNDA A SEXTA-FEIRA, DAS 8H ÀS 14H</p>
            <p>E-MAIL: ouvidoria@jaboatao.pe.gov.br</p>
            <h3 className="footer-title">ACESSIBILIDADE</h3>
            <h4 className="footer-border"></h4>
            <p>INFORMAÇÕES</p>
            <h3 className="footer-title">NAVEGABILIDADE</h3>
            <h4 className="footer-border"></h4>
            <p>GLOSSÁRIO</p>
            <h3 className="footer-title">ACOMPANHE-NOS</h3>
            <h4 className="footer-border"></h4>
            <div className="icones-footer">
              <i className="ri-twitter-x-line"></i>
              <i className="ri-facebook-circle-fill"></i>
              <i className="ri-instagram-line"></i>
              <i className="ri-youtube-fill"></i>
            </div>
          </div>
        </div>

        <div className="parte-branca">
          <div className="logo-f">
            <Image
              src="/images/logofooter.png"
              alt="Logo do footer"
              width={200}
              height={200}
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

export default footer;