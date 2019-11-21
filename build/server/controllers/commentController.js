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

var _commentService = _interopRequireDefault(require("../services/commentService"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var commentContoller =
/*#__PURE__*/
function () {
  function commentContoller() {
    (0, _classCallCheck2["default"])(this, commentContoller);
  }

  (0, _createClass2["default"])(commentContoller, null, [{
    key: "getAllComments",
    value: function () {
      var _getAllComments = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var allcomments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _commentService["default"].getAllComments();

              case 3:
                allcomments = _context.sent;

                if (allcomments.length > 0) {
                  util.setSuccess(200, 'Pests Retrieved', allcomments);
                } else {
                  util.setSuccess(200, 'No pests found');
                }

                return _context.abrupt("return", util.send(res));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0);
                return _context.abrupt("return", util.send(res));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function getAllComments(_x, _x2) {
        return _getAllComments.apply(this, arguments);
      }

      return getAllComments;
    }()
  }, {
    key: "addComments",
    value: function () {
      var _addComments = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var newComment, createdComment;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (req.body.email) {
                  _context2.next = 3;
                  break;
                }

                util.setError(400, 'Please provide email');
                return _context2.abrupt("return", util.send(res));

              case 3:
                if (req.body.comment) {
                  _context2.next = 6;
                  break;
                }

                util.setError(400, 'Please provide comment');
                return _context2.abrupt("return", util.send(res));

              case 6:
                if (req.body.pest_id) {
                  _context2.next = 9;
                  break;
                }

                util.setError(400, 'Please provide pestid');
                return _context2.abrupt("return", util.send(res));

              case 9:
                newComment = req.body;
                _context2.prev = 10;
                _context2.next = 13;
                return _commentService["default"].addComments(newComment);

              case 13:
                createdComment = _context2.sent;
                util.setSuccess(201, 'Pest Added', createdComment);
                return _context2.abrupt("return", util.send(res));

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](10);
                util.setError(400, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[10, 18]]);
      }));

      function addComments(_x3, _x4) {
        return _addComments.apply(this, arguments);
      }

      return addComments;
    }()
  }, {
    key: "getCommentsId",
    value: function () {
      var _getCommentsId = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var pestid, theComments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                pestid = req.params.pestid;

                if (Number(pestid)) {
                  _context3.next = 4;
                  break;
                }

                util.setError(404, 'Please input valid pestid');
                return _context3.abrupt("return", util.send(res));

              case 4:
                _context3.prev = 4;
                _context3.next = 7;
                return _commentService["default"].getCommentsId(pestid);

              case 7:
                theComments = _context3.sent;

                if (!theComments) {
                  util.setError(404, "cannot find pest with id ".concat(pestid));
                } else {
                  util.setSuccess(200, 'Found the Pest', theComments);
                }

                return _context3.abrupt("return", util.send(res));

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](4);
                util.setError(404, _context3.t0);
                return _context3.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[4, 12]]);
      }));

      function getCommentsId(_x5, _x6) {
        return _getCommentsId.apply(this, arguments);
      }

      return getCommentsId;
    }()
  }]);
  return commentContoller;
}();

var _default = commentContoller;
exports["default"] = _default;
//# sourceMappingURL=commentController.js.map