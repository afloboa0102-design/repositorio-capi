import request from "supertest";
import app from "../app.js";

describe("Items API", () => {
  it("crea y lista items", async () => {
    const create = await request(app)
      .post("/api/items")
      .send({ name: "Lapicero", qty: 3 });
    expect(create.statusCode).toBe(201);
    expect(create.body.ok).toBe(true);

    const list = await request(app).get("/api/items");
    expect(list.statusCode).toBe(200);
    expect(Array.isArray(list.body.data)).toBe(true);
    expect(list.body.data.length).toBeGreaterThan(0);
  });
});
