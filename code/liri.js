require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
const request = require("request");
const moment = require('moment');
const spotSearch = require("./spot.js");
const omdbSearch = require("./omdb.js");
const bandsSearch = require("./bands.js");


//put the arguments into variables
let cmd = process.argv[2];
let arg2 = process.argv[3]
//switch statement to check argument and decide what api to call to
switch (cmd) {
  case "spotify-this-song":
    console.log(`SPOTIFY SWITC`)
    spotSearch.spotifySearch(arg2);
    break;
  case "movie-this":
    console.log(`OMDB SWITCH`);
    omdbSearch.movieSearch(arg2);
    break;
  case "concert-this":
    console.log(`Bands SWITCH`);
    bandsSearch.getConcerts(arg2);
    break;
}

