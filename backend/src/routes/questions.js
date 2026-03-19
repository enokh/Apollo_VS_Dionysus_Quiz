import { Router } from 'express';
import db from '../db/database.js';

const router = Router();

// GET /api/questions
router.get('/', (req, res) => {
  const questions = db.prepare('SELECT * FROM questions').all();
  res.json(questions);
});

export default router;
