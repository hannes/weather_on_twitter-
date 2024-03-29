fs = require('fs');

function cityAndDate(text , test) {
  var day = whichDay(text);
  fs.readFile('./cities.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    text = text.toLowerCase().split(" ");
    var arrayOfResult = [];
    for (var i=0; i<text.length; i++ ){
      if(data.indexOf("," + capitalize(text[i]) + "," ) !== -1){
        console.log(text[i]);
        test([text[i], day]) ;
        //arrayOfResult.push(capitalize(text[i]));
      }
    }
    //console.log(arrayOfResult);
    //return arrayOfResult ;
  });
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
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


exports.cityAndDate = cityAndDate ;
