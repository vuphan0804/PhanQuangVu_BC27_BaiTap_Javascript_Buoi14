/* 
INPUT: Tọa độ 3 sinh viên, tọa độ của trường
PROCESS:
    1. Lấy được input (hardcode), var xA, yA , xB, yB, xC, yC, xSchool, ySchool
    2. Tạo biến var studentAToSchool, studentBToSchool, studentCToSchool chứa giá trị khoảng cách của các sinh viên tới trường
    3. Tạo biến var maxDistance, so sánh khoảng cách của các sinh viên mà gán giá trị lớn nhất cho maxDistance
    4. Log kết quả ra màn hình
OUTPUT: Sinh viên xa trường nhất
*/

var nameStudentA = "Nguyễn Văn A";
var nameStudentB = "Nguyễn Văn B";
var nameStudentC = "Nguyễn Văn C";
var nameStudentFurthest;

var xA = prompt("Nhập tọa độ x của sinh viên A:");
var yA = prompt("Nhập tọa độ y của sinh viên A:");
var xB = prompt("Nhập tọa độ x của sinh viên B:");
var yB = prompt("Nhập tọa độ y của sinh viên B:");
var xC = prompt("Nhập tọa độ x của sinh viên C:");
var yC = prompt("Nhập tọa độ y của sinh viên C:");

var xA = parseInt(xA, 10);
var yA = parseInt(yA, 10);
var xB = parseInt(xB, 10);
var yB = parseInt(yB, 10);
var xC = parseInt(xC, 10);
var yC = parseInt(yC, 10);

var xSchool = prompt("Nhập tọa độ x của trường:");
var ySchool = prompt("Nhập tọa độ y của trường:");

var xSchool = parseInt(xSchool, 10);
var ySchool = parseInt(ySchool, 10);

// console.log("binh phuong", Math.pow(xA - xSchool, 2));

var studentAToSchool = Math.sqrt(
  Math.pow(xA - xSchool, 2) + Math.pow(yA - ySchool, 2)
);

var studentBToSchool = Math.sqrt(
  Math.pow(xB - xSchool, 2) + Math.pow(yB - ySchool, 2)
);
var studentCToSchool = Math.sqrt(
  Math.pow(xC - xSchool, 2) + Math.pow(yC - ySchool, 2)
);

var maxDistance = studentAToSchool;

if (studentBToSchool > maxDistance) {
  maxDistance = studentBToSchool;
} else if (studentCToSchool > maxDistance) {
  maxDistance = studentCToSchool;
} else {
  maxDistance;
}

if (maxDistance === studentAToSchool) {
  nameStudentFurthest = nameStudentA;
} else if (maxDistance === studentBToSchool) {
  nameStudentFurthest = nameStudentB;
} else {
  nameStudentFurthest = nameStudentC;
}

alert(`Sinh viên có khoảng cách xa trường nhất ${nameStudentFurthest} `);
