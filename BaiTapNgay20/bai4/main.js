let chuoi = prompt("Nhập chuỗi cần kiểm tra:");
let kyTu = prompt("Nhập ký tự cần kiểm tra:");

if (chuoi.includes(kyTu)) {
    alert("Ký tự " + kyTu + " có tồn tại trong chuỗi.");
} else {
    alert("Ký tự " + kyTu + " không tồn tại trong chuỗi.");
}
