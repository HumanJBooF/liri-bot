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
    }, (err, data) => {
        if (err) { //check for errors
            return console.log('Error occurred: ' + err);
        }

        //put this into a variable so we don't have to write it out 4 times
        let dataSearch = data.tracks.items[0];
        //put all data into array so we can console log it
        let spotData = [
            `Spotify song information results`,
            `---------------------------------`,
            ` `,
            `- Song Title:  ${dataSearch.name}`,
            `- Artist name:  ${dataSearch.album.artists[0].name}`,
            `- Preview Url: ${dataSearch.preview_url}`,
            `- Album Name: ${dataSearch.album.name}`,
            ` `,
            `---------------------------------`
        ].join(`\r\n`);

        console.log(spotData);
        
        fs.appendFile('log.txt', `\r\n Command used: spotify-this-song \r\n ${spotData}`, function (error) {
            if (error) throw error;
        })
    });
}
//export spotifySearch function
module.exports.spotifySearch = spotifySearch;