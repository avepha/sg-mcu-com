import _ from 'lodash'
import express from 'express'
import bodyParser from 'body-parser'
import {Server} from 'http'
import cors from 'cors'
import {createSerialPort, serialPort} from './serialport'
import Readline from '@serialport/parser-readline'
import {isJson} from './helpers/isJson'
import bindings from '@serialport/bindings'
import path from 'path'
import rootPath from 'app-root-path'
import routes from './module/routes'
import './module/prepareModel'

const app = express()
const root = path.join(path.resolve(rootPath.path, './build/'))
app.use(express.static(root))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

const server = Server(app)
const io = require('socket.io')(server)

io.on('connection', () => {
  console.log('[Info] Client is connected')
})

Object.keys(routes).map((route) => app.use(route, routes[route]))

app.get('/info', async (req, res) => {
  if (!serialPort || !serialPort.isOpen) {
    return res.json({
      status: 'disconnected'
    })
  }

  res.status(200)
  return res.json({
    status: 'connected',
    data: {
      port: serialPort.path,
      baudRate: serialPort.baudRate
    }
  })
})

app.get('/list', async (req, res) => {
  const ports = await bindings.list().then((data) => data.map(({path}) => path.replace('/tty.', '/cu.')))
  res.json(ports)
})

app.post('/connect', async (req, res) => {
  const {port, baudRate} = req.body
  if (_.isNil(port) || _.isNil(baudRate)) {
    res.status(403)
    return res.json({
      message: 'Invalid argument, required port and baudrate'
    })
  }

  try {
    const serialPort = await createSerialPort({
      port,
      baudRate: parseInt(baudRate),
    })

    const parser = serialPort.pipe(new Readline({delimiter: '\r\n'}))
    parser.on('data', (data) => {
      const isJsonData = isJson(data)
      if (isJsonData) {
        const response = JSON.parse(data)
        if (response["method"] === "log") {
          const rData = response["data"]
          return io.emit('log', {
            meta: {
              topic: rData["topic"],
              level: rData["level"],
            },
            type: 'text',
            data: `[${new Date().toLocaleTimeString()}][${rData["level"]}][${rData["topic"]}] ${rData["message"]}`
          })
        }
        else if (response["method"] === 'notification') {
          const notifications = response["data"]
          return notifications.map((noti) => {
            return io.emit('log', {
              meta: {
                topic: 'notification',
                level: 'trace',
              },
              type: 'text',
              data: `[${new Date().toLocaleTimeString()}][noti-${noti["id"]}][${noti["type"]}] ${JSON.stringify(noti["data"])}`
            })
          })
        }
        else {
          return io.emit('listening', {type: 'json', data: response})
        }
      }

      return io.emit('listening', {
        type: 'text',
        data: data
      })
    })

  } catch ({message}) {
    res.status(403)
    return res.json({
      code: 0,
      message,
    })
  }


  res.status(200)
  return res.json({
    status: 'connected',
    data: {
      port,
      baudRate,
      isConnected: serialPort.isOpen
    }
  })
})

app.post('/disconnect', async (req, res) => {
  if (!serialPort || !serialPort.isOpen) {
    res.status(403)
    return res.json({
      code: 3,
      message: 'no connection'
    })
  }

  serialPort.close((e) => {
    if (e) {
      res.status(403)
      return res.json({
        code: 1,
        message: e.message
      })
    }
  })

  res.status(200)
  return res.json({
    status: 'disconnected'
  })
})

app.post('/commit', async ({body}, res) => {
  if (!serialPort || !serialPort.isOpen) {
    res.status(403)
    return res.json({
      code: 3,
      message: 'no connection'
    })
  }

  if (!body.data) {
    res.status(403)
    return res.json({
      code: 5,
      message: 'no data field'
    })
  }

  serialPort.write(`${JSON.stringify(body.data)}\r\n`)

  res.json({
    status: 'success'
  })
})

export default server
