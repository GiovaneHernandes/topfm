import "./../styles/hero.css";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: "url('/microfone.png')" }}
    >
      <div className="texto">
        <h1>
          A TOP QUE
          <span> TOCA </span>
          VOCÊ!
        </h1>
      </div>
    </section>
  );
}