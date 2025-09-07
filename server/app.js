import express from "express";
import cors from "cors";

import healthRouter from "./routes/health.js";
import itemsRouter from "./routes/items.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rutas (endpoint = URL que responde datos)
app.use("/api/ping", healthRouter);
app.use("/api/items", itemsRouter);

// Manejo de errores (middleware = filtro)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ ok: false, error: "Error del servidor" });
});

export default app;
