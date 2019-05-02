// take a look at the events module
const EventEmmiter = require("events");
const emitter = new EventEmmiter();

// Register a listener
emitter.on("messageLogged", arg => {
  console.log("Listener called", arg);
});

emitter.emit("messageLogged", { id: 1, url: "http://" });

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
