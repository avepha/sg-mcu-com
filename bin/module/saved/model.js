"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequalize = _interopRequireDefault(require("../../datasource/sequalize"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SavedModel extends _sequelize.Model {}

SavedModel.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: _sequelize.INTEGER
  },
  header: {
    type: _sequelize.STRING,
    allowNull: false
  },
  data: {
    type: _sequelize.JSON,
    allowNull: false
  }
}, {
  sequelize: _sequalize.default,
  modelName: 'Saves'
});
var _default = SavedModel;
exports.default = _default;