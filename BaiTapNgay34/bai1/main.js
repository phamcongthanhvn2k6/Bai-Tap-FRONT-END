function add(event) {
    // Ngăn hành vi mặc định của form (ngăn việc tải lại trang khi nhấn nút Submit)
    event.preventDefault();

    // Lấy giá trị người dùng nhập từ các trường trong form
    const email = document.querySelector("#email").value.trim(); // Lấy giá trị email và loại bỏ khoảng trắng thừa
    const password = document.querySelector("#password").value.trim(); // Lấy giá trị mật khẩu
    const confirmPassword = document.querySelector("#confirmPassword").value.trim(); // Lấy giá trị xác nhận mật khẩu
    const errorMessage = document.querySelector("#errorMessage"); // Truy cập vào thẻ hiển thị thông báo lỗi (hoặc thành công)

    // Kiểm tra xem trường email có được nhập hay không
    if (!email) {
        errorMessage.textContent = "Email không được bỏ trống."; // Hiển thị thông báo lỗi
        return; // Dừng hàm tại đây
    }

    // Kiểm tra xem trường mật khẩu có được nhập hay không
    if (!password) {
        errorMessage.textContent = "Vui lòng nhập mật khẩu."; // Hiển thị thông báo lỗi
        return; // Dừng hàm tại đây
    }

    // Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp hay không
    if (password !== confirmPassword) {
        errorMessage.textContent = "Mật khẩu xác nhận không trùng khớp, xin nhập lại!"; // Hiển thị thông báo lỗi
        return; // Dừng hàm tại đây
    }

    const userList = JSON.parse(localStorage.getItem('userList')) || [];

    const status = userList.some(u => u.email === email);

    if (status) {
        errorMessage.textContent = "Email đã tồn tại.";
        return;
    }

    const newUser = { email: email, password: password };
    userList.push(newUser);

    localStorage.setItem('userList', JSON.stringify(userList));

    errorMessage.textContent = "Đăng ký thành công!";

}

