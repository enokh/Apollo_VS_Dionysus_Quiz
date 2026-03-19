export function validateSubmission(req, res, next) {
  const { session_id, responses } = req.body;

  if (!session_id || typeof session_id !== 'string') {
    return res.status(400).json({ error: 'session_id is required' });
  }

  if (!Array.isArray(responses) || responses.length === 0) {
    return res.status(400).json({ error: 'responses must be a non-empty array' });
  }

  for (const r of responses) {
    if (!r.question_id || typeof r.question_id !== 'string') {
      return res.status(400).json({ error: 'Each response must have a question_id' });
    }
    if (typeof r.value !== 'number' || r.value < 1 || r.value > 5) {
      return res.status(400).json({ error: 'Each response value must be an integer between 1 and 5' });
    }
  }

  next();
}
