"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _referenceController = _interopRequireDefault(require("../controllers/referenceController"));

// import cache from '../utils/cache';
var router = (0, _express.Router)();
router.get('/:pestid', _referenceController["default"].getReferenceId);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=referenceRoute.js.map