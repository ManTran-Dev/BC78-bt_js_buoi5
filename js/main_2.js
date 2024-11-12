/**
 *    Đầu vào
 *        - Nhập họ tên khách hàng
 *        - Nhập số kw sử dụng
 *    Xử lí:
 *        - 50kw đầu = 500đ/kw => số kw sử dụng * 500đ
 *        - 50kw kế  = 650đ/kw => (50*500đ) + (số kw sử dụng - 50) * 650đ
 *        - 100kw kế = 850đ/kw => (50*500đ) + (50 * 650đ) + (số kw sử dụng - 100) * 850đ
 *        - 150kw kế = 1100đ/kw => (50*500đ) + (50 * 650đ) + (100 * 850đ) + (số kw sử dụng - 200) * 1100đ
 *        - > 350kw  = 1300đ/kw => (50*500đ) + (50 * 650đ) + (100 * 850đ) + (150 * 1100đ) + (số kw sử dụng - 350) * 1300;
 *    Đầu ra
 *        - In họ tên khách hàng, số tiền điện
 */

//Bài tập tính tiền điện
const tienDien_1 = 500;
const tienDien_2 = 650;
const tienDien_3 = 850;
const tienDien_4 = 1100;
const tienDien_5 = 1300;
let total = 0;

function tienDien() {
  const tenKH = document.getElementById("nameKH").value;
  const soKw = document.getElementById("kwDien").value * 1;

  if (soKw == 0) {
    alert("Số kw không hợp lệ! Vui là nhập lại");
  } else if (soKw > 0 && soKw <= 50) {
    const payment1 = soKw * tienDien_1;
    total = payment1;
  } else if (soKw > 50 && soKw <= 100) {
    const payment1 = 50 * tienDien_1;
    const payment2 = (soKw - 50) * tienDien_2;
    total = payment1 + payment2;
  } else if (soKw > 100 && soKw <= 200) {
    const payment1 = 50 * tienDien_1;
    const payment2 = 50 * tienDien_2;
    const payment3 = (soKw - 100) * tienDien_3;
    total = payment1 + payment2 + payment3;
  } else if (soKw > 200 && soKw <= 350) {
    const payment1 = 50 * tienDien_1;
    const payment2 = 50 * tienDien_2;
    const payment3 = 100 * tienDien_3;
    const payment4 = (soKw - 200) * tienDien_4;
    total = payment1 + payment2 + payment3 + payment4;
  } else if (soKw > 350) {
    const payment1 = 50 * tienDien_1;
    const payment2 = 50 * tienDien_2;
    const payment3 = 100 * tienDien_3;
    const payment4 = 150 * tienDien_4;
    const payment5 = (soKw - 350) * tienDien_5;
    total = payment1 + payment2 + payment3 + payment4 + payment5;
  }
  total = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  }).format(total);
  let result = `Họ tên: ${tenKH}; Tiền điện: ${total}`;
  document.getElementById("divInform_2").innerHTML = result;
  document.getElementById("divInform_2").style.background = "#D1E7DD";
  document.getElementById("divInform_2").style.color = "black";
  document.getElementById("divInform_2").style.padding = "10px";
  document.getElementById("divInform_2").style.borderRadius = "10px";
}
