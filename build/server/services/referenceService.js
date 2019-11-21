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

var referenceService =
/*#__PURE__*/
function () {
  function referenceService() {
    (0, _classCallCheck2["default"])(this, referenceService);
  }

  (0, _createClass2["default"])(referenceService, null, [{
    key: "getReferenceId",
    value: function () {
      var _getReferenceId = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(pestid) {
        var theReference;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].reference.findAll({
                  where: {
                    pest_id: Number(pestid)
                  },
                  attributes: ['reference']
                });

              case 3:
                theReference = _context.sent;
                return _context.abrupt("return", theReference);

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

      function getReferenceId(_x) {
        return _getReferenceId.apply(this, arguments);
      }

      return getReferenceId;
    }()
  }]);
  return referenceService;
}();

var _default = referenceService;
exports["default"] = _default;
//# sourceMappingURL=referenceService.js.map