const body = document.body;

// Lấy các nút theo ID
const blueButton = document.getElementById("blueButton");
const redButton = document.getElementById("redButton");
const purpleButton = document.getElementById("purpleButton");

// Thêm sự kiện click cho từng nút
blueButton.addEventListener("click", function () {
    body.className = "blue-mode"; // Thay đổi lớp CSS của body
});

redButton.addEventListener("click", function () {
    body.className = "red-mode"; // Thay đổi lớp CSS của body
});

purpleButton.addEventListener("click", function () {
    body.className = "purple-mode"; // Thay đổi lớp CSS của body
});
