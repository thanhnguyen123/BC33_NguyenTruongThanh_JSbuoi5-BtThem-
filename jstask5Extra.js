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
  console.log("Thu nhập chịu thuế", vatPerSalary, "triệu đồng");
  console.log("Thuế xuất là:", vatExport, "%");
  console.log("Thuế thu nhập cá nhân là:", totalVat, "triệu đồng");
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



/*Bài 2
 * Input: Loại khách hàng gồm nhà dân và doanh nghiệp, mã khách hàng, số kênh cao cấp,
 *        số kênh cao cấp, số kết nối riêng cho doanh nghiệp
 * Process:
 *       1. Lấy được input.
 *       2. Thiết lập tính toán tiền cáp theo loại của khách hàng
 *       3. Xuất loại khách hàng, mã khách hàng, tiền cáp ra màn hình 
 *Output: Loại khách hàng, mã khách hàng, tiền cáp.
 */
var customer = "Nhà dân";
// var customer = "Doanh nghiệp";
var codePersonal = 38505;
var codeBusiness = 46905;
var numberOfChannels = 11;
var connection = 11;
var Personal;
var totalPersonal = calcPersonal(Personal);
var Business;
var totalBusiness = calcBusiness(Business);
if (customer === "Nhà dân") {
  console.log(
    "Mã khách hàng cá nhân:",
    codePersonal,
    "; Tiền cáp:",
    totalPersonal,
    "$"
  );
} else if (customer === "Doanh nghiệp") {
  console.log(
    "Mã khách hàng doanh nghiệp:",
    codeBusiness,
    "; Tiền cáp:",
    totalBusiness,
    "$"
  );
}
function calcPersonal() {
  var Personal = 4.5 + 20.5 + numberOfChannels * 7.5;
  return Personal;
}
function calcBusiness() {
  if (connection <= 10 && connection > 0) {
    var Business = 75 + 15 + numberOfChannels * 50;
  } else {
    var Business = 75 + (connection - 10) * 5 + 15 + numberOfChannels * 50;
  }
  return Business;
}