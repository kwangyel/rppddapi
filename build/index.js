"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _pestRoutes = _interopRequireDefault(require("./server/routes/pestRoutes"));

var _adminRoute = _interopRequireDefault(require("./server/routes/adminRoute"));

var _commentRoute = _interopRequireDefault(require("./server/routes/commentRoute"));

var _pictureRoute = _interopRequireDefault(require("./server/routes/pictureRoute"));

var _referenceRoute = _interopRequireDefault(require("./server/routes/referenceRoute"));

var _protectedRoutes = _interopRequireDefault(require("./server/routes/protectedRoutes"));

var _cors = _interopRequireDefault(require("cors"));

var _http = _interopRequireDefault(require("http"));

//const express=require('express');
//const bodyparser=require('body-parser');
_dotenv["default"].config();

var app = (0, _express["default"])();

var httpServer = _http["default"].createServer(app); //module.exports=app;


console.log("Server listening on port 80");
httpServer.listen(80);
app.use((0, _cors["default"])());
app.use('/api/v1/img', _pictureRoute["default"]);
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
var port = process.env.PORT || 80;
app.use('/api/v1/protected', _protectedRoutes["default"]);
app.use('/api/v1/admin', _adminRoute["default"]);
app.use('/api/v1/pests', _pestRoutes["default"]);
app.use('/api/v1/comments', _commentRoute["default"]);
app.use('/api/v1/pests/reference', _referenceRoute["default"]);
app.get('*', function (req, res) {
  res.status(200).send({
    message: 'welcome to the RPPD API.'
  });
}); // app.listen(port,()=>{
// 	console.log(`server listening on port ${port}`)
// });
// export default app;
//# sourceMappingURL=index.js.map