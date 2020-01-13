"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareData = exports.getAll = exports.create = void 0;

var _model = _interopRequireDefault(require("./model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const create = ({
  data,
  header
}) => {
  return _model.default.create({
    createdTime: new Date(),
    updatedTime: new Date(),
    data,
    header
  });
};

exports.create = create;

const getAll = ({
  limit = 10
}) => {
  return _model.default.findAll({
    limit
  });
};

exports.getAll = getAll;

const prepareData = async () => {
  const presets = require('./data').default;

  for (let i = 0; i < presets.length; i++) {
    const {
      header,
      data
    } = presets[i];
    await create({
      data,
      header
    });
  }

  return Promise.resolve(true);
};

exports.prepareData = prepareData;