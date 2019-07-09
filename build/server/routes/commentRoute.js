"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _commentController = _interopRequireDefault(require("../controllers/commentController"));

// import cache from '../utils/cache';
var router = (0, _express.Router)();
router.post('/', _commentController["default"].addComments);
router.get('/:pestid', _commentController["default"].getCommentsId);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=commentRoute.js.map