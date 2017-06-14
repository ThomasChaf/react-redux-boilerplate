require('babel-polyfill')
const { createServer } = require('http')
const fs = require('fs')
const next = require('next')
const routes = require('./routes')
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.APP_PORT || 3000
const app = next({ dev })
const handler = routes.getRequestHandler(app)

async function main() {
  await app.prepare()

  createServer(handler).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}

main()
