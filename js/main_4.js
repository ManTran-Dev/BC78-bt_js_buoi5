/**
 *    Đầu vào
 *        - Chọn loại khách hàng
 *        - Nhập mã KH
 *        - Số kênh cao cấp
 *    Xử lí:
 *        - Nếu chọn Nhà Dân -> Tiền cáp = phí xử lí ND + phí dịch vụ ND + số kênh cao cấp * thuê kênh ND
 *        + Nếu chọn Doanh nghiệp -> Xuất hiện ô Số kết nối
 *                  - Nếu Số kết nối <= 10 -> phí xử lí DN + phí dịch vụ DN + số kênh cao cấp * thuê kênh DN;
 *                  - Nếu Số kết nối > 10  -> phí xử lí DN + (Số kênh cao cấp * thuê kênh DN) + phí dịch vụ DN + (số kết nối - 10) * 5
 */
// Bài tập tính tiền cáp
// Nhà dân
const phiXuLiHD_ND = 4.5;
const phiDV_ND = 20.5;
const thueKenh_ND = 7.5;

// Doanh nghiệp
const phiXuLiHD_DN = 15;
const phiDV_DN = 75;
const thueKenh_DN = 50;

let tongTienCap = 0;

document.getElementById("loaiKH").addEventListener("change", function () {
  let type = getType();
  if (type == "NHA_DAN") {
    document.getElementById("soKetNoi").style.display = "none";
  } else if (type == "DOANH_NGHIEP") {
    document.getElementById("soKetNoi").style.display = "block";
  }
});

function getType() {
  let type = "";
  let loaiKH = document.querySelector("#loaiKH");
  const options = loaiKH.querySelectorAll("select option");
  if (options[1].selected) {
    type = "NHA_DAN";
  } else if (options[2].selected) {
    type = "DOANH_NGHIEP";
  }
  return type;
}

function tinhTienCap() {
  const type = getType();
  console.log(type);
  const maKH = document.getElementById("maKH").value;
  const soKenh = document.getElementById("soKenhCaoCap").value * 1;
  const soKenhKN = document.getElementById("soKetNoi").value * 1;

  switch (type) {
    case "NHA_DAN":
      const payment_ND = phiXuLiHD_ND + phiDV_ND + soKenh * thueKenh_ND;
      tongTienCap = payment_ND;
      break;
    case "DOANH_NGHIEP":
      document.getElementById("soKetNoi").style.display = "block";
      if (soKenhKN <= 10) {
        const payment_DN = phiXuLiHD_DN + phiDV_DN + thueKenh_DN * soKenh;
        tongTienCap = payment_DN;
      } else if (soKenhKN > 10) {
        const payment_1 = phiXuLiHD_DN + soKenh * thueKenh_DN;
        const payment_2 = phiDV_DN + (soKenhKN - 10) * 5;
        tongTienCap = payment_1 + payment_2;
      }
      break;
    default:
      alert("Hãy chọn loại khách hàng");
      tongTienCap = 0;
      break;
  }

  tongTienCap = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(tongTienCap);
  let result = `Mã khách hàng: ${maKH} - Tiền cáp: ${tongTienCap}`;
  document.getElementById("divInform_4").innerHTML = result;
  document.getElementById("divInform_4").style.background = "#D1E7DD";
  document.getElementById("divInform_4").style.color = "black";
  document.getElementById("divInform_4").style.padding = "10px";
  document.getElementById("divInform_4").style.borderRadius = "10px";
}
