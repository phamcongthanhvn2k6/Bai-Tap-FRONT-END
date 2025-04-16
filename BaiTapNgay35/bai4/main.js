// Initial employee data
let employees = [
    { id: 1, name: "Phạm Công Thành", role: "Tổng Giám Đốc" },
    { id: 2, name: "Nguyễn Quang Hoàng", role: "Trưởng Phòng" },
    { id: 3, name: "Nguyễn Công Trứ", role: "Phó Giám Đốc" },
    { id: 4, name: "Đỗ Tiến Phúc", role: "Bảo vệ" },
];

if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
} else {
    employees = JSON.parse(localStorage.getItem("employees"));
}



function UpdateData() {
    localStorage.setItem("employees", JSON.stringify(employees));
}

function addEmployee() {
    const name = document.querySelector('#name').value.trim();
    const role = document.querySelector('#role').value.trim();

    if (!name || !role) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const newEmployee = {
        id: Date.now(),
        name: name,
        role: role
    };
    employees.push(newEmployee);
    UpdateData();
    renderData();
}

const itemsPerPage = 3; // Số lượng nhân viên hiển thị trên mỗi trang
let currentPage = 1; // Trang hiện tại

// Hàm hiển thị dữ liệu với phân trang
function renderData() {
    const startIndex = (currentPage - 1) * itemsPerPage; // Chỉ số bắt đầu của danh sách hiện tại
    const endIndex = currentPage * itemsPerPage; // Chỉ số kết thúc của danh sách hiện tại
    const paginatedEmployees = employees.slice(startIndex, endIndex); // Chỉ lấy dữ liệu nhân viên thuộc trang hiện tại

    const employeeList = document.querySelector('#employee-list');
    let dataHTML = "";

    // Lặp qua danh sách nhân viên được phân trang và tạo hàng (row) cho bảng
    for (let i = 0; i < paginatedEmployees.length; i++) {
        dataHTML += `
            <tr>
                <td>${startIndex + i + 1}</td> <!-- STT nhân viên -->
                <td>${paginatedEmployees[i].name}</td> <!-- Tên nhân viên -->
                <td>${paginatedEmployees[i].role}</td> <!-- Chức vụ -->
                <td>
                    <button onclick="edit(${startIndex + i})">Sửa</button> <!-- Nút sửa -->
                    <button onclick="deleteEmployees(${paginatedEmployees[i].id})">Xóa</button> <!-- Nút xóa -->
                </td>
            </tr>
        `;
    }

    employeeList.innerHTML = dataHTML; // Thêm các hàng đã tạo vào bảng

    renderPagination(); // Hiển thị các nút phân trang
}

// Hàm hiển thị các nút phân trang
function renderPagination() {
    const totalPages = Math.ceil(employees.length / itemsPerPage); // Tổng số trang
    const pagination = document.querySelector('#pagination');
    let paginationHTML = "";

    // Nút "Previous" (Trang trước)
    if (currentPage > 1) {
        paginationHTML += `<button onclick="changePage(${currentPage - 1})">Previous</button>`;
    }

    // Nút số trang
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<button onclick="changePage(${i})">${i}</button>`;
    }

    // Nút "Next" (Trang tiếp theo)
    if (currentPage < totalPages) {
        paginationHTML += `<button onclick="changePage(${currentPage + 1})">Next</button>`;
    }

    pagination.innerHTML = paginationHTML; // Thêm các nút phân trang vào giao diện
}

// Hàm thay đổi trang
function changePage(page) {
    currentPage = page; // Cập nhật trang hiện tại
    renderData(); // Hiển thị dữ liệu mới
}

// Gọi hàm render lần đầu để hiển thị dữ liệu và phân trang
renderData();

// Delete employee
function deleteEmployees(id) {
    if (!confirm("Bạn Có Muốn Xóa?")) {
        return;
    }
    employees = employees.filter(employee => employee.id !== id);
    UpdateData();
    renderData();
}

// Edit employee
function edit(index) {
    const employee = employees[index];
    document.querySelector('#name').value = employee.name;
    document.querySelector('#role').value = employee.role;

    document.querySelector('button#save').onclick = () => {
        employee.name = document.querySelector('#name').value.trim();
        employee.role = document.querySelector('#role').value.trim();
        UpdateData();
        renderData();
    };
}

// Initial render
renderData();