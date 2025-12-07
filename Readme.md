🚀 Self-Hosted IoT Platform (PC-Based)

This project turns your personal computer into a fully working IoT server, using open-source tools and Docker containers.

It includes everything required to start building IoT applications without using AWS, Azure, or paid cloud services.

🧱 What’s Included

This system contains all essential IoT modules:

Module	Technology
Logic / Automation	Node-RED + REST API
Communication Broker	MQTT (Eclipse Mosquitto)
Database	MongoDB
User Dashboard	Node-RED Dashboard + optional React UI
DB Admin Tool	Mongo Express
🖥️ What You Can Do

✔ connect IoT devices
✔ send/receive MQTT messages
✔ build dashboards
✔ store sensor data
✔ run flows
✔ create your own APIs
✔ run everything locally

No cloud required 💡

🛠️ Requirements

Before you start, install:

✔ Docker

Download for your OS:
https://www.docker.com/products/docker-desktop/

✔ NodeJS

Download:
https://nodejs.org/

📦 Installation
1️⃣ Clone repository
git clone https://github.com/B-KEY/iot-project.git
cd iot-project

2️⃣ Install initialization scripts
cd initScripts
npm install

3️⃣ Create users and initial configuration

Inside initScripts:

node index.js


This automatically generates:

MQTT credentials

Node-RED user login

certificates

Note: Node-RED supports only one main dashboard user by default.

▶️ Start the IoT Server

Return to the project root folder and run:

docker-compose up


or run in background:

docker-compose up -d

➕ Add additional MQTT users

From initScripts/ run:

node addMqttUser.js newUser newPassword


Then restart MQTT broker:

docker-compose restart broker

🌍 Accessing the dashboard
Node-RED UI
https://localhost:1880


(or use your PC server IP instead of localhost)

The first time you enter, you will see a security warning.
Accept it (self-signed certificate).

Login using the credentials generated earlier.

📊 Using Node-RED

After login, you can:

create flows

connect MQTT nodes

build dashboards

store data in MongoDB

To enable MongoDB nodes install inside Node-RED:

node-red-contrib-mongodb4

🌐 MQTT Connection

Broker local network address:

mqtt://localhost:1883


Inside Docker network, use service name:

mqtt://broker:1883

🔀 API + Routing

Requests are routed by NGINX:

URL	Goes to
/api	NodeJS API service
/redApi	Node-RED
/	React web app

External traffic uses port:

3050

🧠 What this project is good for

✓ IoT research
✓ education
✓ building prototypes
✓ avoiding cloud costs
✓ learning MQTT
✓ smart home experiments
✓ small local IoT systems

✨ Summary

This project gives you a fully ready IoT platform, running on your own computer, without any external cloud dependencies.

You can now:

add devices

publish MQTT messages

build dashboards

store data locally

extend with your own ideas

📌 Next improvements (optional)

secure HTTPS with real cert

build custom React dashboard

integrate mobile connections

attach external sensors

deploy to a Raspberry Pi
