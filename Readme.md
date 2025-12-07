# How to guide

This project turns common personal computer into the IoT server. It features all neccesary core modules to start with your IoT project. The system consists of these parts:

- Logic: Node-RED, REST-Api
- Broker: MQTT Eclipse Mosquitto
- User interface: Node-RED Dashboard, React web application
- Database: MongoDB
- Tools: MongoExpress

To start project follow these instruction:

- Install dependencies. Install the Docker platform as it is recommended for your operating system, and install NodeJS.
- Download the source code from Gitlab: https://gitlab.com/klbik/self-hosted-iot
- Now, the user must create config files and credentials for MQTT and Node-RED. Navigate to the folder: initScripts and run the command: “npm install”. Then modify the userData.js file to create the desired number of users. Because the Node-RED does not support multiple individual users, there is only one Node-RED user. Afterward, run the command “node index.js”. This will generate the configuration files needed to configure MQTT and Node-RED credentials.
- Run the IoT solution by typing the command: “docker-compose up” or “docker-compose up - d" to run the system in the background.
- Add new MQTT user is possible by calling the script in the folder initScripts, command example: “node addMqttUser.js newUserName newUserPassword”. Please note that it is necessary to restart the broker service to apply changes. Restart the broker with the command: “docker-compose restart broker”

Now, there should be a running IoT server on the target computer. The Node-RED dashboard can be accessed on the URL: https://serverIp:1880. If the IoT server is running on the local device, you can navigate to https://localhost:1880.

During the first visit, you will see the warning about page security. It is because we are using a self-signed SSL certificate to work with HTTPS. You must confirm that you want to really access this page to pass the security warning. After filling in the Node-RED credentials, you can access the Node-RED flow base programming tool. We created a simple flow to demonstrate the system's base functionality. To get this flow working correctly, you must install a package in Node-RED called: “node-red-contrib-mongodb4" and fill credentials for the MQTT node.

MQTT broker is accessible from the internet via port 1883 and the IP address of your machine. To log in to the broker please use your credentials. If you want to connect to the broker from the system services, e.g., Node-RED instance or NodeJS REST-Api, use please “broker” instead of the machine IP address. This name is defined in docker-compose.yml file for the MQTT broker and using this name you can reach the MQTT broker inside the Docker network.

All other communication from the internet is routed via port 3050. This communication goes through the Nginx server. In the Nginx server, URL base routing is implemented. All requests which start with “/api” will be redirected to the NodeJS service, requests that start with “/redApi” will be redirected to the Node-RED instance and all other requests will be redirected to the React web application
