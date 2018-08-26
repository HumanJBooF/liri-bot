require('dotenv').config();
const fs = require('fs');
const request = require('request');
const chalk = require("chalk");

const movieSearch = (cmd, movieName) => {
  //if there is no argument AND command is movie-this
  if (!movieName && cmd === 'movie-this') {
    movieName = 'Taxi Driver'; //default to taxi driver
  } else {
    movieName;
  }

  let omdb = `http://www.omdbapi.com/?t=${movieName}&plot=full&tomatoes=true&apikey=trilogy`;

  //request to omdb
  request(omdb, (error, response, body) => {
    //if no error and response status code is 200
    if (!error && response.statusCode === 200) {
      let bodyInfo = JSON.parse(body); //putting the parsed body into a variable
      //put all data into array so we can console log it
      let omdbData = [
        `ONLINE MOVIE DATABASE RESULTS`,
        `~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`,
        `* Movie Title: ${bodyInfo.Title}`,
        `* Release Year: ${bodyInfo.Year}`,
        `* Rating: ${bodyInfo.Ratings[0].Source} - ${bodyInfo.Ratings[0].Value}`,
        `* Rating: ${bodyInfo.Ratings[1].Source} - ${bodyInfo.Ratings[1].Value}`,
        `* Country of origin: ${bodyInfo.Country}`,
        `* Language: ${bodyInfo.Language} `,
        `* Actors: ${bodyInfo.Actors}`,
        `* Plot: ${bodyInfo.Plot}`,
        `~~~~~~~~~~~~~~~~~~END~~~~~~~~~~~~~~~~~~~~`
      ].join(`\r\n`);

      console.log(chalk`{bgMagenta.bold ${omdbData}}`);

      fs.appendFile(
        'log.txt',
        `\r\n Command used: movie-this \r\n ${omdbData}`,
        function (error) {
          if (error) throw error;
        }
      );
    } else {
      //if there is an error console.log it
      console.log(chalk`{bgWhite.Red This is an ERROR: ${error}}`);
    }
  });
};

module.exports.movieSearch = movieSearch;
