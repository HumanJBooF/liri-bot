require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
const request = require("request");


module.exports.spotifySearch = () => {

    let songTitle = process.argv[3];
    console.log(songTitle)

    if (!songTitle) {
        songTitle = "The Sign Ace of Base";
    } else {
        songTitle = process.argv[3];
    }

    spotify.search({
        type: 'track',
        query: songTitle
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

    
        let dataSearch = data.tracks.items[0];

        console.log(`Spotify song infomation results`);
        console.log(`---------------------------------`);
        console.log(`Song Title:  ${dataSearch.name}`);
        console.log(`Artist name:  ${dataSearch.album.artists[0].name}`);
        console.log(`Preview Url: ${dataSearch.preview_url}`);
        console.log(`Album Name: ${dataSearch.album.name}`);
        console.log(`---------------------------------`);
        fs.appendFile('log.txt', (`\r\n ~~~~~~SPOTIFY INFO~~~~~~~~ \r\n Song Title: ${dataSearch.name} \r\n Artist Name: ${dataSearch.album.artists[0].name} \r\n Preview Url: ${dataSearch.preview_url} \r\n Album Name: ${dataSearch.album.name} \r\n ~~~~~~~~END~~~~~~~`), function(error){
            if (error) throw error;
        })
    });
}

