import "../styles/header.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <img
          src="/logo.png"
          alt="Top FM"
          className="logo"
        />
      </div>

      <nav>
        <a href="/">Início</a>
        <a href="/radio">A Rádio</a>
        <a href="/noticias">Notícias</a>
        <a href="/contato">Contato</a>
      </nav>

      <Link to="/ouca-ao-vivo" className="ao-vivo">
        🔴 OUÇA AO VIVO
      </Link>

      <div className="redes">
        <FaInstagram />
        <FaFacebook />
        <FaWhatsapp />
      </div>
    </header>
  );
}