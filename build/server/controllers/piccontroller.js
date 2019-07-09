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

var _picservice = _interopRequireDefault(require("../services/picservice"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var piccontroller =
/*#__PURE__*/
function () {
  function piccontroller() {
    (0, _classCallCheck2["default"])(this, piccontroller);
  }

  (0, _createClass2["default"])(piccontroller, null, [{
    key: "getPicById",
    value: function () {
      var _getPicById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var pestid, theImage;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pestid = req.params.pestid;

                if (Number(pestid)) {
                  _context.next = 4;
                  break;
                }

                util.setError(404, 'Please input valid pestid');
                return _context.abrupt("return", util.send(res));

              case 4:
                _context.prev = 4;
                _context.next = 7;
                return _picservice["default"].getPicById(pestid);

              case 7:
                theImage = _context.sent;

                if (!theImage) {
                  util.setError(404, "cannot find image with id ".concat(pestid));
                } else {
                  util.setSuccess(200, 'Found the Pest', theImage);
                }

                return _context.abrupt("return", util.send(res));

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](4);
                util.setError(404, _context.t0);
                return _context.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 12]]);
      }));

      function getPicById(_x, _x2) {
        return _getPicById.apply(this, arguments);
      }

      return getPicById;
    }()
  }]);
  return piccontroller;
}();

var _default = piccontroller;
exports["default"] = _default;
//# sourceMappingURL=piccontroller.js.map