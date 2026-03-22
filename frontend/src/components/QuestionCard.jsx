export default function QuestionCard({ question }) {
  return (
    <div className="question-card">
      {question.image_url && (
        <img src={question.image_url} alt="" className="question-image" />
      )}
      <p className="question-text">{question.text}</p>
    </div>
  );
}
