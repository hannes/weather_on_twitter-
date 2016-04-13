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
    var seko = "@"+tweet.user.screen_name;
    reply(seko);
    //console.log(tweet.coordinates);
  });
  stream.on('error', function(error) {
    throw error;
  });
});

function reply(reply) {
  console.log(reply);
  client.post('statuses/update', {status:reply},  function(error, tweet, response){
    if(error) {
      console.error(error);
      throw error;
  }
    console.log(tweet);  // Tweet body.
  });
}
