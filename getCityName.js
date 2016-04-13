fs = require('fs');

var text = "give me weather of damascus";

fs.readFile('./city.list.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var arrayOfText = text.split(" ");
  //var bufferString = data.split(" ");

  for (var i=0; i<arrayOfText.length; i++ ){
    var word= "\"" + arrayOfText[i] + "\"";
    if(data.indexOf(word) != -1){
      console.log(arrayOfText[i]);
    }
  }

});
