#!/usr/bin/env node
"use strict";

var _child_process = _interopRequireDefault(require("child_process"));

var _createServer = _interopRequireDefault(require("./createServer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = 4002;

_createServer.default.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);

  _child_process.default.exec('open -a "Google Chrome" http://localhost:4002/', () => null);
});