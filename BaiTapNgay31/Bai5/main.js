// Dữ liệu mẫu danh sách nhân viên
const employees = [
    { id: 1, name: "Nguyễn Văn A", position: "Nhân viên", salary: 10000000 },
    { id: 2, name: "Trần Thị B", position: "Quản lý", salary: 20000000 },
    { id: 3, name: "Lê Văn C", position: "Giám đốc", salary: 30000000 },
];

// Hàm tạo bảng và hiển thị danh sách nhân viên
function renderTable() {
    const tableContainer = document.getElementById("tableContainer");

    // Xóa nội dung cũ của bảng
    tableContainer.innerHTML = "";

    // Tạo bảng
    const table = document.createElement("table");

    // Gộp tiêu đề và nội dung bảng
    table.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Tên</th>
                <th>Chức Vụ</th>
                <th>Lương</th>
            </tr>
        </thead>
        <tbody>
            ${employees.map(employee => `
                <tr>
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.position}</td>
                    <td>${employee.salary.toLocaleString()} VND</td>
                </tr>
            `).join('')}
        </tbody>
    `;

    // Thêm bảng vào vùng chứa
    tableContainer.appendChild(table);
}

// Gọi hàm để hiển thị bảng
renderTable();