"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _pestController = _interopRequireDefault(require("../controllers/pestController"));

var _countController = _interopRequireDefault(require("../controllers/countController"));

// import cache from '../utils/cache';
var router = (0, _express.Router)();
router.get('/incrementcount', _countController["default"].incrementCounter);
router.get('/count', _countController["default"].getCount);
router.get('/', _pestController["default"].getAllPests); // router.post('/',pestController.addPest);
// router.get('/pestGist',cache.checkResponseCache,pestController.pestGist,cache.addResponseToCache);

router.get('/pestGist', _pestController["default"].pestGist);
router.get('/search', _pestController["default"].searchPest);
router.get('/category/:cat', _pestController["default"].category);
router.get('/:id', _pestController["default"].getAPest); // router.put('/:id',pestController.updatePest);
// router.delete('/:id',pestController.deteledPest);

var _default = router;
exports["default"] = _default;
//# sourceMappingURL=pestRoutes.js.map