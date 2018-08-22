require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const Twitter = require("twitter");
const client = new Twitter(keys.twitter);
const fs = require("fs");
const request = require("request");
const spotSearch = require("./spot.js");
const omdbSearch = require("./omdb.js");
const getTweets = require("./twit.js");


//put the arguments into variables
let cmd = process.argv[2];
let arg2 = process.argv[3];

//function takes to parameters(arguments) and sends them through the switch statement
const switchFunc = (cmd, arg2) => {
  //switch statement to check argument and decide what api to call to
  switch (cmd) {
    case "spotify-this-song":
      console.log(`SPOTIFY SWITCH`)
      spotSearch.spotifySearch(cmd, arg2);
      break;
    case "movie-this":
      console.log(`OMDB SWITCH`);
      omdbSearch.movieSearch(cmd, arg2);
      break;
    case "my-tweets":
      console.log(`TWITTER SWITCH`);
      getTweets.getTweets(cmd)
      break;
    case "do-what-it-says":
      console.log(`DO WHAT IT SAYS SWITCH`);
      fs.readFile('random.txt', 'utf8', (error, data) => {
        if (!error) {
          let ran_txt = data.split(',');
          console.log(ran_txt)
          let cmd = ran_txt[0];
          let arg2 = ran_txt[1];
          
          spotSearch.spotifySearch(cmd, arg2);
        }
      })
      break;
  }
}

switchFunc(cmd, arg2);
