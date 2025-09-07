import { Router } from 'express'

const router = Router()

// Simple health check endpoint
router.get('/ping', (_req, res) => {
  res.json({ ok: true, message: 'pong' })
})

export default router
