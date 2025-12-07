const fs = require("fs");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const create_dir = (dir) => {
  try {
    // first check if directory already exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      //console.log("Directory is created.");
    } else {
      //console.log("Directory already exists.");
    }
  } catch (err) {
    console.log(err);
  }
};

const delete_file = (file) => {
  try {
    fs.unlinkSync(file);
  } catch (error) {
    console.log(error);
  }
};

const write2file = (file, content) => {
  try {
    if (fs.existsSync(file)) {
      delete_file(file);
    }
    fs.writeFileSync(file, content);
  } catch (err) {
    console.log(err.message);
  }
};

function generateMqttEntry(username, passwd) {
  let res = "";
  let salt = crypto.randomBytes(12);
  const hash = crypto.createHash("sha512");
  hash.update(passwd);
  hash.update(salt);
  res = `${username}:$6$${salt.toString("base64")}$${hash
    .digest()
    .toString("base64")}`;
  return res;
}

exports.generateMqttEntry = generateMqttEntry;
exports.write2file = write2file;
exports.create_dir = create_dir;
