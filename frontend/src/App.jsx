import { useState } from 'react';
import HomePage from './pages/HomePage.jsx';
import QuizPage from './pages/QuizPage.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import { createSession, fetchQuestions, submitResponses } from './api/client.js';

export default function App() {
  const [page, setPage] = useState('home');
  const [sessionId, setSessionId] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState(null);

  async function handleStart() {
    const session = await createSession();
    const qs = await fetchQuestions();
    setSessionId(session.session_id);
    setQuestions(qs);
    setPage('quiz');
  }

  async function handleSubmit(responses) {
    const res = await submitResponses(sessionId, responses);
    setResult(res);
    setPage('results');
  }

  function handleRetake() {
    setPage('home');
    setResult(null);
    setSessionId(null);
    setQuestions([]);
  }

  if (page === 'home') return <HomePage onStart={handleStart} />;
  if (page === 'quiz') return <QuizPage questions={questions} onSubmit={handleSubmit} />;
  if (page === 'results') return <ResultsPage result={result} onRetake={handleRetake} />;
}
