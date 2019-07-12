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

var _pestService = _interopRequireDefault(require("../services/pestService"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var pestController =
/*#__PURE__*/
function () {
  function pestController() {
    (0, _classCallCheck2["default"])(this, pestController);
  }

  (0, _createClass2["default"])(pestController, null, [{
    key: "getAllPests",
    value: function () {
      var _getAllPests = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var allPests;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _pestService["default"].getAllPests();

              case 3:
                allPests = _context.sent;

                if (allPests.length > 0) {
                  util.setSuccess(200, 'Pests Retrieved', allPests);
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

      function getAllPests(_x, _x2) {
        return _getAllPests.apply(this, arguments);
      }

      return getAllPests;
    }()
  }, {
    key: "addPest",
    value: function () {
      var _addPest = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var newPest, createdPest;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(req.body.name);

                if (req.body.name) {
                  _context2.next = 4;
                  break;
                }

                util.setError(400, 'Please provide the pest name');
                return _context2.abrupt("return", util.send(res));

              case 4:
                newPest = req.body;
                _context2.prev = 5;
                _context2.next = 8;
                return _pestService["default"].addPest(newPest);

              case 8:
                createdPest = _context2.sent;
                util.setSuccess(201, 'Pest Added', createdPest);
                return _context2.abrupt("return", util.send(res));

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](5);
                util.setError(400, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[5, 13]]);
      }));

      function addPest(_x3, _x4) {
        return _addPest.apply(this, arguments);
      }

      return addPest;
    }()
  }, {
    key: "updatePest",
    value: function () {
      var _updatePest = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var alteredPest, id, _updatePest2;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                alteredPest = req.body;
                id = req.params.id;

                if (Number(id)) {
                  _context3.next = 5;
                  break;
                }

                util.setError(400, 'Please a valid ID');
                return _context3.abrupt("return", util.send(res));

              case 5:
                _context3.prev = 5;
                _context3.next = 8;
                return _pestService["default"].updatePest(id, alteredPest);

              case 8:
                _updatePest2 = _context3.sent;

                if (!_updatePest2) {
                  util.setError(404, "Cannot find pest of id ".concat(id));
                } else {
                  util.setSuccess(200, 'Pest Updated', _updatePest2);
                }

                return _context3.abrupt("return", util.send(res));

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](5);
                util.setError(404, _context3.t0);
                return _context3.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 13]]);
      }));

      function updatePest(_x5, _x6) {
        return _updatePest.apply(this, arguments);
      }

      return updatePest;
    }()
  }, {
    key: "getAPest",
    value: function () {
      var _getAPest = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var id, thePest;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context4.next = 4;
                  break;
                }

                util.setError(404, 'Please input valid id');
                return _context4.abrupt("return", util.send(res));

              case 4:
                _context4.prev = 4;
                _context4.next = 7;
                return _pestService["default"].getAPest(id);

              case 7:
                thePest = _context4.sent;

                if (!thePest) {
                  util.setError(404, "cannot find pest with id ".concat(id));
                } else {
                  util.setSuccess(200, 'Found the Pest', thePest);
                }

                return _context4.abrupt("return", util.send(res));

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](4);
                util.setError(404, _context4.t0);
                return _context4.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[4, 12]]);
      }));

      function getAPest(_x7, _x8) {
        return _getAPest.apply(this, arguments);
      }

      return getAPest;
    }()
  }, {
    key: "deteledPest",
    value: function () {
      var _deteledPest = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var id, pestToDelete;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context5.next = 4;
                  break;
                }

                util.setError(400, 'Please provide a valid id');
                return _context5.abrupt("return", util.send(res));

              case 4:
                _context5.prev = 4;
                _context5.next = 7;
                return _pestService["default"].deletePest(id);

              case 7:
                pestToDelete = _context5.sent;

                if (pestToDelete) {
                  util.setSuccess(200, 'Pest Deleted');
                } else {
                  util.setError(404, "Pest with id ".concat(id, " cannot be deleted"));
                }

                return _context5.abrupt("return", util.send(res));

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](4);
                util.setError(400, _context5.t0);
                return _context5.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4, 12]]);
      }));

      function deteledPest(_x9, _x10) {
        return _deteledPest.apply(this, arguments);
      }

      return deteledPest;
    }()
  }, {
    key: "searchPest",
    value: function () {
      var _searchPest = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(req, res) {
        var searchname, thePest;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                searchname = req.body.searchname; // console.log(`this is the search query ${searchname}`);

                if (!(searchname === "")) {
                  _context6.next = 4;
                  break;
                }

                util.setError(404, 'Please input valid name of scientificName');
                return _context6.abrupt("return", util.send(res));

              case 4:
                _context6.prev = 4;
                _context6.next = 7;
                return _pestService["default"].searchPest(searchname);

              case 7:
                thePest = _context6.sent;

                if (!thePest) {
                  util.setError(404, "cannot find the term ".concat(searchname));
                } else {
                  util.setSuccess(200, 'Found the Pest', thePest);
                }

                return _context6.abrupt("return", util.send(res));

              case 12:
                _context6.prev = 12;
                _context6.t0 = _context6["catch"](4);
                util.setError(404, _context6.t0);
                return _context6.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[4, 12]]);
      }));

      function searchPest(_x11, _x12) {
        return _searchPest.apply(this, arguments);
      }

      return searchPest;
    }()
  }, {
    key: "pestGist",
    value: function () {
      var _pestGist = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(req, res) {
        var pestgist;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _pestService["default"].pestGist();

              case 3:
                pestgist = _context7.sent;

                if (pestgist.length > 0) {
                  util.setSuccess(200, 'Pests Retrieved', pestgist);
                  req.data = pestgist;
                } else {
                  util.setSuccess(200, 'No pests found');
                }

                return _context7.abrupt("return", util.send(res));

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](0);
                util.setError(400, _context7.t0);
                return _context7.abrupt("return", util.send(res));

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 8]]);
      }));

      function pestGist(_x13, _x14) {
        return _pestGist.apply(this, arguments);
      }

      return pestGist;
    }()
  }, {
    key: "category",
    value: function () {
      var _category = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(req, res) {
        var cat, pestlist;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                // const category=req.body.category;
                cat = req.params.cat; // console.log(`this is the search query ${searchname}`);

                if (!(cat === "")) {
                  _context8.next = 4;
                  break;
                }

                util.setError(404, 'Please input valid category');
                return _context8.abrupt("return", util.send(res));

              case 4:
                _context8.prev = 4;
                _context8.next = 7;
                return _pestService["default"].category(cat);

              case 7:
                pestlist = _context8.sent;

                if (pestlist.length > 0) {
                  util.setSuccess(200, 'Pests Retrieved', pestlist);
                } else {
                  util.setSuccess(200, 'No pests found');
                }

                return _context8.abrupt("return", util.send(res));

              case 12:
                _context8.prev = 12;
                _context8.t0 = _context8["catch"](4);
                util.setError(404, _context8.t0);
                return _context8.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[4, 12]]);
      }));

      function category(_x15, _x16) {
        return _category.apply(this, arguments);
      }

      return category;
    }()
  }]);
  return pestController;
}();

var _default = pestController;
exports["default"] = _default;
//# sourceMappingURL=pestController.js.map