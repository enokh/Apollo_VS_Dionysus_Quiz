CREATE TABLE IF NOT EXISTS questions (
  id TEXT PRIMARY KEY,
  text TEXT NOT NULL,
  personality TEXT NOT NULL CHECK(personality IN ('Apollonian', 'Dionysian')),
  significance INTEGER NOT NULL CHECK(significance IN (1, 2)),
  image_url TEXT
);

CREATE TABLE IF NOT EXISTS sessions (
  session_id TEXT PRIMARY KEY,
  user_id TEXT,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS responses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL,
  question_id TEXT NOT NULL,
  value INTEGER NOT NULL CHECK(value BETWEEN 1 AND 5),
  FOREIGN KEY (session_id) REFERENCES sessions(session_id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE IF NOT EXISTS results (
  session_id TEXT PRIMARY KEY,
  personality TEXT NOT NULL,
  apollonian_score INTEGER NOT NULL,
  dionysian_score INTEGER NOT NULL,
  summary TEXT NOT NULL,
  FOREIGN KEY (session_id) REFERENCES sessions(session_id)
);
