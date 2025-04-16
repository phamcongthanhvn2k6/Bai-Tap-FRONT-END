document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("employee-name"); // Ô nhập tên nhân viên
    const positionInput = document.getElementById("employee-position"); // Ô nhập chức vụ
    const addEmployeeBtn = document.getElementById("add-employee-btn"); // Nút thêm nhân viên
    const employeeTableBody = document.getElementById("employee-table-body"); // Bảng danh sách nhân viên

    // Lấy danh sách nhân viên từ Local Storage hoặc khởi tạo danh sách rỗng
    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    // Hàm lưu danh sách nhân viên vào Local Storage
    function saveToLocalStorage() {
        localStorage.setItem("employees", JSON.stringify(employees));
    }

    // Hàm hiển thị danh sách nhân viên trên giao diện
    function renderEmployees() {
        employeeTableBody.innerHTML = ""; // Xóa bảng cũ
        employees.forEach((employee, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
                <td>
                    <button onclick="deleteEmployee(${index})" style="background-color: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Xóa</button>
                </td>
            `;
            employeeTableBody.appendChild(row);
        });
    }

    // Hàm thêm nhân viên mới
    function addEmployee() {
        const name = nameInput.value.trim(); // Lấy giá trị từ ô nhập tên
        const position = positionInput.value.trim(); // Lấy giá trị từ ô nhập chức vụ

        // Kiểm tra dữ liệu hợp lệ
        if (name === "" || position === "") {
            alert("Vui lòng nhập đầy đủ thông tin nhân viên!"); // Thông báo lỗi
            return;
        }

        // Thêm nhân viên mới vào danh sách
        employees.push({ name, position });
        saveToLocalStorage(); // Lưu danh sách vào Local Storage
        renderEmployees(); // Hiển thị danh sách mới
        nameInput.value = ""; // Xóa nội dung trong ô nhập tên
        positionInput.value = ""; // Xóa nội dung trong ô nhập chức vụ
    }

    // Hàm xóa nhân viên
    window.deleteEmployee = function (index) {
        employees.splice(index, 1); // Xóa nhân viên khỏi danh sách
        saveToLocalStorage(); // Cập nhật lại Local Storage
        renderEmployees(); // Hiển thị lại danh sách
    };

    // Gắn sự kiện thêm nhân viên vào nút "Thêm Nhân Viên"
    addEmployeeBtn.addEventListener("click", addEmployee);

    // Hiển thị danh sách nhân viên khi tải trang
    renderEmployees();
});