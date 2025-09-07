import 'dotenv/config'
import app from './app.js'

// Use the PORT from the environment or fall back to 3001
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
