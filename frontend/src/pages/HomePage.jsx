export default function HomePage({ onStart }) {
  return (
    <div className="home-page">
      <h1>Apollo &amp; Dionysus</h1>
      <p>
        Discover whether you align with the rational order of Apollo
        or the creative passion of Dionysus.
      </p>
      <button onClick={onStart}>Start Quiz</button>
    </div>
  );
}
