"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _pestController = _interopRequireDefault(require("../controllers/pestController"));

var _loginController = _interopRequireDefault(require("../controllers/loginController"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

// import cache from '../utils/cache';
var router = (0, _express.Router)();
router.post('/login', _loginController["default"].login);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=adminRoute.js.map