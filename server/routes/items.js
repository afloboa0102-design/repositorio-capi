import { Router } from "express";
import * as Items from "../services/items.service.js";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const data = await Items.list();
    res.json({ ok: true, data });
  } catch (e) { next(e); }
});

router.post("/", async (req, res, next) => {
  try {
    const item = await Items.create(req.body);
    res.status(201).json({ ok: true, data: item });
  } catch (e) { next(e); }
});

export default router;
