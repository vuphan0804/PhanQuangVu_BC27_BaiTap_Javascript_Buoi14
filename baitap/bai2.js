// BT2#####################################

var member = prompt("Ai la nguoi su dung may?");
var machineSay = "";

switch (member) {
  case "B":
    machineSay = "Chao bo!";
    break;
  case "M":
    machineSay = "Chao me!";
    break;
  case "A":
    machineSay = "Chao anh!";
    break;
  case "E":
    machineSay = "Chao em!";
    break;
  default:
    machineSay = "Nhap vao khong hop le";
    break;
}
alert(`${machineSay}`);
