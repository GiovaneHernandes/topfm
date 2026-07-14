import Header from "../components/Header";
import Player from "../components/Player";
import Footer from "../components/Footer";

import "../styles/oucaaovivo.css";

export default function OucaAoVivo() {
  return (
    <>
      <Header />

      <section className="ouca-hero">
        <h1>OUÇA AO VIVO</h1>
      </section>

      <section className="ouca-container">
        <Player />
      </section>

      <Footer />
    </>
  );
}