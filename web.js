var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var request = require('request');

var urls = [];

//just replace these urls with whatever ones you want
//the first one needs to be the url to the bot itself
//also, don't use it to use heroku to dos things. that is bad.
urls.push("http://wakeup-bot.herokuapp.com/");
urls.push("http://tinkerbot.herokuapp.com/");

setInterval(function(){

  for (var i = urls.length - 1; i >= 0; i--) {
    request(urls[i], function (error, response, body){
      console.log(urls[i] + response);
    });
  }

}, 30 * 60 * 1000);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});