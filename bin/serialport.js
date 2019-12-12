"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSerialPort = exports.serialPort = void 0;

var _serialport = _interopRequireDefault(require("serialport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import MockBinding from '@serialport/binding-mock'
//SerialPort.Binding = MockBinding
//MockBinding.createPort('/dev/ROBOT', { echo: true, record: true })
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