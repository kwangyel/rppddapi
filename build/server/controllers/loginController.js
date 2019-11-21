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

var _loginService = _interopRequireDefault(require("../services/loginService"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var util = new _Utils["default"]();

var loginController =
/*#__PURE__*/
function () {
  function loginController() {
    (0, _classCallCheck2["default"])(this, loginController);
  }

  (0, _createClass2["default"])(loginController, null, [{
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var username, password, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                username = req.body.username;
                password = req.body.password;
                _context.next = 5;
                return _loginService["default"].getToken(username, password);

              case 5:
                token = _context.sent;

                if (token) {
                  util.setAuth(200, "Authorized", true, token, username);
                } else {
                  util.setAuth(401, "Unauthorized");
                } // if(req.body.username=="admin"){
                // 	if(req.body.password=="admin"){
                // 		util.setSuccess(200,'authenticated');
                // 	}else{
                // 		util.setSuccess(200,'not authenticated password incorrect');
                // 	}
                // 	return util.send(res);
                // }else{
                // 	util.setSuccess(200,'user not found');
                // }


                return _context.abrupt("return", util.sendAuth(res));

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                util.setAuth(400, _context.t0);
                console.log(_context.t0);
                return _context.abrupt("return", util.sendAuth(res));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }));

      function login(_x, _x2) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "getHash",
    value: function () {
      var _getHash = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var resp;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                resp = _bcrypt["default"].hashSync('bafra@2019', 10);
                util.setSuccess(200, resp);
                return _context2.abrupt("return", util.send(res));

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                util.setError(400, _context2.t0);
                return _context2.abrupt("return", util.send(res));

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function getHash(_x3, _x4) {
        return _getHash.apply(this, arguments);
      }

      return getHash;
    }()
  }]);
  return loginController;
}();

var _default = loginController;
exports["default"] = _default;
//# sourceMappingURL=loginController.js.map