var Twitter = require("twitter");
var getJSON = require("simple-get-json");
var client = require("./client");
var getCityName = require("./getCityName");
var loadWeatherInfo = require("./loadWeatherInfo");


client.stream('statuses/filter', {track:'@weather_sarea'}, function(stream) {
  stream.on('data', function(tweet) {

    reply(tweet);
    //console.log(tweet.coordinates);
  });
  stream.on('error', function(error) {
    throw error;
  });
});

function reply(tweet) {
  console.log(tweet);
  // var city = getCityName(tweet.text);
  // var day = whichDay(tweet.text);
  var reply_text = {
    status: "@"+tweet.user.screen_name + " "+ loadWeatherInfo.displayWeatherInfo("amsterdam" , 0) ,
    in_reply_to_status_id: tweet.id_str
  };
  client.post('statuses/update', reply_text ,  function(error, tweet, response){
    if(error) {
      console.error(error);
      throw error;
  }
  });
}
