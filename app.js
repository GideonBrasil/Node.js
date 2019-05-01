// Path module test
const path = require("path");

const pathObj = path.parse(__filename);
console.log("pathObj:", pathObj);

// Load logger module
const log = require("./logger");

// console.log("logger module", logger);
log("Hello from Gideon");

// first node hello function
function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Gideon");

console.log(module);
