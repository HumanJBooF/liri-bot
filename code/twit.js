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

                console.log(`<<<<<<<<<<<<<<~Tweet # ${i}~>>>>>>>>>>>>>>>`);
                console.log(` `);
                console.log(`Tweet: ${tweet}`);
                console.log(`Created Date: ${tweetDate}`);
                console.log(` `);
                fs.appendFile('log.txt', (`\r\n <<<<<<<<<~Tweet # ${i}~>>>>>>>>>>>>>> \r\n Command used: "my-tweets" \r\n Tweet: ${tweet} \r\n Date Created: ${tweetDate} \r\n`), function (error) {
                    if (error) {
                        console.log(`Yous gots an error: ${error}`);
                    }
                })
            }
        } else {
            console.log(`YOU GOT YOURSELF AN ERROR: ${error}`);
        }
    });


}

module.exports.getTweets = getTweets;