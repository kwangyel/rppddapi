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

var _counterService = _interopRequireDefault(require("../services/counterService"));

var counterController =
/*#__PURE__*/
function () {
  function counterController() {
    (0, _classCallCheck2["default"])(this, counterController);
  }

  (0, _createClass2["default"])(counterController, null, [{
    key: "incrementCounter",
    value: function () {
      var _incrementCounter = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var viewCount;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _counterService["default"].incrementCounter();

              case 3:
                viewCount = _context.sent;
                console.log(viewCount);
                return _context.abrupt("return", res.send(viewCount));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.send(_context.t0));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function incrementCounter(_x, _x2) {
        return _incrementCounter.apply(this, arguments);
      }

      return incrementCounter;
    }()
  }, {
    key: "getCount",
    value: function () {
      var _getCount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var theCount;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _counterService["default"].getCount();

              case 3:
                theCount = _context2.sent;
                return _context2.abrupt("return", res.send(theCount));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.send(_context2.t0));

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function getCount(_x3, _x4) {
        return _getCount.apply(this, arguments);
      }

      return getCount;
    }()
  }]);
  return counterController;
}();

var _default = counterController;
exports["default"] = _default;
//# sourceMappingURL=countController.js.map