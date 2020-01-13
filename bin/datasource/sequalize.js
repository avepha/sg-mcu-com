"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

const sequelize = new _sequelize.Sequelize({
  dialect: 'sqlite',
  storage: `${__dirname}/db.db`
});
var _default = sequelize;
exports.default = _default;