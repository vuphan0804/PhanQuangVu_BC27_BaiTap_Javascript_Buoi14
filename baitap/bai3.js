// BT3#####################################

var x = prompt("Please enter x:");
var y = prompt("Please enter y:");
var z = prompt("Please enter z:");

var evenNumber = 0;
var oddNumber = 0;

if (x % 2 === 0) {
  evenNumber++;
} else {
  oddNumber++;
}
if (y % 2 === 0) {
  evenNumber++;
} else {
  oddNumber++;
}
if (z % 2 === 0) {
  evenNumber++;
} else {
  oddNumber++;
}

alert(`Co ${evenNumber} so chan va ${oddNumber} so le`);
