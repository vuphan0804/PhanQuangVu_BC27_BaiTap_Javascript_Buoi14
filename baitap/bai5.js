// BT5

var strDay = prompt("Nhap vao ngay:");
var strMonth = prompt("Nhap vao thang:");
var strYear = prompt("Nhap vao nam:");

var day = parseInt(strDay, 10);
var month = parseInt(strMonth, 10);
var year = parseInt(strYear, 10);

console.log("month", month);

// Thang 1, 3, 5, 7, 8, 10, 12 co 31 ngay
// Thang 4, 6, 9, 11 co 30 ngay
// Thang 2 co 28 ngay (nam khong nhuan)

// Next Date:
var nextDay, nextMonth, nextYear;
nextDay = day + 1;

var maxDayOfMonth;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    maxDayOfMonth = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    maxDayOfMonth = 30;
    break;
  case 2:
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
      maxDayOfMonth = 29;
    else maxDayOfMonth = 28;
    break;

  default:
    break;
}
console.log("maxDayOfMonth", maxDayOfMonth);

if (nextDay <= maxDayOfMonth) {
  // 30-01-2022 => 31-01-2022
  nextMonth = month;
  nextYear = year;
} else {
  nextMonth = month + 1;
  nextDay = 1;
  if (nextMonth > 12) {
    // 31-12-2022 => 01-1-2023
    nextMonth = 1;
    nextYear = year + 1;
  } else {
    // 31-01-2022 => 01-02-2022
    nextYear = year;
  }
}

var lastDay, lastMonth, lastYear;
lastDay = day - 1;
var minDayOfMonth = 1;
var maxDayOfPreviousMonth;

switch (month) {
  case 5:
  case 7:
  case 10:
  case 12:
    maxDayOfPreviousMonth = 30;
    break;
  case 1:
  case 2:
  case 4:
  case 6:
  case 8:
  case 9:
  case 11:
    maxDayOfPreviousMonth = 31;
    break;
  case 3:
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
      maxDayOfPreviousMonth = 29;
    else maxDayOfPreviousMonth = 28;
    break;

  default:
    break;
}

if (lastDay >= minDayOfMonth) {
  lastMonth = month;
  lastYear = year;
} else {
  lastMonth = month - 1;
  lastDay = maxDayOfPreviousMonth;
  if (lastMonth < 1) {
    lastMonth = 12;
    lastYear = year - 1;
  } else {
    lastYear = year;
  }
}

alert(`Next date: ${nextDay}-${nextMonth}-${nextYear}`);
alert(`Last date: ${lastDay}-${lastMonth}-${lastYear}`);
