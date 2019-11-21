"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _loginController = _interopRequireDefault(require("../controllers/loginController"));

var _pestController = _interopRequireDefault(require("../controllers/pestController"));

var router = (0, _express.Router)();
router.use(function (req, res, next) {
  var token = req.header("Authorization");

  if (token) {
    _jsonwebtoken["default"].verify(token, _config["default"].secret, function (err, decoded) {
      if (err) {
        return res.json({
          message: 'invalid token'
        });
        console.log('invaldi token');
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({
      message: 'No token provided'
    });
    console.log('No token provided');
  }
});
router.get('/test', _loginController["default"].getHash);
router.post('/add', _pestController["default"].addPest);
router.put('/update/:id', _pestController["default"].updatePest);
router["delete"]('/delete/:id', _pestController["default"].deteledPest);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=protectedRoutes.js.map