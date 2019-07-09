"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _pestController = _interopRequireDefault(require("../controllers/pestController"));

// import cache from '../utils/cache';
var router = (0, _express.Router)();
router.get('/', _pestController["default"].getAllPests);
router.post('/', _pestController["default"].addPest); // router.get('/pestGist',cache.checkResponseCache,pestController.pestGist,cache.addResponseToCache);

router.get('/pestGist', _pestController["default"].pestGist);
router.get('/search', _pestController["default"].searchPest);
router.get('/:id', _pestController["default"].getAPest);
router.put('/:id', _pestController["default"].updatePest);
router["delete"]('/:id', _pestController["default"].deteledPest);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=pestRoutes.js.map