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
const doWhat = require("./dowhat.js");


//put the arguments into variables
let cmd = process.argv[2];
let arg2 = process.argv.slice(3).join(" ");

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
      doWhat.doWhat();
      break;
    default: //if no arguments given
      console.log(`<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>`)
      console.log(`<~~~> Couldn't find user command, please use on of the following. <~~~>`);
      console.log(`<~~~> For Spotify <~~> use <~~> spotify-this-song <~~~>`);
      console.log(`<~~~> For Twiiter <~~> use <~~> my-tweets <~~~>`);
      console.log(`<~~~> For OMDB <~~> use <~~> movie-this <~~~>`);
      console.log(`<~~~> For Random <~~> use <~~> do-what-it-says <~~~>`);
      console.log(`<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>`);
      break;
  }
};

//get the whole thing s
switchFunc(cmd, arg2);
