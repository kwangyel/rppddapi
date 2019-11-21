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

var pestService =
/*#__PURE__*/
function () {
  function pestService() {
    (0, _classCallCheck2["default"])(this, pestService);
  }

  (0, _createClass2["default"])(pestService, null, [{
    key: "addComments",
    value: function () {
      var _addComments = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(newComment) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].comments.create(newComment);

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function addComments(_x) {
        return _addComments.apply(this, arguments);
      }

      return addComments;
    }()
  }, {
    key: "getCommentsId",
    value: function () {
      var _getCommentsId = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id) {
        var theComment;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].comments.findAll({
                  where: {
                    pest_id: Number(id)
                  }
                });

              case 3:
                theComment = _context2.sent;
                return _context2.abrupt("return", theComment);

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

      function getCommentsId(_x2) {
        return _getCommentsId.apply(this, arguments);
      }

      return getCommentsId;
    }()
  }]);
  return pestService;
}();

var _default = pestService;
exports["default"] = _default;
//# sourceMappingURL=commentService.js.map