// Nhập n từ người dùng
let input = prompt("Nhập số lượng số nguyên tố muốn hiển thị:");
let n = parseInt(input);

// Kiểm tra nếu n không hợp lệ
if (isNaN(n) || n < 1) {
    console.log("Không hợp lệ");
} else {
    let count = 0; // Đếm số nguyên tố đã tìm được
    let num = 2;   // Bắt đầu từ số 2
    let primes = ""; // Chuỗi để lưu các số nguyên tố

    // Sử dụng vòng lặp để tìm n số nguyên tố
    while (count < n) {
        let isPrime = true;
        
        // Kiểm tra số nguyên tố
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes += num + " "; // Thêm số nguyên tố vào chuỗi
            count++;
        }
        num++;
    }

    // Hiển thị kết quả
    console.log(primes.trim());
}
