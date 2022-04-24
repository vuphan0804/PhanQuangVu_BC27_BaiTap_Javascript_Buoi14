// BT2#####################################
/* 
INPUT: Nhập vào tên người sử dụng máy
PROCESS:
    1. Lấy được input: var member
    2. Tạo biến var machineSay chứa câu chào của máy
    3. So sánh các giá trị nhập vào và gán giá trị của câu chào cho biến machineSay
    4. Log kết quả ra màn hình
OUTPUT: Người sử dụng máy
*/

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
