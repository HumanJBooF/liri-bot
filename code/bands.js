require("dotenv").config();
const keys = require("./keys");
const Bands = require("bandsintown-events");
const bands = new Bands(keys.bandsInTown);
const moment = require("moment");
const DATE_FORMAT = 'YYYY-MM-DD';
const fs = require("fs");
const request = require("request");


module.exports.getConcerts = (artist) => {
    console.log(artist);
    //if no argument 
    if (!artist) {
        artist = "Black Sabbath"; //default to Black Sabbath
    } else {
        artist = process.argv[3]; 
    }
    //url for bands api
    let url = `https://rest.bandsintown.com/artists/${artist}/events?app_id=${bands}`;
    console.log(url)
    request(url, (error, response, events) => {
        if (error && response.statusCode === 200) {
            console.log(`ERROR! YOU HAVE AN ERROR: ${error}`);
        } else {
            // console.log(events)
            // console.log(JSON.parse(events, null, ""))

        }
    });
};