// Chờ DOM được tải hoàn toàn trước khi thực thi mã
document.addEventListener("DOMContentLoaded", function () {
    // Danh sách người dùng đã đăng ký với email và mật khẩu
    const registeredUsers = [
        { email: "user1@example.com", password: "password123" },
        { email: "user2@example.com", password: "mysecurepassword" },
        { email: "user3@example.com", password: "admin2025" },
        { email: "phamcongt56@gmail.com", password: "12345" }, // Thêm một người dùng mới
    ];

    // Lấy các phần tử từ DOM
    const loginForm = document.getElementById("loginForm"); // Biểu mẫu đăng nhập
    const loginBtn = document.getElementById("loginBtn"); // Nút đăng nhập
    const emailInput = document.getElementById("email"); // Ô nhập email
    const passwordInput = document.getElementById("password"); // Ô nhập mật khẩu
    const errorMessage = document.getElementById("errorMessage"); // Khu vực hiển thị thông báo lỗi
    const successMessage = document.getElementById("successMessage"); // Khu vực hiển thị thông báo thành công

    // Hàm kiểm tra tính hợp lệ thông tin đăng nhập
    function validateLogin() {
        // Lấy giá trị email và password từ ô nhập
        const email = emailInput.value.trim(); // Loại bỏ khoảng trắng
        const password = passwordInput.value.trim();

        // Kiểm tra email và mật khẩu không được để trống
        if (email === "" || password === "") {
            errorMessage.textContent = "Email và mật khẩu không được bỏ trống."; // Thông báo lỗi khi để trống
            successMessage.textContent = ""; // Xóa thông báo thành công (nếu có)
            return false; // Trả về false để báo thông tin không hợp lệ
        }

        // Kiểm tra email có hợp lệ hay không bằng regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex kiểm tra định dạng email
        if (!emailRegex.test(email)) {
            errorMessage.textContent = "Email không hợp lệ."; // Thông báo lỗi định dạng email
            successMessage.textContent = ""; // Xóa thông báo thành công (nếu có)
            return false; // Trả về false nếu email không hợp lệ
        }

        // Kiểm tra email và mật khẩu có khớp với danh sách người dùng đã đăng ký
        const user = registeredUsers.find(
            (u) => u.email === email && u.password === password
        );

        // Nếu không tìm thấy người dùng khớp, thông báo lỗi
        if (!user) {
            errorMessage.textContent = "Email hoặc mật khẩu không đúng."; // Thông báo lỗi khi thông tin không khớp
            successMessage.textContent = ""; // Xóa thông báo thành công (nếu có)
            return false; // Trả về false vì đăng nhập không thành công
        }

        return true; // Trả về true nếu thông tin hợp lệ
    }

    // Hàm xử lý đăng nhập
    function handleLogin() {
        if (validateLogin()) { // Kiểm tra tính hợp lệ thông tin đăng nhập
            errorMessage.textContent = ""; // Xóa thông báo lỗi (nếu có)
            successMessage.textContent = "Đăng nhập thành công. Đang chuyển hướng..."; // Hiển thị thông báo thành công
            setTimeout(() => {
                window.location.href = "home.html"; // Chuyển hướng sang trang chủ sau 2 giây
            }, 2000); // Thời gian chờ là 2 giây
        }
    }

    // Gắn sự kiện nhấn vào nút đăng nhập
    loginBtn.addEventListener("click", handleLogin); // Khi nút đăng nhập được nhấn, gọi hàm handleLogin
});