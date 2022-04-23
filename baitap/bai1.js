// BT co ban
// BT1#####################################
var a = prompt("Please enter a:");
var b = prompt("Please enter b:");
var c = prompt("Please enter c:");
// var a = 20;
// var b = 15;
// var c = 30;

var min = a;
var middle = a;
var max = a;

if (b > max) {
  max = b;
}
if (c > max) {
  max = c;
}
if (b < min) {
  min = b;
}
if (c < min) {
  min = c;
}
if (a !== min && a !== max) {
  a = middle;
}
if (b !== min && b !== max) {
  b = middle;
} else {
  c = middle;
}

// alert(min, middle, max);
alert(`${min},${middle},${max}`);
