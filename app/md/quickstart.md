{
  title: "Quick start",
  subtitle: "Get your plant in the cloud!"
}

After following the [Do It Yourself tutorial](/posts/diy), you now have a whole system ready to get your plant smarter. Here is a small tutorial on how everything will be working.

1. Once you have launched your server go to the root or simply go to [our server GrowStuff]() and connect your twitter account.

2. Add a plant with its different options:
	* *Nickname:* plant name that you'll use to mention her on twitter
	* *Type:* Plant botanic category
	* *Mode:* If **manual** is selected, you need to water the plant remotly using the dashboard or twitter. Otherwise, in the auto mode, the plant will water herself depending on the the data provided bellow:
	* *Consumption:* Volume for one watering shot (in mililitter)
	* *Frequency:* How often the plant will be wattered in one week
![Screen add plant](https://dl.dropboxusercontent.com/sh/38fl5z88rbdixap/HA2sY_EbIX/growstuff_add_plant.png?token_hash=AAFUUk539kL52a9dGzDDgjQIYWi1nbZjymV2XaIEj4LlrQ =780x)

3. Once validated, you'll need to follow the instruction to connect your dashboard with the plant:
![Screen installation](https://dl.dropboxusercontent.com/sh/38fl5z88rbdixap/_IhZY1SK5a/growstuff_installation.png?token_hash=AAFUUk539kL52a9dGzDDgjQIYWi1nbZjymV2XaIEj4LlrQ =780x)	
	* Once connected to the sector, the RaspberryPi will wait that you send him the WIFI IDs. Our built-in software will help you to do in a few clics.
![Connector Loading](/images/connector_loading.jpg)
	* You'll need to downlaod the connector software and drag and drop the configuration file.
![Connector Drag & Drop](/images/connector_drop.jpg)
	* Insert then you Wifi credentials, and you're all set!
![Connector Wifi](/images/connector_wifi.jpg)

4. The plant is activated in the dashboard an waiting then for a signal from the plant:
![Screen dashboard](https://dl.dropboxusercontent.com/sh/38fl5z88rbdixap/4i05LCT71u/growstuff_dashboard.png?token_hash=AAFUUk539kL52a9dGzDDgjQIYWi1nbZjymV2XaIEj4LlrQ =780x)

5. To water manually the plant, you can click on the dropdown "Water it" and select the volume that you'd like to send to the plant.
Or you can directly tweet the plant using the following syntax:
`@YourTwitterHandle watering 20ml for #PlantNickname`

6. If you want to get the status of the plant, tweet : `@YourTwitterHandle #PlantNickname give me your status`

7. You may also ask to the plant to take a selfie, click then on the button "Take picture now"

8. Enjoy!
