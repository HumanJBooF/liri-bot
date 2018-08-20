require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
const request = require("request");
const moment = require('moment');

module.exports.movieSearch = (movieName) => {


    let omdb = `http://www.omdbapi.com/?t=${movieName}&plot=full&tomatoes=true&apikey=trilogy`
    
    //request to omdb
    request(omdb, function (error, response, body) {
        //if error and response status code is 200 
        if (error && response.statusCode === 200) {
            //do this
            console.log(`This is an ERROR: ${error}`);
            //if not keep on moving downward
        } else {
            
            let bodyInfo = JSON.parse(body); //putting the parsed body into a variable
            console.log(`~~~~~~~~~~~~~~~OMBD~~~~~~~~~~~~~~~~~`);
            console.log(`* Movie Title: ${bodyInfo.Title}`); //movie title
            console.log(`* Release Year: ${bodyInfo.Year}`); //year of release
            console.log(`* Rating: ${bodyInfo.Ratings[0].Source} ${bodyInfo.Ratings[0].Value}`); //IMDB rating
            console.log(`* Rating: ${bodyInfo.Ratings[1].Source} ${bodyInfo.Ratings[1].Value}`); //Rotten Tomatoes rating
            console.log(`* Country of origin: ${bodyInfo.Country}`); //Country of origin
            console.log(`* Language: ${bodyInfo.Language}`); //Language of movie
            console.log(`* Plot: ${bodyInfo.Plot}`); //Plot of movie
            console.log(`* Actors: ${bodyInfo.Actors}`); //List of Actors
            console.log(`~~~~~~~~~~~~~~~END~~~~~~~~~~~~~~~~~~~~~~`);

        }
    })
}