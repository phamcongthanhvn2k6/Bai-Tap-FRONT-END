// Nhập 3 số từ người dùng thông qua hàm prompt()
let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
let num2 = parseFloat(prompt("Nhập số thứ hai:"));
let num3 = parseFloat(prompt("Nhập số thứ ba:"));

// Kiểm tra và tìm số lớn nhất
let maxNumber = Math.max(num1, num2, num3);

// Hiển thị kết quả ra màn hình
alert("Số lớn nhất trong 3 số là: " + maxNumber);
