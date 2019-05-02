// take a look at the HTTP module
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.on("connection", socket => {
  console.log("new connection");
});

server.listen(3000);

console.log("Listening on port 3000...");

// // take a look at the events module
// const EventEmitter = require("events");

// const Logger = require("./logger");
// const logger = new Logger();

// // Register a listener
// logger.on("messageLogged", arg => {
//   console.log("Listener called", arg);
// });

// logger.log("message you boi");

// // take a look at the fs module
// const fs = require("fs");

// const files = fs.readdirSync("./");
// console.log("files:", files);

// fs.readdir("./", function(err, res) {
//   if (err) console.log("Error", err);
//   else console.log("Result", res);
// });

// // take a look at os module
// const os = require("os");

// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();

// console.log("Total Memory: " + totalMemory);
// console.log(`Free Memory: ${freeMemory}`);

// // Path module test
// const path = require("path");

// const pathObj = path.parse(__filename);
// console.log("pathObj:", pathObj);

// // Load logger module
// const log = require("./logger");

// // console.log("logger module", logger);
// log("Hello from Gideon");

// // first node hello function
// function sayHello(name) {
//   console.log("Hello " + name);
// }

// sayHello("Gideon");

// console.log(module);
