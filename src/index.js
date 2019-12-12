#!/usr/bin/env node

import childProc from 'child_process'
import server from './createServer'

const port = 4002

server.listen(port, () => {

  console.log(`🚀 Server ready at http://localhost:${port}`)
  if (process.platform === 'darwin' && process.env.NODE_ENV === 'production') {
    childProc.exec('open -a "Google Chrome" http://localhost:4002/', () => null)
  }
})
