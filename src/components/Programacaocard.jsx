import "./../styles/programacaocard.css";

export default function Programacaocard() {
  const programas = [
    {
      nome: "Manhã Top",
      horario: "06:00",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTmqzFhLEZr_cWLgZQIx0g7rbeOIOHfyQTw&s",
    },
    {
      nome: "Tarde Hits",
      horario: "10:00",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTmqzFhLEZr_cWLgZQIx0g7rbeOIOHfyQTw&s",
    },
    {
      nome: "Top Drive",
      horario: "14:00",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-qaHUkZbYyu4XgfurJ6PNBDbIuDiNwI3XA&s",
    },
    {
      nome: "Top Night",
      horario: "18:00",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuwN_tPBDBLHjrhISMojcLs8i5zUJD9bLbYQ&s",
    },
    {
      nome: "Love Songs",
      horario: "22:00",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDo1aPPg79kXrthu2uCRtkOmmcHNOKMCDoTQ&s",
    },
  ];

  return (
    <section className="programacao-section">
      <h2 className="titulo_programacao">PROGRAMAÇÃO</h2>

      <div className="programacao-carrossel">
        {programas.map((programa, index) => (
          <div className="programa-card" key={index}>
            <img
              src={programa.imagem}
              alt={programa.nome}
            />

            <div className="info">
              <span>{programa.horario}</span>
              <h3>{programa.nome}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}