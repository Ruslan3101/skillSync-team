import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const index = express();

const config: { port: number | string; mongoUri: string } = {
  port: process.env.PORT || 4000,
  mongoUri: process.env.MONGO_URI || 'mongodb://adminUser:adminPassword@localhost:27017/skillsyncdb',
};

index.use(cors());

const startServer = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log(`Connected to MongoDB at ${config.mongoUri}`);

    index.use((req, res, next) => {
      console.log(`${req.method} ${req.url}`);
      next();
    });

    index.get('/', (req: Request, res: Response) => {
      res.send('Express + TS server');
    });

    index.listen(config.port, () => {
      console.log(`[server]: Server is running at http://localhost:${config.port}`);
    });

    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to DB');
    });

    mongoose.connection.on('error', (err) => {
      console.error('Mongoose connection error:', err);
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

void startServer();
