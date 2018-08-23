require("dotenv").config();
const keys = require("./keys");
const Twitter = require("twitter");
const client = new Twitter(keys.twitter);
const fs = require("fs");


const getTweets = (cmd) => {

    const params = {
        screen_name: 'HumanJBooF'
    };

    client.get('statuses/user_timeline', params, (error, tweets, response) => {
        if (!error && response.statusCode === 200 && cmd === "my-tweets") {
            for (let i = 0; i < tweets.length; i++) {
                let tweet = tweets[i].text;
                let tweetDate = tweets[i].created_at;
                //put all data into array so we can console log it
                let tweetData = [
                    `<<<<<<<<<<<<<<~Tweet # ${i}~>>>>>>>>>>>>>>>`,
                    ` `,
                    `Tweet: ${tweet}`,
                    `Created Date: ${tweetDate}`,
                    ` `,
                ].join(`\r\n`);

                console.log(tweetData);
                
                fs.appendFile('log.txt', `\r\n Command used: my-tweets \r\n ${tweetData}`, function (error) {
                    if (error) {
                        console.log(`HEY YOU GOT an error: ${error}`);
                    }
                })
            }
        } else {
            console.log(`YOU GOT YOURSELF AN ERROR: ${error}`);
        }
    });


}

module.exports.getTweets = getTweets;