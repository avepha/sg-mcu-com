#!/usr/bin/env node
import pgk from '../package.json'
import childProc from 'child_process'
import server from './createServer'

const port = 4002

server.listen(port, '0.0.0.0', () => {
  console.log('Running version: ' + pgk.version)
  console.log(`🚀 Server ready at http://localhost:${port}`)
  if (process.platform === 'darwin' && process.env.NODE_ENV === 'production') {
    childProc.exec('open -a "Google Chrome" http://localhost:4002/', () => null)
  }
})
