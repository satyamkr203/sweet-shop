import express from "express";
import { createSweet, getAllSweets, searchSweets, updateSweet, deleteSweet } from "../controllers/sweetController.js";
import { createSweetSchema, updateSweetSchema } from "../validators/sweetValidator.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// zod validation wrapper
function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ errors: result.error.errors });
    }
    req.body = result.data;
    next();
  };
}

// Public (but protected for logged-in user)
router.get("/", authMiddleware, getAllSweets);
router.get("/search", authMiddleware, searchSweets);

// Admin routes
router.post("/", authMiddleware, adminMiddleware, validate(createSweetSchema), createSweet);
router.put("/:id", authMiddleware, adminMiddleware, validate(updateSweetSchema), updateSweet);
router.delete("/:id", authMiddleware, adminMiddleware, deleteSweet);

export default router;
