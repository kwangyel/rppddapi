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
    key: "getAllPests",
    value: function () {
      var _getAllPests = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].pests.findAll();

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

      function getAllPests() {
        return _getAllPests.apply(this, arguments);
      }

      return getAllPests;
    }()
  }, {
    key: "addPest",
    value: function () {
      var _addPest = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(newPest) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].pests.create(newPest);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function addPest(_x2) {
        return _addPest.apply(this, arguments);
      }

      return addPest;
    }()
  }, {
    key: "updatePest",
    value: function () {
      var _updatePest2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(id, _updatePest) {
        var pestToUpdate;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].pests.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                pestToUpdate = _context3.sent;

                if (!pestToUpdate) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 7;
                return _models["default"].pests.update(_updatePest, {
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                return _context3.abrupt("return", _updatePest);

              case 8:
                return _context3.abrupt("return", null);

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }));

      function updatePest(_x3, _x4) {
        return _updatePest2.apply(this, arguments);
      }

      return updatePest;
    }()
  }, {
    key: "getAPest",
    value: function () {
      var _getAPest = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(id) {
        var thePest;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _models["default"].pests.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                thePest = _context4.sent;
                return _context4.abrupt("return", thePest);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function getAPest(_x5) {
        return _getAPest.apply(this, arguments);
      }

      return getAPest;
    }()
  }, {
    key: "deletePest",
    value: function (_deletePest) {
      function deletePest(_x) {
        return _deletePest.apply(this, arguments);
      }

      deletePest.toString = function () {
        return _deletePest.toString();
      };

      return deletePest;
    }(
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(id) {
        var pestToDelete, deteledPest;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].pests.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                pestToDelete = _context5.sent;

                if (!pestToDelete) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 7;
                return _models["default"].pests.destroy({
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                deteledPest = _context5.sent;
                return _context5.abrupt("return", deletePest);

              case 9:
                return _context5.abrupt("return", null);

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 12]]);
      }));

      return function (_x6) {
        return _ref.apply(this, arguments);
      };
    }())
  }, {
    key: "searchPest",
    value: function () {
      var _searchPest = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(name) {
        var thePest;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _models["default"].pests.findOne({
                  where: {
                    name: name
                  }
                });

              case 3:
                thePest = _context6.sent;
                return _context6.abrupt("return", thePest);

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                throw _context6.t0;

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 7]]);
      }));

      function searchPest(_x7) {
        return _searchPest.apply(this, arguments);
      }

      return searchPest;
    }()
  }, {
    key: "pestGist",
    value: function () {
      var _pestGist = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7() {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _models["default"].pests.findAll({
                  attributes: ['id', 'name', 'scientificname', 'casualorganism', 'host']
                });

              case 3:
                return _context7.abrupt("return", _context7.sent);

              case 6:
                _context7.prev = 6;
                _context7.t0 = _context7["catch"](0);
                throw _context7.t0;

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 6]]);
      }));

      function pestGist() {
        return _pestGist.apply(this, arguments);
      }

      return pestGist;
    }()
  }]);
  return pestService;
}();

var _default = pestService;
exports["default"] = _default;
//# sourceMappingURL=pestService.js.map