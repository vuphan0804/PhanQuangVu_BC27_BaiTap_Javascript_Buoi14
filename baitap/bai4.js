// BT4#####################################

var strA = prompt("Please enter a:");
var strB = prompt("Please enter b:");
var strC = prompt("Please enter c:");

var a = parseInt(strA, 10);
var b = parseInt(strB, 10);
var c = parseInt(strC, 10);

console.log(typeof a);

var result = "";

if (a + b <= c || a + c <= b || b + c <= a) {
  result = "Khong hop le";
} else {
  if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
    result = "Tam giac can";
  }
  if (a === b && a === c) {
    result = "Tam giac deu";
  }
  if (
    a * a + b * b === c * c ||
    a * a === b * b + c * c ||
    a * a + c * c === b * b
  ) {
    result = "Tam giac vuong";
  } else {
    ("Tam giac binh thuong");
  }
}

alert(`${result}`);
