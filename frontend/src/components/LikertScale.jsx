const LABELS = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];

export default function LikertScale({ onSelect }) {
  return (
    <div className="likert-scale">
      {LABELS.map((label, i) => (
        <button key={i} onClick={() => onSelect(i)}>
          {label}
        </button>
      ))}
    </div>
  );
}
