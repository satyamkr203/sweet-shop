import request from "supertest";
import app from "../app.js";
import prisma from "../config/db.js";

describe("Auth API", () => {
  const testUser = {
    email: "testuser@sweetshop.com",
    password: "test1234",
    name: "Test User",
  };

  beforeAll(async () => {
    // clean up if test user already exists
    await prisma.user.deleteMany({
      where: { email: testUser.email },
    });
  });

  afterAll(async () => {
    await prisma.user.deleteMany({
      where: { email: testUser.email },
    });
    await prisma.$disconnect();
  });

  test("POST /api/auth/register should create a user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send(testUser);

    expect(res.statusCode).toBe(201);
    expect(res.body.user.email).toBe(testUser.email);
    expect(res.body.token).toBeDefined();
  });

  test("POST /api/auth/login should login user", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: testUser.email,
        password: testUser.password,
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.user.email).toBe(testUser.email);
    expect(res.body.token).toBeDefined();
  });
});
