// Yêu cầu người dùng nhập số năm kinh nghiệm
let experience = parseFloat(prompt("Nhập số năm kinh nghiệm của nhân viên:"));

// Kiểm tra và xếp loại nhân viên
if (experience < 1) {
    console.log("Mới vào nghề");
} else if (experience >= 1 && experience <= 3) {
    console.log("Nhân viên có kinh nghiệm");
} else if (experience >= 4 && experience <= 6) {
    console.log("Chuyên viên");
} else if (experience > 6) {
    console.log("Quản lý");
} else {
    console.log("Dữ liệu không hợp lệ! Vui lòng nhập số hợp lệ.");
}
