import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import db from '../db/database.js';

const router = Router();

// POST /api/session
router.post('/', (req, res) => {
  const session_id = uuidv4();
  const created_at = new Date().toISOString();
  const user_id = req.body.user_id ?? null;

  db.prepare('INSERT INTO sessions (session_id, user_id, created_at) VALUES (?, ?, ?)')
    .run(session_id, user_id, created_at);

  res.status(201).json({ session_id, created_at });
});

export default router;
