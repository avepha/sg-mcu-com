"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _http = require("http");

var _cors = _interopRequireDefault(require("cors"));

var _serialport = require("./serialport");

var _parserReadline = _interopRequireDefault(require("@serialport/parser-readline"));

var _isJson = require("./helpers/isJson");

var _bindings = _interopRequireDefault(require("@serialport/bindings"));

var _path = _interopRequireDefault(require("path"));

var _appRootPath = _interopRequireDefault(require("app-root-path"));

var _routes = _interopRequireDefault(require("./module/routes"));

require("./module/prepareModel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

const root = _path.default.join(_path.default.resolve(_appRootPath.default.path, './build/'));

app.use(_express.default.static(root));
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());
app.use((0, _cors.default)());
const server = (0, _http.Server)(app);

const io = require('socket.io')(server);

io.on('connection', () => {
  console.log('[Info] Client is connected');
});
Object.keys(_routes.default).map(route => app.use(route, _routes.default[route]));
app.get('/info', async (req, res) => {
  if (!_serialport.serialPort || !_serialport.serialPort.isOpen) {
    return res.json({
      status: 'disconnected'
    });
  }

  res.status(200);
  return res.json({
    status: 'connected',
    data: {
      port: _serialport.serialPort.path,
      baudRate: _serialport.serialPort.baudRate
    }
  });
});
app.get('/list', async (req, res) => {
  const ports = await _bindings.default.list().then(data => data.map(({
    path
  }) => path.replace('/tty.', '/cu.')));
  res.json(ports);
});
app.post('/connect', async (req, res) => {
  const {
    port,
    baudRate
  } = req.body;

  if (_lodash.default.isNil(port) || _lodash.default.isNil(baudRate)) {
    res.status(403);
    return res.json({
      message: 'Invalid argument, required port and baudrate'
    });
  }

  try {
    const serialPort = await (0, _serialport.createSerialPort)({
      port,
      baudRate: parseInt(baudRate)
    });
    const parser = serialPort.pipe(new _parserReadline.default({
      delimiter: '\r\n'
    }));
    parser.on('data', data => {
      const isJsonData = (0, _isJson.isJson)(data);

      if (isJsonData) {
        const response = JSON.parse(data);

        if (response["method"] === "log") {
          const rData = response["data"];
          return io.emit('log', {
            meta: {
              topic: rData["topic"],
              level: rData["level"]
            },
            type: 'text',
            data: `[${new Date().toLocaleTimeString()}][${rData["level"]}][${rData["topic"]}] ${rData["message"]}`
          });
        } else {
          return io.emit('listening', {
            type: 'json',
            data: response
          });
        }
      }

      return io.emit('listening', {
        type: 'text',
        data: data
      });
    });
  } catch ({
    message
  }) {
    res.status(403);
    return res.json({
      code: 0,
      message
    });
  }

  res.status(200);
  return res.json({
    status: 'connected',
    data: {
      port,
      baudRate,
      isConnected: _serialport.serialPort.isOpen
    }
  });
});
app.post('/disconnect', async (req, res) => {
  if (!_serialport.serialPort || !_serialport.serialPort.isOpen) {
    res.status(403);
    return res.json({
      code: 3,
      message: 'no connection'
    });
  }

  _serialport.serialPort.close(e => {
    if (e) {
      res.status(403);
      return res.json({
        code: 1,
        message: e.message
      });
    }
  });

  res.status(200);
  return res.json({
    status: 'disconnected'
  });
});
app.post('/commit', async ({
  body
}, res) => {
  if (!_serialport.serialPort || !_serialport.serialPort.isOpen) {
    res.status(403);
    return res.json({
      code: 3,
      message: 'no connection'
    });
  }

  if (!body.data) {
    res.status(403);
    return res.json({
      code: 5,
      message: 'no data field'
    });
  }

  _serialport.serialPort.write(`${JSON.stringify(body.data)}\r\n`);

  res.json({
    status: 'success'
  });
});
var _default = server;
exports.default = _default;