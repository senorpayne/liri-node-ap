require("dotenv").config();
var request = require('request');
var spotify = require('spotify');
var Twitter = require('twitter');
var fs = require("fs");
var keys = require("./keys.js");

var action = process.argv[2];

switch (action) {
    case "my-tweets":
      tweets();
      break;
  
    case "spotify-this-song":
      spotifyname();
      break;
  
    case "movie-this":
      movie();
      break;
  
    case "do-what-it says":
      random();
      break;
  }

  function movie(){

var a = process.argv[3];

request("http://www.omdbapi.com/?t=" + a + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    console.log(JSON.parse(body)); 
  }
})};
movie();

function tweets(){
    var client = new Twitter({
        consumer_key: 'keys.twitterKeys.consumer_key',
        consumer_secret: 'keys.twitterKeys.consumer_secret',
        access_token_key: 'keys.twitterKeys.access_token_key',
        access_token_secret: 'keys.twitterKeys.access_token_secret', 


});

var twitterName= mrsenorpayne1;
var params = {screen_name: 'twitterName'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
tweets();

function spotifyname() {
    var songname= process.argv[3];
    spotify.search({ type: 'track', query: songname }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
    console.log(data);
    
    })}
spotifyname();
function random(){

}

    }