/**
 *    Đầu vào:
 *        - Nhập họ tên
 *        - Tổng thu nhập năm
 *        - Số người phụ thuộc
 *    Xử lí:
 *        - Thu nhập chịu thuế = Tổng thu nhập năm - 4000000 - Số người phụ thuộc * 1600000
 *        + Nếu Thu nhập chịu thuế <= 60000000 => Thu nhập chịu thuế * 5%
 *        + Nếu Thu nhập chịu thuế > 60000000 <= 120000000 => Thu nhập chịu thuế * 10%
 *        + Nếu Thu nhập chịu thuế > 120000000 <= 210000000 => Thu nhập chịu thuế * 15%
 *        + Nếu Thu nhập chịu thuế > 210000000 <= 384000000 => Thu nhập chịu thuế * 20%
 *        + Nếu Thu nhập chịu thuế > 384000000 <= 624000000 => Thu nhập chịu thuế * 25%
 *        + Nếu Thu nhập chịu thuế > 624000000 <= 960000000 => Thu nhập chịu thuế * 30%
 *        + Nếu Thu nhập chịu thuế > 960000000 => Thu nhập chịu thuế * 35%
 *    Đầu ra
 *        - In họ tên, thuế thu nhập cá nhân
 */
//Bài tập tính thuê thu nhập cá nhân
const thueMuc1 = 0.05;
const thueMuc2 = 0.1;
const thueMuc3 = 0.15;
const thueMuc4 = 0.2;
const thueMuc5 = 0.25;
const thueMuc6 = 0.3;
const thueMuc7 = 0.35;

function tinhThueTNCN() {
  const hoTen = document.getElementById("hoTen").value;
  const thuNhapNN = document.getElementById("tongThuNN").value * 1;
  const soNguoiPT = document.getElementById("soNguoiPT").value * 1;
  let thue = 0;
  let thuNhapChiuThue = thuNhapNN - 4000000 - soNguoiPT * 1600000;

  if (thuNhapChiuThue <= 0) {
    alert("Số tiền thu nhập không hợp lệ");
    return thue;
  }

  // Tính thuế theo các bậc thuế
  if (thuNhapChiuThue <= 60000000) {
    thue = thuNhapChiuThue * thueMuc1;
  } else if (thuNhapChiuThue >= 60000000 && thuNhapChiuThue <= 120000000) {
    thue = thuNhapChiuThue * thueMuc2;
  } else if (thuNhapChiuThue >= 120000000 && thuNhapChiuThue <= 210000000) {
    thue = thuNhapChiuThue * thueMuc3;
  } else if (thuNhapChiuThue >= 210000000 && thuNhapChiuThue <= 384000000) {
    thue = thuNhapChiuThue * thueMuc4;
  } else if (thuNhapChiuThue >= 384000000 && thuNhapChiuThue <= 624000000) {
    thue = thuNhapChiuThue * thueMuc5;
  } else if (thuNhapChiuThue >= 624000000 && thuNhapChiuThue <= 960000000) {
    thue = thuNhapChiuThue * thueMuc6;
  } else if (thuNhapChiuThue > 960000000) {
    thue = thuNhapChiuThue * thueMuc7;
  }

  // Hien thi ket qua'
  thue = new Intl.NumberFormat("vi", {
    style: "decimal",
    currency: "VND",
  }).format(thue);
  let result = `Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân: ${thue} VNĐ`;
  document.getElementById("divInform_3").innerHTML = result;
  document.getElementById("divInform_3").style.background = "#D1E7DD";
  document.getElementById("divInform_3").style.color = "black";
  document.getElementById("divInform_3").style.padding = "10px";
  document.getElementById("divInform_3").style.borderRadius = "10px";
}
