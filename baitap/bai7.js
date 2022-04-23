var numberStr = prompt("Nhap vao so nguyen co 3 chu so:");

number = parseInt(numberStr, 10);

var theHundred = Math.trunc(number / 100);
var theTen = Math.trunc((number % 100) / 10);
var theOne = Math.trunc(number % 10);

var readTheHundred;
var readTheTen;
var readTheOne;

switch (theHundred) {
  case 1:
    readTheHundred = "Mot";
    break;
  case 2:
    readTheHundred = "Hai";
    break;
  case 3:
    readTheHundred = "Ba";
    break;
  case 4:
    readTheHundred = "Bon";
    break;
  case 5:
    readTheHundred = "Nam";
    break;
  case 6:
    readTheHundred = "Sau";
    break;
  case 7:
    readTheHundred = "Bay";
    break;
  case 8:
    readTheHundred = "Tam";
    break;
  case 9:
    readTheHundred = "Chin";
    break;
  default:
    break;
}
switch (theTen) {
  case 0:
    if (theTen === 0 && theOne === 0) {
      readTheTen = "chan";
    } else {
      readTheTen = "le";
    }
    break;
  case 1:
    readTheTen = "mot muoi";
    break;
  case 2:
    readTheTen = "hai muoi";
    break;
  case 3:
    readTheTen = "ba muoi";
    break;
  case 4:
    readTheTen = "bon muoi";
    break;
  case 5:
    readTheTen = "nam muoi";
    break;
  case 6:
    readTheTen = "sau muoi";
    break;
  case 7:
    readTheTen = "bay muoi";
    break;
  case 8:
    readTheTen = "tam muoi";
    break;
  case 9:
    readTheTen = "chin muoi";
    break;
  default:
    break;
}
switch (theOne) {
  case 0:
    readTheOne = "";
    break;
  case 1:
    readTheOne = "mot";
    break;
  case 2:
    readTheOne = "hai";
    break;
  case 3:
    readTheOne = "ba";
    break;
  case 4:
    readTheOne = "bon";
    break;
  case 5:
    readTheOne = "nam";
    break;
  case 6:
    readTheOne = "sau";
    break;
  case 7:
    readTheOne = "bay";
    break;
  case 8:
    readTheOne = "tam";
    break;
  case 9:
    readTheOne = "chin";
    break;
  default:
    break;
}

alert(`${readTheHundred} tram ${readTheTen} ${readTheOne}`);
