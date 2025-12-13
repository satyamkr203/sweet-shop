import express from "express";
import { purchaseSweet, restockSweet } from "../controllers/inventoryController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// USER / ADMIN
router.post("/:id/purchase", authMiddleware, purchaseSweet);

// ADMIN ONLY
router.post("/:id/restock", authMiddleware, adminMiddleware, restockSweet);

export default router;
