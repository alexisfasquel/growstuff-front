{
  title: "Server",
  subtitle: "Documentation on the server behind your plant intelligence."
}

All Growstuff is built arround the server application. The application is built in Node.js and hase 3 utilities :
* Serve HTML pages to manage the plants and watch their status
* Recieve store the plants application
* Get notified when a tweet mention a plant.

## How to run the server

###Required
* Node.js
* MongoDB
* A twitter account to create the application
* A Dropbox account to store the selfies took bythe plants

### Installation

First of all install `node` and install the dependences with `npm install`. You'll need to create a Twitter application to stream the tweet in real-time on Twitter ( be sure to set the application path to `http://localhost` on the Developer Panel ). Add create another application on Dropbox to store the photos, once it's ok generate a long living `access token`.

### Configure

Before running the server, export the app configuration in the console.

```
export TWITTER_CONSUMER_KEY= ...
export TWITTER_CONSUMER_SECRET= ...
export DROPBOX_ACCESS_TOKEN= ...
```

And finally start the server: `grunt`. The frontend is finally accessible on the `http://localhost:3000`.


## How to deploy

The application can be easily deployed for free on [Heroku](http://heroku.com). The application need a MongoHQ plugin to start.
>Don't forget to override the `TWITTER_CALLBACK_URL` !


##How does it works

###Database architecture

* **User**: The Twitter User, in Our Case the plants Account. It store the information for login and the access tokens to post for each Twitter account
* **Plant**: The physical plant
* **Mention**: All the interaction with the plants and Twiter ecosystem
* **Status**: Informations about the plant status

###Twitter stream reader

Growstuff server process each tweet containning the hashtah `#growstuff`, thanks to the Twitter streamer. You can avoid to process a certain hashtag becaus of the quantity of tweet to process if you don't reduce your scope.
This worker run on the same process as the web server.

###Plants informations

Because we need to discuss on both direction with the differents plants, 3 options were possibles to discuss with each plants :
* scheduled calls
* long polling
* socket

However we wanted our application to be real-time and to avoid the server overload, we agreed to choose the socket choice. The plant worker run on `socketIO`. Furthermore the socket allow us to know if the plant is really connected or not.
