import prisma from "../config/db.js";

export async function createSweet(req, res, next) {
  try {
    const { name, category, price, quantity } = req.body;
    const sweet = await prisma.sweet.create({
      data: {
        name,
        category,
        price,
        quantity,
        createdById: req.user.id   // admin user
      }
    });

    res.status(201).json(sweet);
  } catch (err) {
    next(err);
  }
}

export async function getAllSweets(req, res, next) {
  try {
    const sweets = await prisma.sweet.findMany();
    res.json(sweets);
  } catch (err) {
    next(err);
  }
}

export async function searchSweets(req, res, next) {
  try {
    const { name, category, minPrice, maxPrice } = req.query;

    const sweets = await prisma.sweet.findMany({
      where: {
        AND: [
          name ? { name: { contains: name, mode: "insensitive" } } : {},
          category ? { category: { equals: category } } : {},
          minPrice ? { price: { gte: Number(minPrice) } } : {},
          maxPrice ? { price: { lte: Number(maxPrice) } } : {},
        ]
      }
    });

    res.json(sweets);
  } catch (err) {
    next(err);
  }
}

export async function updateSweet(req, res, next) {
  try {
    const { id } = req.params;

    const sweet = await prisma.sweet.update({
      where: { id: Number(id) },
      data: req.body
    });

    res.json(sweet);
  } catch (err) {
    next(err);
  }
}

export async function deleteSweet(req, res, next) {
  try {
    const { id } = req.params;

    await prisma.sweet.delete({
      where: { id: Number(id) }
    });

    res.json({ message: "Sweet deleted successfully" });
  } catch (err) {
    next(err);
  }
}
