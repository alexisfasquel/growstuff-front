{
  title: "DIY",
  subtitle: "Welcome on the Growstuff project. Watch carefully the instruction to creation your own self-sufficient plant!"
}

##Requierement

The project is divided into several repository hosted on [Github](https://github.com/).

* __[Connector server](https://github.com/alexisfasquel/growstuff-connector-server)__
* __[Client](https://github.com/alexisfasquel/growstuff-client)__
* __[Connector client](https://github.com/alexisfasquel/growstuff-connector-client)__
* __[Server](https://github.com/pmdartus/GrowStuff)__

##Global architecture

![General Architecture](/images/archi.png)

###Controller
The microcontroller Arduino controls most of the electronics side of the project. It will transmit the sensors’ informations to the RaspberryPi and water the plant if necessary. To do so, it manages sensors and actuators:
Humidity sensors (air and ground)
* Light sensor
* Temperature sensor
* Water level sensor

The RaspberryPi manages the wi-fi connexion and controls the Arduino. It communicates with the web server to send it the informations and to receive instructions. It also has :

* a webcam to follow the plant growth and to send (on the owner request) selfies on twitter.
* a electronic circuit to control two LEDs.

###Web Server
Semi-automatic care of the plant : thanks to the collected informations by the sensors, the server will water the plante automatically. It will also warn the owner when she hasn’t enough sun or a bad temperature.
Follow your plant’s life : all the informations are stored. They can be viewed on the dashboard to follow your plant’s growth and health. You can even see your plant’s lifebook thanks to the webcam !
The social plant ! The server will simulate an artificial intelligence so that your plant can tweet her moods and interact with other users. We could go further and locate the plant thanks to the wi-fi and then tweet nearby plants.


##Interactions
