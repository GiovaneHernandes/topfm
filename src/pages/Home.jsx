import Header from "../components/Header";
import Hero from "../components/Hero";
import Programacaocard from "../components/Programacaocard";
import Top10 from "../components/Top10";
import Footer from "../components/Footer";

import "../styles/home.css";
import "../styles/noticiashome.css";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <section className="home-noticias">
        <div className="home-noticias-header">
          <h2>NOTÍCIAS</h2>
          <a href="/noticias">Ver todas</a>
        </div>

        <div className="home-noticias-top">
          <div className="home-noticia-destaque">
            <div className="thumb">Imagem</div>
            <div className="info">
              <span className="badge">Destaque</span>
              <h3>Título da notícia principal em destaque</h3>
              <p>
                Texto de exemplo descrevendo a notícia principal que vai
                aparecer em destaque na página inicial.
              </p>
            </div>
          </div>

          <div className="home-noticias-lateral">
            <div className="home-noticia-lateral">
              <div className="thumb">Imagem</div>
              <div className="info">
                <span className="badge">Rádio</span>
                <h3>Título da segunda notícia, mais curto</h3>
              </div>
            </div>

            <div className="home-noticia-lateral">
              <div className="thumb">Imagem</div>
              <div className="info">
                <span className="badge">Eventos</span>
                <h3>Título da terceira notícia, mais curto</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="home-noticias-grid">
          <div className="home-noticia-mini">
            <div className="thumb">Imagem</div>
            <div className="info">
              <span className="badge">Cidade</span>
              <h3>Notícia pequena número 1</h3>
            </div>
          </div>

          <div className="home-noticia-mini">
            <div className="thumb">Imagem</div>
            <div className="info">
              <span className="badge">Música</span>
              <h3>Notícia pequena número 2</h3>
            </div>
          </div>

          <div className="home-noticia-mini">
            <div className="thumb">Imagem</div>
            <div className="info">
              <span className="badge">Trânsito</span>
              <h3>Notícia pequena número 3</h3>
            </div>
          </div>

          <div className="home-noticia-mini">
            <div className="thumb">Imagem</div>
            <div className="info">
              <span className="badge">Esportes</span>
              <h3>Notícia pequena número 4</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="cards-home">
        <Programacaocard />
      </section>

      <Top10 />


      <Footer />
    </>
  );
}
