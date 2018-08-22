require("dotenv").config();
const fs = require("fs");
const request = require("request");


const movieSearch = (cmd, movieName) => {
    //if there is no argument AND command is movie-this
    if (!movieName && cmd === "movie-this") {
        movieName = "Taxi Driver"; //default to taxi driver
    } else {
        movieName = process.argv[3]
    }

    let omdb = `http://www.omdbapi.com/?t=${movieName}&plot=full&tomatoes=true&apikey=trilogy`


    //request to omdb
    request(omdb, (error, response, body) => {
        //if no error and response status code is 200 
        if (!error && response.statusCode === 200) {

            let bodyInfo = JSON.parse(body); //putting the parsed body into a variable
            console.log(`ONLINE MOVIE DATABASE RESULTS`);
            console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
            console.log(` `);
            console.log(`* Movie Title: ${bodyInfo.Title}`); //movie title
            console.log(`* Release Year: ${bodyInfo.Year}`); //year of release
            console.log(`* Rating: ${bodyInfo.Ratings[0].Source} - ${bodyInfo.Ratings[0].Value}`); //IMDB rating
            console.log(`* Rating: ${bodyInfo.Ratings[1].Source} - ${bodyInfo.Ratings[1].Value}`); //Rotten Tomatoes rating
            console.log(`* Country of origin: ${bodyInfo.Country}`); //Country of origin
            console.log(`* Language: ${bodyInfo.Language}`); //Language of movie
            console.log(`* Plot: ${bodyInfo.Plot}`); //Plot of movie
            console.log(`* Actors: ${bodyInfo.Actors}`); //List of Actors
            console.log(` `);
            console.log(`~~~~~~~~~~~~~~~~~~END~~~~~~~~~~~~~~~~~~~~`);
            fs.appendFile('log.txt', (`\r\n ###########OMDB########## \r\n Command used: "movie-this" \r\n  Movie Title: ${bodyInfo.Title} \r\n Release Year: ${bodyInfo.Year} \r\n Rating: ${bodyInfo.Ratings[0].Source} - ${bodyInfo.Ratings[0].Value} \r\n Rating: ${bodyInfo.Ratings[1].Source} - ${bodyInfo.Ratings[1].Value} \r\n Country of origin: ${bodyInfo.Country} \r\n Language: ${bodyInfo.Language} \r\n Plot: ${bodyInfo.Plot} \r\n Actors: ${bodyInfo.Actors} \r\n ##############END########## \r\n`), function (error) {
                if (error) throw error;
            });
        } else {
            //if there is an error console.log it
            console.log(`This is an ERROR: ${error}`);
            

        }
    });
};

module.exports.movieSearch = movieSearch;