"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Util =
/*#__PURE__*/
function () {
  function Util() {
    (0, _classCallCheck2["default"])(this, Util);
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
    this.token = null;
    this.user = null;
    this.auth = false;
  }

  (0, _createClass2["default"])(Util, [{
    key: "setAuth",
    value: function setAuth(statusCode, message, auth, token, user) {
      this.message = message;
      this.token = token;
      this.user = user;
      this.statusCode = statusCode;
      this.auth = auth;
    }
  }, {
    key: "setSuccess",
    value: function setSuccess(statusCode, message, data) {
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
      this.type = 'success';
    }
  }, {
    key: "setError",
    value: function setError(statusCode, message) {
      this.statusCode = statusCode;
      this.message = message;
      this.type = 'error';
    }
  }, {
    key: "sendAuth",
    value: function sendAuth(res) {
      var result = {
        auth: this.auth,
        message: this.message,
        token: this.token,
        user: this.user,
        statusCode: this.statusCode
      };

      if (this.auth) {
        return res.status(this.statusCode).send(result);
      }

      return res.status(this.statusCode).send({
        message: this.message
      });
    }
  }, {
    key: "send",
    value: function send(res) {
      var result = {
        status: this.type,
        message: this.message,
        data: this.data
      };

      if (this.type === 'success') {
        return res.status(this.statusCode).json(result);
      }

      return res.status(this.statusCode).json({
        status: this.type,
        message: this.message
      });
    }
  }]);
  return Util;
}();

exports["default"] = Util;
//# sourceMappingURL=Utils.js.map