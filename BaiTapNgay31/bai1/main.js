const hienthi = document.getElementById("hienthi");
const an = document.getElementById("an");
const hien = document.getElementById("hien");

an.addEventListener('click', () => {
    hienthi.style.display = 'none'; // Ẩn nội dung
});

hien.addEventListener('click', () => {
    hienthi.style.display = 'block'; // Hiển thị nội dung
});
