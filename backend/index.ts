import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response): void => {
  res.send('Express + TS server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
