import { Router } from 'express';
import db from '../db/database.js';

const router = Router();

// GET /api/results/:session_id
router.get('/:session_id', (req, res) => {
  const result = db.prepare('SELECT * FROM results WHERE session_id = ?')
    .get(req.params.session_id);

  if (!result) {
    return res.status(404).json({ error: 'Result not found' });
  }

  res.json({
    personality: result.personality,
    scores: {
      apollonian: result.apollonian_score,
      dionysian: result.dionysian_score,
    },
    summary: result.summary,
    share_url: `/results/${result.session_id}`,
  });
});

export default router;
