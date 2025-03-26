// Nhập số tiền cần rút từ người dùng
let amount = parseInt(prompt("Nhập số tiền cần rút (phải chia hết cho 1.000):"));

// Kiểm tra nếu số tiền không hợp lệ (không phải là số hoặc không chia hết cho 1000)
if (isNaN(amount)) {
    console.log("Vui lòng nhập một số hợp lệ.");
} else if (amount % 1000 !== 0) {
    console.log("Số tiền phải chia hết cho 1.000!");
} else {
    // Khởi tạo mệnh giá tiền lớn nhất
    let denomination = 500000; 
    let result = ""; // Chuỗi để lưu kết quả

    // Sử dụng vòng lặp để xử lý từng mệnh giá
    while (denomination >= 1000) {
        // Tính số lượng tờ tiền với mệnh giá hiện tại
        let count = Math.floor(amount / denomination);

        // Nếu số lượng tờ > 0, thêm vào kết quả
        if (count > 0) {
            result += `${denomination} - ${count} tờ\n`;
            amount -= count * denomination; // Trừ số tiền đã được rút
        }

        // Chuyển sang mệnh giá nhỏ hơn
        if (denomination === 500000) denomination = 200000;
        else if (denomination === 200000) denomination = 100000;
        else if (denomination === 100000) denomination = 50000;
        else if (denomination === 50000) denomination = 20000;
        else if (denomination === 20000) denomination = 10000;
        else if (denomination === 10000) denomination = 5000;
        else if (denomination === 5000) denomination = 2000;
        else if (denomination === 2000) denomination = 1000;
        else break; // Kết thúc nếu đã xử lý đến mệnh giá 1.000
    }

    // Hiển thị kết quả cuối cùng
    console.log(result);
}
