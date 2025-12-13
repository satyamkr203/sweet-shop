import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import sweetsRoutes from "./routes/sweet.js";
import authRoutes from './routes/auth.js';
import inventoryRoutes from "./routes/inventory.js";
import { errorHandler } from './middleware/errorMiddleware.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/sweets', sweetsRoutes);
app.use("/api/sweets", inventoryRoutes);

// health
app.get('/health', (req, res) => res.json({ ok: true }));

app.use(errorHandler);

export default app;
