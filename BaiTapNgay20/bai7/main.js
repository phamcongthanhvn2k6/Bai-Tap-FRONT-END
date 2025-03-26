// Nhập n từ người dùng
let input = prompt("Nhập số lượng số Fibonacci muốn hiển thị:");
let n = parseInt(input);

// Kiểm tra nếu n không hợp lệ
if (isNaN(n) || n < 1) {
    console.log("Không hợp lệ");
} else {
    let fib1 = 1; // Số Fibonacci đầu tiên
    let fib2 = 1; // Số Fibonacci thứ hai

    // Hiển thị hai số đầu tiên
    let output = `${fib1} ${fib2}`;

    // Sử dụng vòng lặp để tính các số Fibonacci tiếp theo
    for (let i = 3; i <= n; i++) {
        let nextFib = fib1 + fib2; // Tính số Fibonacci tiếp theo
        output += ` ${nextFib}`;  // Thêm vào chuỗi kết quả
        fib1 = fib2;              // Cập nhật giá trị
        fib2 = nextFib;
    }

    // In kết quả
    console.log(output);
}
