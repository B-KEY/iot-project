const fs = require("fs");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { userData } = require("./userData");

const { generateMqttEntry, write2file, create_dir } = require("./helpers");

const volumes = "../volumes";

const mqttArr = ["config", "data", "log"];

create_dir(volumes);
create_dir(volumes + "/mqtt");
for (let item of mqttArr) {
  create_dir(volumes + "/" + "mqtt" + "/" + item);
}

let users = [];
for (let i = 0; i < userData.length; i++) {
  let mqttEntry = generateMqttEntry(userData[i].username, userData[i].password);
  let userPort = 1880;
  let exressPort = 8081;
  users.push({
    user: userData[i].username,
    position: i + 1,
    pwdHash: bcrypt.hashSync(userData[i].password),
    pwd: userData[i].password,
    mqttEntry,
    userPort,
    exressPort,
    nodeRedUser: userData[i].nodeRedUser,
  });
}
let mqttUser = users.map((u) => u.mqttEntry).join("\n");

for (let user of users) {
  if (user.nodeRedUser) {
    let settingsContent = `
    module.exports = {
        flowFile: "flows.json",
        flowFilePretty: true,
        adminAuth: {
            type: "credentials",
            users: [
                {
                username: "${user.user}",
                password: "${user.pwdHash}",
                permissions: "*",
                },
            ],
        },
        https: {
            key: require("fs").readFileSync("/certs/key.pem"),
            cert: require("fs").readFileSync("/certs/certificate.pem"),
        },
        requireHttps: true,
        uiPort: process.env.PORT || 1880,
        logging: {
            console: {
                level: "info",
                metrics: false,
                audit: false,
            },
        },
        exportGlobalContextKeys: false,
        externalModules: {
        },
        editorTheme: {
            palette: {

            },
            projects: {
                enabled: false,
                workflow: {
                    mode: "manual",
                },
            },
            codeEditor: {
                /** Select the text editor component used by the editor.
                 * Defaults to "ace", but can be set to "ace" or "monaco"
                 */
                lib: "monaco",
                options: {
                    theme: "vs", 
                },
            },
        },
        functionExternalModules: true,
        functionGlobalContext: {
            // os:require('os'),
        },
        debugMaxLength: 1000,
        mqttReconnectTime: 15000,
        serialReconnectTime: 15000,
    };
    `;
    write2file(
      volumes + "/node-red" + user.position + "/settings.js",
      settingsContent
    );
    break;
  }
  //write2file(volumes + "/mqtt/config/mosquitto.passwd", mqttUser);
}
write2file(volumes + "/mqtt/config/mosquitto.passwd", mqttUser);
