"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); // recent


router.get('/OK', (req, res) => {
  res.json({
    status: 'OK'
  });
});
router.post('/', (req, res) => {
  res.json([]);
});
router.get('/', (req, res) => {
  res.json([]);
});
router.delete('/', (req, res) => {
  res.json([]);
});
var _default = router;
exports.default = _default;