var Twitter = require("twitter");
var getJSON = require("simple-get-json");
var client = require("./client");
var getCityAndDate = require("./getCityAndDate");
var loadWeatherInfo = require("./loadWeatherInfo");


client.stream('statuses/filter', {track:'@weather_sarea'}, function(stream) {
  stream.on('data', reply );
  stream.on('error', function(error) {
    console.error(error);
    throw error;
  });
});

function reply(tweet) {
  console.log(tweet);
  //var cityAndDat = getCityAndDate.cityAndDat(tweet.text);
  var reply_text = {
    status: "@"+tweet.user.screen_name + " " + loadWeatherInfo.displayWeatherInfo("amsterdam" , 0 , function(reply){
      postReply(reply);
    }) ,
    in_reply_to_status_id: tweet.id_str
  };
  client.post('statuses/update', reply_text ,  function(error, tweet, response){
    if(error) {
      console.error(error);
      throw error;
  }
  });
}
