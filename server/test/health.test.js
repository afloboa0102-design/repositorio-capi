import request from "supertest";
import app from "../app.js";

describe("GET /api/ping", () => {
  it("responde pong", async () => {
    const res = await request(app).get("/api/ping");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true, message: "pong" });
  });
});
