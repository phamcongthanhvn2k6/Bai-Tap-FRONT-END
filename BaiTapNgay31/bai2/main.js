const hienthi = document.hienthi;
const den = document.getElementById('den');
const toggleButton = document.getElementById("toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        toggleButton.textContent = "Chuyển Sang Nền Trắng";
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        toggleButton.textContent = "Chuyển Sang Nền Đen";
    }
});
