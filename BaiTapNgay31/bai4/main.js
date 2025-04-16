// JavaScript để điều khiển modal
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn"); // Sửa lại tên biến cho khớp với HTML
const closeModal = document.querySelector(".close");

// Khi click "More", hiển thị modal
openModalBtn.onclick = function () {
    modal.style.display = "block";
};

// Khi click nút "x", ẩn modal
closeModal.onclick = function () {
    modal.style.display = "none";
};

// Khi click bên ngoài modal, cũng ẩn modal
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
