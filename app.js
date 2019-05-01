// Load logger module
const logger = require("./logger");

// console.log("logger module", logger);
logger.log("Hello from Gideon");

// first node hello function
function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Gideon");

console.log(module);
