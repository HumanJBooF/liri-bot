require("dotenv").config();
let Spotify = require("node-spotify-api");
let keys = require("./keys");
let spotify = new Spotify(keys.spotify);
let fs = require("fs");
let request = require("request");


let songTitle = process.argv[3];

spotify.search({ type: 'track', query: songTitle, limit: 1 }, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    let dataSearch = data.tracks.items[0];
    
  console.log("Song name: ", dataSearch.name); 
  console.log("Artist name: ", dataSearch.album.artists[0].name);

  });