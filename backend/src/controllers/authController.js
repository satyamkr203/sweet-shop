import bcrypt from "bcrypt";
import prisma from "../config/db.js";
import { sign } from "../utils/jwt.js";

export async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, password: hashed, name }
    });

    const token = sign(user);

    res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role     // adding here
      },
      token
    });
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = sign(user);

    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role      // adding here 
      },
      token
    });
  } catch (err) {
    next(err);
  }
}
