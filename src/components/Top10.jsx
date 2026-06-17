import "./../styles/top10.css";

export default function Top10() {
  const musicas = [
    "Flowers",
    "Calm Down",
    "Anti Hero",
    "Creepin",
    "As It Was",
    "Flowers",
    "Calm Down",
    "Anti Hero",
    "Creepin",
    "As It Was",
  ];

  return (
    <section className="top-hits">
      <h2>TOP HITS</h2>

      <div className="top-hits-cards">
        {musicas.map((musica, index) => (
          <div className="top-hit-card" key={index}>
            <span>#{index + 1}</span>
            <h3>{musica}</h3>
            <p>Artista da música</p>
          </div>
        ))}
      </div>
    </section>
  );
}