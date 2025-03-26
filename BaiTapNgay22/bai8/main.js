// Nhập mảng từ người dùng
let input = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy (ví dụ: 2,3,3,2,5):");
let arr = input.split(","); // Tách chuỗi thành mảng

// Chuyển đổi mảng sang kiểu số nguyên
for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i], 10);
}

// Tạo đối tượng lưu số lần xuất hiện
let count = {};
for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]] === undefined) {
        count[arr[i]] = 1; // Nếu phần tử chưa có, khởi tạo với giá trị 1
    } else {
        count[arr[i]]++; // Tăng số lần xuất hiện
    }
}

// Tìm số lần xuất hiện lớn nhất
let maxCount = -1;
for (let key in count) {
    if (count[key] > maxCount) {
        maxCount = count[key]; // Cập nhật số lần xuất hiện lớn nhất
    }
}

// Tìm các phần tử có số lần xuất hiện bằng maxCount
let candidates = [];
for (let key in count) {
    if (count[key] === maxCount) {
        candidates.push(parseInt(key, 10)); // Thêm phần tử vào danh sách ứng viên
    }
}

// Tìm phần tử nhỏ nhất trong danh sách các ứng viên
let minElement = candidates[0];
for (let i = 1; i < candidates.length; i++) {
    if (candidates[i] < minElement) {
        minElement = candidates[i]; // Cập nhật phần tử nhỏ nhất
    }
}

// Hiển thị kết quả
alert("Phần tử có số lần xuất hiện nhiều nhất: " + minElement);