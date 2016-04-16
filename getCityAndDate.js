fs = require('fs');

function getCityName(text) {
  fs.readFile('./cities.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    text = text.toLowerCase().split(" ");
    //var arrayOfText = text.split(" ");
    for (var i=0; i<text.length; i++ ){
      if(data.indexOf(text[i]) != -1){
        console.log(text);
        return text[i] ;
      }
    }
  });
}


function whichDay(text) {
  var textLowerCase = text.toLowerCase();
  if(textLowerCase.indexOf("day after tomorrow") !== -1){
    return 2;
  }else {
    if(textLowerCase.indexOf("tomorrow") !== -1){
      return 1;
    }else {
      return 0;
    }
  }
}

function cityAndDat(text) {
  var query = [getCityName(text), whchday(text)];
  return query ;
}

exports.cityAndDat = cityAndDat ;
