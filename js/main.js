/**
 *    Đầu vào:
 *        - Nhập vào điểm chuẩn
 *        - chọn khu vực
 *        - chọn đối tượng
 *        - Nhập điểm thứ 1
 *        - Nhập điểm thứ 2
 *        - Nhập điểm thứ 3
 *    Xử lí:
 *        - KV: A -> +2 điểm
 *        - KV: B -> +3 điểm
 *        - KV: C -> +0.5 điểm
 *        - ĐT: 1 -> +2.5 điểm
 *        - ĐT: 2 -> +1.5 điểm
 *        - ĐT: 3 -> +1 điểm
 *     + Nếu điểm 3 môn + KV + ĐT >= Điểm chuẩn => Đậu
 *     + Nếu điểm 3 môn + KV + ĐT < Điểm chuẩn => Rớt
 *     + Hoặc 1 trong 3 môn có 1 môn 0đ => Rớt
 *    Đầu ra:
 *        - In kết quả: đậu/rớt + số điểm
 */

// Bài tập Quản lý sinh viên

function quanLySV() {
  const diemChuan = document.getElementById("diemChuan").value * 1;
  const kv = document.getElementById("kv").value;
  const dt = document.getElementById("dt").value;
  const diem1 = document.getElementById("diem1").value * 1;
  const diem2 = document.getElementById("diem2").value * 1;
  const diem3 = document.getElementById("diem3").value * 1;
  let diemTong = diem1 + diem2 + diem3;
  let status = "";
  if (kv == "A") {
    diemTong += 2;
  } else if (kv == "B") {
    diemTong += 1;
  } else if (kv == "C") {
    diemTong += 0.5;
  } else {
    diemTong += 0;
  }
  if (dt == "1") {
    diemTong += 2.5;
  } else if (dt == "2") {
    diemTong += 1.5;
  } else if (dt == "3") {
    diemTong += 1;
  } else {
    diemTong += 0;
  }
  if (diemTong >= diemChuan && diem1 !== 0 && diem2 !== 0 && diem3 !== 0) {
    status = `Bạn đã đậu. Tổng điểm: ${diemTong} `;
  } else if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
    status = `Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0`;
  } else if (diemTong < diemChuan) {
    status = `Bạn đã rớt. Tổng điểm: ${diemTong} `;
  }
  let result = `${status}`;
  document.getElementById("divInform_1").innerHTML = result;
  document.getElementById("divInform_1").style.background = "#D1E7DD";
  document.getElementById("divInform_1").style.color = "black";
  document.getElementById("divInform_1").style.padding = "10px";
  document.getElementById("divInform_1").style.borderRadius = "10px";
}
