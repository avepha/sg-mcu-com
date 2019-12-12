#!/usr/bin/env node

import server from './createServer'
const port = 4002

server.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`)
})
