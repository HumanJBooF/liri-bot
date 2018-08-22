require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");



const spotifySearch = (cmd, songTitle) => {

    // console.log(`Song Title: ${songTitle} Command: ${cmd}`);
    //if there is no argument AND command is spotify-this-song
    if (!songTitle && cmd === "spotify-this-song") {
        songTitle = "The Sign Ace of Base"; //default to 
    } else {    // if not
        songTitle; //take the argument in the songTitle variable
    }
    //search spotify
    spotify.search({
        type: 'track',    //type is song track
        query: songTitle  //use the songTitle variable
    },  (err, data) => {
        if (err) { //check for errors
            return console.log('Error occurred: ' + err);
        }

        //put this into a variable so we don't have to write it out 4 times
        let dataSearch = data.tracks.items[0];
        //setting up our console logs
        console.log(`Spotify song information results`);
        console.log(`---------------------------------`);
        console.log(` `);
        console.log(`Song Title:  ${dataSearch.name}`);
        console.log(`Artist name:  ${dataSearch.album.artists[0].name}`);
        console.log(`Preview Url: ${dataSearch.preview_url}`);
        console.log(`Album Name: ${dataSearch.album.name}`);
        console.log(` `);
        console.log(`---------------------------------`);
        fs.appendFile('log.txt', (`\r\n ~~~~~~SPOTIFY INFO~~~~~~~~ \r\n Command used: "spotify-this-search" \r\n Song Title: ${dataSearch.name} \r\n Artist Name: ${dataSearch.album.artists[0].name} \r\n Preview Url: ${dataSearch.preview_url} \r\n Album Name: ${dataSearch.album.name} \r\n ~~~~~~~~END~~~~~~~`), function (error) {
            if (error) throw error;
        })
    });
}
//export spotifySearch function
module.exports.spotifySearch = spotifySearch;