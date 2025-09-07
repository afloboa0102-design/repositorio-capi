import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import pingRoutes from './routes/ping.js'

const app = express()

// Apply common middleware
app.use(cors())
app.use(helmet())
app.use(express.json())

// Mount API routes under the /api prefix
app.use('/api', pingRoutes)

export default app
