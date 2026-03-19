import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new Database(join(__dirname, 'data/quiz.db'));

// Create table if it doesn't exist yet
db.exec(`
  CREATE TABLE IF NOT EXISTS questions (
    id TEXT PRIMARY KEY,
    text TEXT NOT NULL,
    personality TEXT NOT NULL CHECK(personality IN ('Apollonian', 'Dionysian')),
    significance INTEGER NOT NULL CHECK(significance IN (1, 2)),
    image_url TEXT
  );
`);

const questions = [
  {
    id: 'q1',
    text: 'I see dance as an important form of personal expression.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q2',
    text: 'I believe music is the highest form of art.',
    personality: 'Apollonian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q3',
    text: 'My creativity is driven by my everyday passions.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q4',
    text: 'I believe that nature has an underlying order at its most fundamental level.',
    personality: 'Apollonian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q5',
    text: 'I enjoy shaping and controlling my immediate surroundings.',
    personality: 'Apollonian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q6',
    text: 'I would feel comfortable falling asleep in a forest without a tent.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q7',
    text: 'Self-reflection is a regular part of my daily life.',
    personality: 'Apollonian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q8',
    text: 'I find it easy to adopt new roles or identities.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q9',
    text: 'I can quickly form accurate impressions of people upon meeting them.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q10',
    text: 'I find it easy to stick to routines.',
    personality: 'Apollonian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q11',
    text: 'I prefer fall over summer.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q12',
    text: 'I often lose track of time when doing something I love.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q13',
    text: 'Thanksgiving is one of my favourite holidays.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q14',
    text: 'I try to live according to a consistent internal moral standard.',
    personality: 'Apollonian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q15',
    text: 'I tend to act quickly and decisively.',
    personality: 'Apollonian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q16',
    text: 'I often imagine events in advance before attending them.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q17',
    text: 'In visual art, I value shape more than color.',
    personality: 'Apollonian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q18',
    text: 'I prefer a crowded cinema over an empty one.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q19',
    text: 'A few key moments have strongly shaped who I am today.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q20',
    text: 'If visiting Italy, I would prefer the countryside over a major city like Rome.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q21',
    text: 'Poetry is best experienced when performed aloud.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q22',
    text: 'I seek guidance from a mentor when making important decisions.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q23',
    text: 'Some ideas are only accessible to a select few people.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q24',
    text: 'I maintain personal rituals in my daily life.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q25',
    text: 'I can imagine a raven representing my spirit or personality.',
    personality: 'Apollonian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q26',
    text: 'I rarely drink to excess.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q27',
    text: 'I adapt easily to sudden changes in my life.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q28',
    text: 'I believe there are objective moral truths.',
    personality: 'Apollonian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
  {
    id: 'q29',
    text: 'You cannot be good at everything, therefore you should find one thing you are good at.',
    personality: 'Dionysian',
    significance: 1,
    image_url: '/images/placeholder.jpg',
  },
];

const insert = db.prepare(`
  INSERT OR REPLACE INTO questions (id, text, personality, significance, image_url)
  VALUES (@id, @text, @personality, @significance, @image_url)
`);

const seedAll = db.transaction((questions) => {
  for (const q of questions) insert.run(q);
});

seedAll(questions);

console.log(`Seeded ${questions.length} questions.`);
db.close();
