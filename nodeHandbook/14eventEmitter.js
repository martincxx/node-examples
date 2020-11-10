/*const eventEmitter = require("events").EventEmitter();
eventEmitter.on("start", () => {
  console.log("started");
});

//eventEmitter.emit("start");
//does not work
*/
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("started");
});

myEmitter.emit("event");
