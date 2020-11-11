/*const eventEmitter = require("events").EventEmitter();
eventEmitter.on("start", () => {
  console.log("started");
});

//eventEmitter.emit("start");
//more info at https://nodejs.org/api/events.html
*/
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("started");
});

myEmitter.emit("event");

myEmitter.on("start", (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

myEmitter.emit("start", 1, 10);
