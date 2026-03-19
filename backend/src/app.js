import express from 'express';
import cors from 'cors';
import questionsRouter from './routes/questions.js';
import sessionsRouter from './routes/sessions.js';
import submitRouter from './routes/submit.js';
import resultsRouter from './routes/results.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/questions', questionsRouter);
app.use('/api/session', sessionsRouter);
app.use('/api/submit', submitRouter);
app.use('/api/results', resultsRouter);

export default app;
