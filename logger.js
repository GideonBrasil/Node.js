var url = "http://mylogger.io/log";

function log(message) {
  // Send an HTTP request
  console.log("http message:", message);
}

module.exports.log = log;
module.exports.endPoint = url;
