const EventEmitter = require("events");

//EventEmitterdan meros olish
class MyEmitter extends EventEmitter {}

//Instan obyekt
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on("event", () => {
  console.log("Event Triggered...");
});

//Qabul qilib olish
myEmitter.emit("event");
myEmitter.emit("event");
