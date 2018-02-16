require("dotenv").config();
var request = require('request');
var Twitter = require('twitter');
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var action = process.argv[2];
console.log("Choose");
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


function tweets(){
    var client = new Twitter(keys.twitter);
      

var twitterName= 'mrsenorpayne1';
var params = {screen_name: twitterName};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) { for(var i = 0; i < tweets.length; i++)
    console.log(tweets[i].created_at);
    for(var i = 0; i < tweets.length; i++)
    console.log(tweets[i].text);
  }
  
});
}
function spotifyname() {
  var spotify = new Spotify(keys.spotify);
   
     var songname= process.argv[3];
     spotify.search({ type: 'track', query: songname }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
     // console.log(songname.artists); 
   //console.log(data.tracks.items[1]); 
   console.log("Artist: "+JSON.stringify(data.tracks.items[0].artists[0].name))
   console.log("Track: "+JSON.stringify(data.tracks.items[0].name))
   console.log("Link: "+JSON.stringify(data.tracks.items[0].href))
   console.log("Album: "+JSON.stringify(data.tracks.items[0].album.name))
    });
  
  }

  function random(){

  }


    