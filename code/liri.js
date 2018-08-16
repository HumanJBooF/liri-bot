require("dotenv").config();
let Spotify = require("node-spotify-api");
let keys = require("./keys");
let spotify = new Spotify(keys.spotify);
let fs = require("fs");
let request = require("request");


let cmd = process.argv[2];

console.log("keys", keys)