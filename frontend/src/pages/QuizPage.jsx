import { useState } from 'react';
import QuestionCard from '../components/QuestionCard.jsx';
import LikertScale from '../components/LikertScale.jsx';

export default function QuizPage({ questions, onSubmit }) {
  const [current, setCurrent] = useState(0);
  const [responses, setResponses] = useState([]);

  function handleAnswer(value) {
    const updated = [...responses, { question_id: questions[current].id, value }];
    setResponses(updated);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      onSubmit(updated);
    }
  }

  const question = questions[current];

  return (
    <div className="quiz-page">
      <p>{current + 1} / {questions.length}</p>
      <QuestionCard question={question} />
      <LikertScale onSelect={handleAnswer} />
    </div>
  );
}
