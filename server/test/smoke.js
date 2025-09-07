import http from 'http'
import app from '../app.js'

// Start the server on a random available port
const server = http.createServer(app)

server.listen(0, '127.0.0.1', () => {
  const { port } = server.address()
  http
    .get(`http://localhost:${port}/api/ping`, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        try {
          const json = JSON.parse(data)
          if (json.ok === true && json.message === 'pong') {
            console.log('Smoke test passed')
            server.close(() => process.exit(0))
          } else {
            console.error('Smoke test failed: unexpected response')
            server.close(() => process.exit(1))
          }
        } catch {
          console.error('Smoke test failed: invalid JSON')
          server.close(() => process.exit(1))
        }
      })
    })
    .on('error', (err) => {
      console.error('Smoke test failed: request error', err)
      server.close(() => process.exit(1))
    })
})
