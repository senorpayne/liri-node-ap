require("dotenv").config();
var request = require('request');
var spotify = require('spotify');
var Twitter = require('twitter');
var fs = require("fs");

var action = process.argv[2];
var a = process.argv[3];

switch (action) {
    case "my-tweets":
      tweets();
      break;
  
    case "spotify-this-song":
      spotify();
      break;
  
    case "movie-this":
      movie();
      break;
  
    case "do-what-it says":
      random();
      break;
  }

  function movie(){

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