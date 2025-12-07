const fs = require("fs");
const { generateMqttEntry } = require("./helpers");

const args = process.argv;

if (args.length < 4) {
  console.log(
    "Usage: node addMqttUser.js username password \nIn Linux and macOs sudo is required"
  );
  return;
}
const volumes = "../volumes";

const appendToFile = (file, content) => {
  try {
    fs.appendFileSync(file, `\n${content}`);
  } catch (err) {
    console.log("err.message:", err.message);
  }
};

const start = () => {
  let mqttEntry = generateMqttEntry(args[2], args[3]);
  appendToFile(volumes + "/mqtt/config/mosquitto.passwd", mqttEntry);
  console.log(
    "Please restart the broker to apply changes with command: docker-compose restart broker"
  );
};

start();
