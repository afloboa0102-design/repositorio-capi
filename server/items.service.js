// Simulación en memoria (luego puedes cambiarlo por base de datos)
const DB = [];

export async function list() {
  return DB;
}

export async function create(payload) {
  const id = (globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2));
  const item = {
    id,
    name: payload?.name ?? "sin-nombre",
    qty: Number(payload?.qty ?? 0),
    createdAt: new Date().toISOString()
  };
  DB.push(item);
  return item;
}
