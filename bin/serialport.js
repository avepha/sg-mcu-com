"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSerialPort = exports.serialPort = void 0;

var _serialport = _interopRequireDefault(require("serialport"));

var _bindingMock = _interopRequireDefault(require("@serialport/binding-mock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.MOCK) {
  _serialport.default.Binding = _bindingMock.default;

  _bindingMock.default.createPort('/dev/ROBOT', {
    echo: true,
    record: true
  });

  console.log('[Info] Mock binding: Activated!');
  console.log('[Info] /dev/ROBOT is activated');
}

let serialPort = undefined;
exports.serialPort = serialPort;

const createSerialPort = async ({
  port,
  baudRate = 115200
}) => {
  return new Promise((resolve, reject) => {
    const temp = new _serialport.default(port, {
      baudRate,
      autoOpen: true
    });
    temp.on('error', e => {
      reject(e);
    });
    temp.on('open', () => {
      exports.serialPort = serialPort = temp;
      resolve(serialPort);
    });
  });
};

exports.createSerialPort = createSerialPort;