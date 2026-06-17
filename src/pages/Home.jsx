import Header from "../components/Header";
import Hero from "../components/Hero";
import Programacaocard from "../components/Programacaocard";
import Top10 from "../components/Top10";
import Footer from "../components/Footer";

import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <section className="cards-home">
        <Programacaocard />
      </section>

      <Top10 />

      <Footer />
    </>
  );
}
