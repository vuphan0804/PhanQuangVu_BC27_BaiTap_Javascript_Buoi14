// BT6

var strMonth = prompt("Nhap vao thang:");
var strYear = prompt("Nhap vao nam:");

var month = parseInt(strMonth, 10);
var year = parseInt(strYear, 10);

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayOfMonth = `Thang ${month} co 31 ngay`;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayOfMonth = `Thang ${month} co 30 ngay`;
    break;
  case 2:
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
      dayOfMonth = `Thang ${month} co 29 ngay`;
    else dayOfMonth = `Thang ${month} co 28 ngay`;
    break;

  default:
    break;
}

alert(`${dayOfMonth}`);
