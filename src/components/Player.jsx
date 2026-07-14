import { useRef, useState } from "react";
import "./../styles/player.css";

const STREAM_URL = "https://stream.zeno.fm/yn65fsaurfhvv";

// Dados do programa atual — hoje fixos como exemplo.
// Quando o backend do cliente estiver pronto, troque este objeto
// por um fetch (ex: useEffect + fetch('/api/programa-atual')) que
// retorne { capa, programa, faixa } com base no horário vigente.
const PROGRAMA_ATUAL = {
  capa: "/logo.png",
  programa: "TOP Hits",
  faixa: "NOME PROGRAMA",
};

export default function Player() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(0.8);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio || isLoading) return;

    if (isPlaying) {
      // Pausa e descarta o buffer atual — assim, ao retomar, o
      // stream não continua de onde ficou, e sim do momento real
      // da transmissão.
      audio.pause();
      audio.src = "";
      audio.load();
      setIsPlaying(false);
      return;
    }

    setIsLoading(true);

    // Recarrega a fonte com um parâmetro único para evitar que o
    // navegador reaproveite um buffer/cache antigo do stream,
    // garantindo sincronia com o áudio ao vivo da rádio agora.
    audio.src = `${STREAM_URL}?_=${Date.now()}`;
    audio.load();

    const playPromise = audio.play();

    if (playPromise && typeof playPromise.then === "function") {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          // Reprodução interrompida ou bloqueada pelo navegador —
          // simplesmente volta ao estado pausado, sem quebrar a UI.
          setIsPlaying(false);
          setIsLoading(false);
        });
    } else {
      setIsPlaying(true);
      setIsLoading(false);
    }
  }

  function handleVolumeChange(e) {
    const value = Number(e.target.value);
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  }

  return (
    <div className="player-card">
      <div className={`player-cover ${isPlaying ? "is-playing" : ""}`}>
        <img
          src={PROGRAMA_ATUAL.capa}
          alt={PROGRAMA_ATUAL.programa}
          className={isPlaying ? "is-playing" : ""}
        />
        <div className="player-cover-overlay" />

        <span className="player-onair">
          <span className="player-onair-dot" />
          NO AR
        </span>

        <span className="player-cover-programa">{PROGRAMA_ATUAL.programa}</span>
      </div>

      <div className="player-body">
        <div className="player-now">
          <span className="player-label">Tocando agora</span>
          <p className="player-track">{PROGRAMA_ATUAL.faixa}</p>
        </div>

        <div className={`player-eq ${isPlaying ? "is-playing" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="player-controls">
          <button
            type="button"
            className={`player-playbtn ${isPlaying ? "is-playing" : ""}`}
            onClick={togglePlay}
            disabled={isLoading}
            aria-label={isPlaying ? "Pausar transmissão" : "Tocar transmissão"}
          >
            {isLoading ? (
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="player-spinner"
              >
                <circle cx="12" cy="12" r="9" strokeOpacity="0.25" />
                <path d="M21 12a9 9 0 0 0-9-9" strokeLinecap="round" />
              </svg>
            ) : isPlaying ? (
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                <rect x="5" y="4" width="5" height="16" rx="1.5" />
                <rect x="14" y="4" width="5" height="16" rx="1.5" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                <path d="M6 4.5v15l13-7.5z" />
              </svg>
            )}
          </button>

          <div className="player-volume">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M5 9v6h4l5 5V4L9 9H5z" />
            </svg>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              aria-label="Volume"
            />
          </div>
        </div>

        <button className="player-request">Pedir Música</button>
      </div>

      <audio
        ref={audioRef}
        preload="none"
        onPause={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          setIsLoading(false);
        }}
      />
    </div>
  );
}