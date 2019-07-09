"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _piccontroller = _interopRequireDefault(require("../controllers/piccontroller"));

var router = (0, _express.Router)();
router.get('/:pestid', _piccontroller["default"].getPicById);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=pictureRoute.js.map