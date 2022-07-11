/*Bài 1
 * Input: Diem cua 3 mn
 * Process:
 *    1.Tinh diem uu tien = diem khu vuc + diem doi tuong
 *      -Diem khu vuc A : +2;
 *      -Diem khu vuc B : +1;
 *      -Diem khu vuc C : +0.5;
 *      -Doi tuong 1 : 2.5;
 *      -Doi tuong 2 : 1.5;
 *      -Doi tuong 3 : 1;
 *      -Tong diem = Diem 3 mon + diem khu vuc + doi tuong
 *    2.Tong diem
 *Output: Tong diem
 */
function vat() {
  var host = "Mike";
  var salaryOfYear = 100;
  var depend = 4;
  var vatPerSalary = salaryOfYear - 4 - depend * 1.6;
  var vatExport = calcVat(vatPerSalary);
  var totalVat = (vatPerSalary * vatExport) / 100;
  console.log("Họ tên:", host);
  console.log("Thu nhập chịu thuế",vatPerSalary,"triệu đồng");
  console.log("Thuế xuất là:",vatExport,"%");
  console.log("Thuế thu nhập cá nhân là:", totalVat,"triệu đồng");
}
vat();

function calcVat(vatPerSalary) {
  if (vatPerSalary < 60) {
    return 5;
  }
  if (vatPerSalary > 60 && vatPerSalary < 120) {
    return 10;
  }
  if (vatPerSalary > 120 && vatPerSalary < 210) {
    return 15;
  }
  if (vatPerSalary > 210 && vatPerSalary < 384) {
    return 20;
  }
  if (vatPerSalary > 384 && vatPerSalary < 624) {
    return 25;
  }
  if (vatPerSalary > 624 && vatPerSalary < 960) {
    return 30;
  }
  if (vatPerSalary > 960) {
    return 35;
  }
  return 0;
}


var customer1 = "Nhà Dân";
var customer2 = "Doanh Nghiệp";
var bill = 4.5;
var basicService = 20.5;
var channel = 10;
var totalsub


function calcChannel(){

}



