import "./../styles/top10.css";

export default function Top10() {
  const musicas = [
    {
      nome: "Flowers",
      artista: "Miley Cyrus",
      imagem: "http://localhost:3000/uploads/flowers.jpg",
    },
    {
      nome: "Calm Down",
      artista: "Rema",
      imagem: "http://localhost:3000/uploads/calmdown.jpg",
    },
    {
      nome: "Anti Hero",
      artista: "Taylor Swift",
      imagem: "http://localhost:3000/uploads/antihero.jpg",
    },
    {
      nome: "Creepin",
      artista: "The Weeknd",
      imagem: "http://localhost:3000/uploads/creepin.jpg",
    },
    {
      nome: "As It Was",
      artista: "Harry Styles",
      imagem: "http://localhost:3000/uploads/asitwas.jpg",
    },
  ];

  return (
    <section className="top-hits">
      <div className="container">
        <h2>🔥 TOP HITS DA SEMANA</h2>

        <div className="hits-grid">
          {musicas.map((musica, index) => (
            <div className="hit-card" key={index}>
              <span className="ranking">
                #{index + 1}
              </span>

              <img
                src={musica.imagem}
                alt={musica.nome}
              />

              <div className="info">
                <h3>{musica.nome}</h3>
                <p>{musica.artista}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}