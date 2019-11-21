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

var picservice =
/*#__PURE__*/
function () {
  function picservice() {
    (0, _classCallCheck2["default"])(this, picservice);
  }

  (0, _createClass2["default"])(picservice, null, [{
    key: "getPicById",
    value: function () {
      var _getPicById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(pestid) {
        var theimg;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].images.findAll({
                  where: {
                    pestid: Number(pestid)
                  }
                });

              case 3:
                theimg = _context.sent;
                return _context.abrupt("return", theimg);

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

      function getPicById(_x) {
        return _getPicById.apply(this, arguments);
      }

      return getPicById;
    }()
  }]);
  return picservice;
}();

var _default = picservice;
exports["default"] = _default;
//# sourceMappingURL=picservice.js.map