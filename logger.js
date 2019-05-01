// (function(exports, require, module, __filename, __dirname) {
console.log("__dirname:", __dirname);
console.log("__filename:", __filename);

var url = "http://mylogger.io/log";

function log(message) {
  // Send an HTTP request
  console.log("http message:", message);
}

module.exports = log;
module.exports.endPoint = url;
// });
