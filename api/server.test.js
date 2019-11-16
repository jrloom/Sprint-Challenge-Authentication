/* eslint-disable no-return-await */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable node/no-unpublished-require */
const request = require("supertest");

const server = require("./server");
const db = require("../database/dbConfig");

describe("server", function() {
  describe("POST to /api/auth/register", function() {
    beforeEach(async () => await db("users").truncate());
    test("Returns status 201 CREATED", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({ username: "user", password: "1234" });
      expect(res.status).toBe(201);
    });

    test("Returns data in JSON format", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({ username: "user", password: "1234" });
      expect(res.type).toMatch(/json/i);
    });
  });
  describe("POST to /api/auth/login", function() {
    test("Returns status 200 OK upon successful login attempt", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username: "user", password: "1234" });
      expect(res.status).toBe(200);
    });

    test("Returns status 401 UNAUTHORIZED upon unseccessful login", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username: "user", password: "4321" });
      expect(res.status).toBe(401);
    });
  });
  describe("POST & GET to /api/jokes", function() {
    test("Returns jokes upon successful login attempt", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username: "user", password: "1234" });

      const haha = await request(server)
        .get("/api/jokes")
        .set("authorization", res.body.token);

      expect(haha.body);
    });

    test("Returns status 401 UNAUTHORIZED if token not present", async () => {
      const res = await request(server).get("/api/jokes");
      expect(res.status).toBe(401);
    });
  });
});
