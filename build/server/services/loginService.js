"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../src/models"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var loginService =
/*#__PURE__*/
function () {
  function loginService() {
    (0, _classCallCheck2["default"])(this, loginService);
  }

  (0, _createClass2["default"])(loginService, null, [{
    key: "getToken",
    value: function () {
      var _getToken = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(username, password) {
        var token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                // user=database.user.findOne();
                token = '';
                _context.next = 4;
                return _models["default"].user.findOne({
                  where: {
                    username: username
                  }
                }).then(function (user) {
                  if (!user) {
                    console.log('user not found');
                    return;
                  } else if (_bcrypt["default"].compareSync(password, user.password)) {
                    token = _jsonwebtoken["default"].sign({
                      id: user.id
                    }, _config["default"].secret, {
                      expiresIn: 60 * 60
                    });
                    return token;
                  } else {
                    console.log('password not found');
                    return;
                  }
                });

              case 4:
                return _context.abrupt("return", _context.sent);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getToken(_x, _x2) {
        return _getToken.apply(this, arguments);
      }

      return getToken;
    }()
  }]);
  return loginService;
}();

var _default = loginService;
exports["default"] = _default;
//# sourceMappingURL=loginService.js.map