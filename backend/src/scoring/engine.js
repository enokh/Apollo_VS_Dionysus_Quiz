// questions: array of { id, personality, significance }
// responses: array of { question_id, value }
// returns: { personality, scores: { apollonian, dionysian }, summary }
export function computeResult(questions, responses) {
  const responseMap = Object.fromEntries(responses.map(r => [r.question_id, r.value]));

  const apolloQuestions = questions.filter(q => q.personality === 'Apollonian');
  const dionysusQuestions = questions.filter(q => q.personality === 'Dionysian');

  const apolloSum = apolloQuestions.reduce((sum, q) => sum + (responseMap[q.id] ?? 0), 0);
  const dionysusSum = dionysusQuestions.reduce((sum, q) => sum + (responseMap[q.id] ?? 0), 0);

  const apolloMax = apolloQuestions.length * 4;
  const dionysusMax = dionysusQuestions.length * 4;

  const apolloNorm = apolloMax > 0 ? apolloSum / apolloMax : 0;
  const dionysusNorm = dionysusMax > 0 ? dionysusSum / dionysusMax : 0;

  const total = apolloNorm + dionysusNorm;
  const apollonian = total > 0 ? Math.round((apolloNorm / total) * 100) : 50;
  const dionysian = 100 - apollonian;

  const personality = apollonian >= dionysian ? 'Apollonian' : 'Dionysian';

  return {
    personality,
    scores: { apollonian, dionysian },
    summary: `You scored ${apollonian}% Apollonian and ${dionysian}% Dionysian.`,
  };
}
