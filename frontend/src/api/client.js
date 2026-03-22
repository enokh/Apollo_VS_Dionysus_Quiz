const BASE_URL = 'http://localhost:3000/api';

export async function createSession() {
  const res = await fetch(`${BASE_URL}/session`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) });
  return res.json();
}

export async function fetchQuestions() {
  const res = await fetch(`${BASE_URL}/questions`);
  return res.json();
}

export async function submitResponses(session_id, responses) {
  const res = await fetch(`${BASE_URL}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id, responses }),
  });
  return res.json();
}

export async function fetchResult(session_id) {
  const res = await fetch(`${BASE_URL}/results/${session_id}`);
  return res.json();
}
