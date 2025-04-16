const tendangnhap="huanrose@gmail.com";
const matkhau="123456";

document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
        if(username === tendangnhap && password === matkhau) {
            alert("Đăng nhập thành công!");
        }
        // Chuyển hướng đến trang khác nếu cần
        else{
            alert("Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin đăng nhập.");
        }
    });