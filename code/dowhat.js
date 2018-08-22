require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
const spotSearch = require("./spot.js");

const doWhat = () => {

    fs.readFile('random.txt', 'utf8', (error, data) => {
       if (!error) {
         let ran_txt = data.split(',');
         console.log(ran_txt)
         let cmd = ran_txt[0];
         let arg2 = ran_txt[1];
         
         spotSearch.spotifySearch(cmd, arg2);
       } else {
           console.log(`ERROR IN THE MATRIX: ${error}`)
       }
     });
};

module.exports.doWhat = doWhat;