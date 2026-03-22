export default function ResultsPage({ result, onRetake }) {
  const shareUrl = `${window.location.origin}${result.share_url}`;
  const { apollonian, dionysian } = result.scores;

  return (
    <div className="results-page">
      <h2>{result.personality}</h2>
      <p>{result.summary}</p>

      <div className="scale-bar">
        <div
          className="scale-apollo"
          style={{ width: `${apollonian}%` }}
        />
        <div
          className="scale-dionysus"
          style={{ width: `${dionysian}%` }}
        />
      </div>

      <div className="scale-labels">
        <span className="label-apollo">{apollonian}% Apollo</span>
        <span className="label-dionysus">{dionysian}% Dionysus</span>
      </div>

      <div className="results-actions">
        <button onClick={() => navigator.clipboard.writeText(shareUrl)}>Copy Share Link</button>
        <button onClick={onRetake}>Retake Quiz</button>
      </div>
    </div>
  );
}
