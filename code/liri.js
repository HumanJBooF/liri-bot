require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
const request = require("request");
const moment = require('moment');
const spotSearch = require("./spot.js");



//put the second argument into a variable
let cmd = process.argv[2];

//switch statement to check second argument and decide what api to call to
switch (cmd) {
  case "spotify-this-song":
  console.log('WORKING')
    spotSearch.spotifySearch();
    break;

}

