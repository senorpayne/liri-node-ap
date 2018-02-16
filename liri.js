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

  if (!error && response.statusCode === 200) {

  
    
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    console.log(JSON.parse(body)); 
  }
})};


function tweets(){
    var client = new Twitter(keys.twitter);
      

var twitterName= process.argv[3];;
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

  function random() {
    fs.readFile("random.txt", "utf8", function(error, data){
			if (!error) {
				//doWhatItSaysResults = data.split(",");
				spotifyThisSong(doWhatItSaysResults[0], doWhatItSaysResults[1]);
			} else {
				console.log("Error occurred" + error);
			}
		});
	};


	


    