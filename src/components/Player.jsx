import "./../styles/player.css";

export default function Player() {
  return (
    <div className="card">
      <h2>OUÇA AO VIVO</h2>

      <audio controls>
        <source
          src="https://stream.zeno.fm/exemplo"
          type="audio/mpeg"
        />
      </audio>

      <h3>Tocando Agora</h3>

      <p>Dua Lipa</p>

      <button>Pedir Música</button>
    </div>
  );
}