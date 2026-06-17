import "./../styles/footer.css";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h2>101.3 TOP FM</h2>
          <p>
            A rádio que toca os maiores sucessos,
            informação e entretenimento 24 horas por dia.
          </p>
        </div>

        <div className="footer-col">
          <h3>Contato</h3>

          <p>
            <FaPhone /> (11) 99999-1013
          </p>

          <p>
            <FaEnvelope /> contato@topfm.com.br
          </p>

          <p>
            <FaMapMarkerAlt /> São Paulo - SP
          </p>
        </div>

        <div className="footer-col">
          <h3>Links</h3>

          <a href="/">Início</a>
          <a href="/radio">A Rádio</a>
          <a href="/noticias">Notícias</a>
          <a href="/contato">Contato</a>
        </div>

        <div className="footer-col">
          <h3>Redes Sociais</h3>

          <div className="footer-redes">
            <FaInstagram />
            <FaFacebook />
            <FaWhatsapp />
          </div>
        </div>

      </div>

      <div className="footer-copy">
        © 2026 TOP FM 101.3 - Todos os direitos reservados.
      </div>
    </footer>
  );
}