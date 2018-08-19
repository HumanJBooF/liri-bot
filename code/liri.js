require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
const request = require("request");
const spotSearch = require("./spot.js");


let cmd = process.argv[2];


switch (cmd) {
  case "spotify-this-song":
  console.log('WORKING')
    spotSearch.spotifySearch();
    break;

}

