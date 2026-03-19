import { Router } from 'express';
import db from '../db/database.js';
import { validateSubmission } from '../middleware/validate.js';
import { computeResult } from '../scoring/engine.js';

const router = Router();

// POST /api/submit
router.post('/', validateSubmission, (req, res) => {
  const { session_id, responses } = req.body;

  const insertResponse = db.prepare(
    'INSERT INTO responses (session_id, question_id, value) VALUES (?, ?, ?)'
  );

  const insertMany = db.transaction((responses) => {
    for (const r of responses) {
      insertResponse.run(session_id, r.question_id, r.value);
    }
  });

  insertMany(responses);

  const questions = db.prepare('SELECT * FROM questions').all();
  const result = computeResult(questions, responses);

  db.prepare(
    'INSERT OR REPLACE INTO results (session_id, personality, apollonian_score, dionysian_score, summary) VALUES (?, ?, ?, ?, ?)'
  ).run(session_id, result.personality, result.scores.apollonian, result.scores.dionysian, result.summary);

  res.json({ ...result, share_url: `/results/${session_id}` });
});

export default router;
