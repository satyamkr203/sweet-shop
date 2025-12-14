import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import sweetsRoutes from "./routes/sweet.js";
import authRoutes from "./routes/auth.js";
import inventoryRoutes from "./routes/inventory.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://sweet-shop-seven-blush.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};


app.use(cors(corsOptions));


app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetsRoutes);
app.use("/api/sweets", inventoryRoutes);


app.get("/check", (req, res) => res.json({ ok: true }));


app.use(errorHandler);

export default app;
