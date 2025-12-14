import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import sweetsRoutes from "./routes/sweet.js";
import authRoutes from './routes/auth.js';
import inventoryRoutes from "./routes/inventory.js";
import { errorHandler } from './middleware/errorMiddleware.js';

const app = express();

// configuration for production
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:5173",
      "https://sweet-shop-seven-blush.vercel.app",
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204,
};


app.options('*', cors(corsOptions));

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/sweets', sweetsRoutes);
app.use("/api/sweets", inventoryRoutes);
// check 
app.get('/check', (req, res) => res.json({ ok: true }));

app.use(errorHandler);

export default app;
