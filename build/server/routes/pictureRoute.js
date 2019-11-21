"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _piccontroller = _interopRequireDefault(require("../controllers/piccontroller"));

var _multer = _interopRequireDefault(require("multer"));

var _fs = _interopRequireDefault(require("fs"));

var router = (0, _express.Router)();
var path = process.env.STATIC;
var upload = (0, _multer["default"])({
  dest: path
});
router.get('/:pestid', _piccontroller["default"].getPicById);
router.post('/upload', upload.single('photo'), function (req, res) {
  try {
    var tmp_path = req.file.path;
    var target_path = path + req.file.originalname;

    var src = _fs["default"].createReadStream(tmp_path);

    var dest = _fs["default"].createWriteStream(target_path);

    src.pipe(dest);
    src.on('end', function () {
      res.json({
        "status": "success",
        "filename": req.file.originalname
      });
    });
    src.on('error', function () {
      res.json({
        "status": "error uploading file"
      });
    });
  } catch (error) {
    res.send(error);
  }
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=pictureRoute.js.map