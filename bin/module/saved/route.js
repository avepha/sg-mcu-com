"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var provider = _interopRequireWildcard(require("./provider"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); // saved


router.get('/OK', (req, res) => {
  res.json({
    status: 'OK'
  });
});
router.post('/', async (req, res) => {
  const {
    data,
    header
  } = req.body;

  if (!data || !header) {
    res.status(403);
    return res.json({
      message: 'Invalid argument, packet or header field is required.'
    });
  }

  const result = await provider.create({
    data,
    header
  }).catch();
  res.json({
    result
  });
});
router.post('/deletes', async (req, res) => {
  const {
    id
  } = req.body;

  if (!id) {
    res.status(403);
    return res.json({
      message: 'Invalid argument, required id.'
    });
  }

  const results = await provider.deleteById(id);
  res.json({
    effect: results
  });
});
router.get('/', async (req, res) => {
  const results = await provider.getAll({
    limit: 50
  });
  res.json(results);
});
var _default = router;
exports.default = _default;