import prisma from "../config/db.js";

/**
 * USER / ADMIN
 * Purchase sweet -> decrease quantity
 */
export async function purchaseSweet(req, res, next) {
  try {
    const sweetId = Number(req.params.id);
    const { quantity } = req.body;

    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: "Quantity must be greater than 0" });
    }

    const sweet = await prisma.sweet.findUnique({
      where: { id: sweetId }
    });

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    if (sweet.quantity < quantity) {
      return res.status(400).json({ message: "Not enough stock available" });
    }

    const updatedSweet = await prisma.sweet.update({
      where: { id: sweetId },
      data: {
        quantity: sweet.quantity - quantity
      }
    });

    res.json({
      message: "Purchase successful",
      remainingQuantity: updatedSweet.quantity
    });
  } catch (err) {
    next(err);
  }
}

/**
 * ADMIN ONLY
 * Restock sweet -> increase quantity
 */
export async function restockSweet(req, res, next) {
  try {
    const sweetId = Number(req.params.id);
    const { quantity } = req.body;

    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: "Quantity must be greater than 0" });
    }

    const sweet = await prisma.sweet.findUnique({
      where: { id: sweetId }
    });

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    const updatedSweet = await prisma.sweet.update({
      where: { id: sweetId },
      data: {
        quantity: sweet.quantity + quantity
      }
    });

    res.json({
      message: "Restock successful",
      newQuantity: updatedSweet.quantity
    });
  } catch (err) {
    next(err);
  }
}
