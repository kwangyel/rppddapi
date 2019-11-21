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

var _sequelize = _interopRequireDefault(require("sequelize"));

var counterService =
/*#__PURE__*/
function () {
  function counterService() {
    (0, _classCallCheck2["default"])(this, counterService);
  }

  (0, _createClass2["default"])(counterService, null, [{
    key: "incrementCounter",
    value: function () {
      var _incrementCounter = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var theCount;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].counter.update({
                  viewcount: _sequelize["default"].literal('viewcount + 1')
                }, {
                  where: {
                    id: Number(1)
                  }
                });

              case 3:
                theCount = _context.sent;
                return _context.abrupt("return", theCount);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                throw _context.t0;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function incrementCounter() {
        return _incrementCounter.apply(this, arguments);
      }

      return incrementCounter;
    }()
  }, {
    key: "getCount",
    value: function () {
      var _getCount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var theCount;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].counter.findOne({
                  where: {
                    id: Number(1)
                  },
                  attributes: ['viewcount']
                });

              case 3:
                theCount = _context2.sent;
                return _context2.abrupt("return", theCount);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function getCount() {
        return _getCount.apply(this, arguments);
      }

      return getCount;
    }()
  }]);
  return counterService;
}();

var _default = counterService;
exports["default"] = _default;
//# sourceMappingURL=counterService.js.map