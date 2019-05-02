// (function(exports, require, module, __filename, __dirname) {
console.log("__dirname:", __dirname);
console.log("__filename:", __filename);

const EventEmitter = require("events");

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log("http message:", message);

    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
module.exports.endPoint = url;
// });
