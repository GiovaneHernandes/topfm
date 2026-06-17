import "../styles/header.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <img
        src="/logo.png"
        alt="Top FM"
        className="logo"
      />

      <nav>
        <a href="/">Início</a>
        <a href="/radio">A Rádio</a>
        <a href="/noticias">Notícias</a>
        <a href="/contato">Contato</a>
      </nav>

      <button className="ao-vivo">
        🔴 OUÇA AO VIVO
      </button>

      <div className="redes">
        <FaInstagram />
        <FaFacebook />
        <FaWhatsapp />
      </div>
    </header>
  );
}