var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'dtzNUmtp3QoIHCgxSlmpQ27N2',
  consumer_secret: 'FzcigNcmyc0JZYf6KODEoG0oxuERuZZBBv0ck2cINzwc6kKhM2',
  access_token_key: '716905446540492800-KUdC9oQY5QkaPOexaunpB9c8bX3LUnZ',
  access_token_secret: 't6HhOj05pZR9jZdn6SN7pfvltI4UGyneE2IKm4YAm0R3c'
});
var replay ;

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
  var reply_text = {
    status: "@"+tweet.user.screen_name + " reply test" ,
    in_reply_to_status_id: tweet.id_str
  };
  client.post('statuses/update', reply_text ,  function(error, tweet, response){
    if(error) {
      console.error(error);
      throw error;
  }
  });
}
